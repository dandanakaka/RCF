import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, Settings, 
  Maximize, PlayCircle, CheckCircle, Lock, Download,
  BookOpen, MessageCircle, Star, Clock, ChevronLeft,
  RotateCcw, RotateCw
} from "lucide-react";
import { Link } from "react-router-dom";

const CoursePlayer = () => {
  const { courseId } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock course data with video lessons
  const course = {
    id: parseInt(courseId || "1"),
    title: "Advanced Endodontics Masterclass",
    instructor: "Dr. Sarah Johnson",
    curriculum: [
      {
        title: "Introduction to Advanced Endodontics",
        lessons: [
          { 
            id: 0,
            title: "Course Overview and Objectives", 
            duration: "8:30",
            videoUrl: "/placeholder.svg",
            resources: ["Course Syllabus.pdf", "Learning Objectives.pdf"],
            notes: "Welcome to the Advanced Endodontics Masterclass. In this lesson, we'll cover the course structure and what you'll achieve by the end."
          },
          { 
            id: 1,
            title: "History of Endodontic Advances", 
            duration: "12:45",
            videoUrl: "/placeholder.svg",
            resources: ["Historical Timeline.pdf"],
            notes: "Understanding the evolution of endodontic treatment helps us appreciate current best practices."
          },
          { 
            id: 2,
            title: "Current Trends in Endodontics", 
            duration: "15:20",
            videoUrl: "/placeholder.svg", 
            resources: ["Current Research Papers.pdf", "Technology Overview.pdf"],
            notes: "Modern endodontics incorporates advanced technology and evidence-based techniques."
          }
        ]
      },
      {
        title: "Microscopic Dentistry Fundamentals",
        lessons: [
          { 
            id: 3,
            title: "Setting Up Your Microscope", 
            duration: "20:15",
            videoUrl: "/placeholder.svg",
            resources: ["Microscope Setup Guide.pdf", "Checklist.pdf"],
            notes: "Proper microscope setup is crucial for successful endodontic treatment."
          },
          { 
            id: 4,
            title: "Proper Positioning and Ergonomics", 
            duration: "25:30",
            videoUrl: "/placeholder.svg",
            resources: ["Ergonomics Guide.pdf"],
            notes: "Maintaining proper posture prevents injury and improves treatment precision."
          }
        ]
      }
    ]
  };

  const allLessons = course.curriculum.flatMap(section => section.lessons);
  const currentLessonData = allLessons[currentLesson];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const goToNextLesson = () => {
    if (currentLesson < allLessons.length - 1) {
      markLessonComplete(currentLesson);
      setCurrentLesson(currentLesson + 1);
      setProgress(0);
    }
  };

  const goToPreviousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setProgress(0);
    }
  };

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const changeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      
      // Auto-mark as complete when 90% watched
      if (currentProgress > 90 && !completedLessons.includes(currentLesson)) {
        markLessonComplete(currentLesson);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [currentLesson, completedLessons]);

  const courseProgress = (completedLessons.length / allLessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={`/academy/course/${courseId}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
                Back to course
              </Link>
              <div>
                <h1 className="font-semibold text-foreground">{course.title}</h1>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Progress: {Math.round(courseProgress)}%
              </div>
              <Progress value={courseProgress} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 h-[calc(100vh-80px)]">
        {/* Video Player */}
        <div className="lg:col-span-3 bg-black relative">
          <div className="relative w-full h-full">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              poster={currentLessonData.videoUrl}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={currentLessonData.videoUrl} type="video/mp4" />
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              {/* Progress Bar */}
              <div className="mb-4">
                <Progress value={progress} className="h-1 bg-white/20" />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={skipBackward}
                    className="text-white hover:bg-white/20"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToPreviousLesson}
                    disabled={currentLesson === 0}
                    className="text-white hover:bg-white/20"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToNextLesson}
                    disabled={currentLesson === allLessons.length - 1}
                    className="text-white hover:bg-white/20"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={skipForward}
                    className="text-white hover:bg-white/20"
                  >
                    <RotateCw className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Speed Control */}
                  <select 
                    value={playbackSpeed}
                    onChange={(e) => changeSpeed(parseFloat(e.target.value))}
                    className="bg-white/20 text-white rounded px-2 py-1 text-sm"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={0.75}>0.75x</option>
                    <option value={1}>1x</option>
                    <option value={1.25}>1.25x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                  </select>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Settings className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Lesson Title Overlay */}
            <div className="absolute top-6 left-6 text-white">
              <h2 className="text-xl font-semibold mb-2">{currentLessonData.title}</h2>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="h-4 w-4" />
                {currentLessonData.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-muted/30 border-l border-border overflow-y-auto">
          <Tabs defaultValue="curriculum" className="h-full">
            <TabsList className="grid w-full grid-cols-3 m-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="px-4 pb-4">
              <Accordion type="multiple" className="w-full">
                {course.curriculum.map((section, sectionIndex) => (
                  <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-medium text-sm">{section.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-1">
                        {section.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setCurrentLesson(lesson.id)}
                            className={`w-full p-3 text-left rounded-lg transition-colors ${
                              currentLesson === lesson.id 
                                ? 'bg-primary text-primary-foreground' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {completedLessons.includes(lesson.id) ? (
                                <CheckCircle className="h-4 w-4 text-success" />
                              ) : currentLesson === lesson.id ? (
                                <PlayCircle className="h-4 w-4" />
                              ) : (
                                <PlayCircle className="h-4 w-4 text-muted-foreground" />
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{lesson.title}</p>
                                <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="notes" className="px-4 pb-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Lesson Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentLessonData.notes}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="px-4 pb-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Downloadable Resources</h4>
                  <div className="space-y-2">
                    {currentLessonData.resources.map((resource, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border border-border rounded">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{resource}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;