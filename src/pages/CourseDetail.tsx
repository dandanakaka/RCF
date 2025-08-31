import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, Clock, Users, BookOpen, PlayCircle, Download, 
  Award, ChevronLeft, Globe, Smartphone, Trophy,
  CheckCircle, Lock, Calendar
} from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [enrolled, setEnrolled] = useState(false);

  // Mock course data (in real app, fetch based on courseId)
  const course = {
    id: parseInt(courseId || "1"),
    title: "Advanced Endodontics Masterclass",
    instructor: "Dr. Sarah Johnson",
    instructorTitle: "Chief Endodontist, Dental Excellence Center",
    instructorImage: "/placeholder.svg",
    duration: "12 hours",
    level: "Advanced",
    rating: 4.9,
    reviews: 127,
    students: 1200,
    price: 299,
    originalPrice: 399,
    thumbnail: "/placeholder.svg",
    previewVideo: "/placeholder.svg",
    description: "Master advanced endodontic techniques with microscopic dentistry and 3D imaging. This comprehensive course covers everything from diagnosis to complex retreatment procedures.",
    learningObjectives: [
      "Master microscopic endodontic techniques",
      "Understand 3D imaging and CBCT interpretation",
      "Perform complex root canal retreatments",
      "Manage endodontic emergencies effectively",
      "Apply latest pain management protocols"
    ],
    requirements: [
      "Basic endodontic knowledge required",
      "Access to dental practice recommended",
      "Willingness to practice new techniques"
    ],
    includes: [
      "12 hours of on-demand video",
      "45 downloadable resources",
      "Certificate of completion",
      "Lifetime access to materials",
      "30-day money-back guarantee"
    ],
    curriculum: [
      {
        title: "Introduction to Advanced Endodontics",
        duration: "45 minutes",
        lessons: [
          { title: "Course Overview and Objectives", duration: "8 min", isPreview: true },
          { title: "History of Endodontic Advances", duration: "12 min", isPreview: false },
          { title: "Current Trends in Endodontics", duration: "15 min", isPreview: false },
          { title: "Case Study Introduction", duration: "10 min", isPreview: false }
        ]
      },
      {
        title: "Microscopic Dentistry Fundamentals",
        duration: "2 hours 15 minutes",
        lessons: [
          { title: "Setting Up Your Microscope", duration: "20 min", isPreview: true },
          { title: "Proper Positioning and Ergonomics", duration: "25 min", isPreview: false },
          { title: "Illumination Techniques", duration: "18 min", isPreview: false },
          { title: "Documentation and Photography", duration: "22 min", isPreview: false },
          { title: "Clinical Cases with Microscope", duration: "30 min", isPreview: false },
          { title: "Hands-on Practice Exercises", duration: "20 min", isPreview: false }
        ]
      },
      {
        title: "3D Imaging and CBCT Interpretation",
        duration: "1 hour 30 minutes",
        lessons: [
          { title: "CBCT Basics and Indications", duration: "25 min", isPreview: false },
          { title: "Reading CBCT Scans", duration: "30 min", isPreview: false },
          { title: "Case Planning with 3D Images", duration: "20 min", isPreview: false },
          { title: "Integration with Treatment Planning", duration: "15 min", isPreview: false }
        ]
      },
      {
        title: "Advanced Treatment Techniques",
        duration: "3 hours",
        lessons: [
          { title: "Complex Anatomy Navigation", duration: "25 min", isPreview: false },
          { title: "Calcified Canal Management", duration: "30 min", isPreview: false },
          { title: "Perforation Repair Techniques", duration: "35 min", isPreview: false },
          { title: "Retreatment Protocols", duration: "40 min", isPreview: false },
          { title: "Surgical Endodontics", duration: "30 min", isPreview: false },
          { title: "Post and Core Procedures", duration: "20 min", isPreview: false }
        ]
      },
      {
        title: "Case Studies and Clinical Applications",
        duration: "2 hours 30 minutes",
        lessons: [
          { title: "Complex Case #1: Maxillary Molar", duration: "30 min", isPreview: false },
          { title: "Complex Case #2: Mandibular Premolar", duration: "25 min", isPreview: false },
          { title: "Complex Case #3: Retreatment Case", duration: "35 min", isPreview: false },
          { title: "Complication Management", duration: "30 min", isPreview: false },
          { title: "Patient Communication Strategies", duration: "20 min", isPreview: false },
          { title: "Final Assessment and Review", duration: "10 min", isPreview: false }
        ]
      }
    ],
    instructorBio: "Dr. Sarah Johnson is a board-certified endodontist with over 15 years of experience. She has published numerous research papers and is a frequent speaker at international dental conferences.",
    lastUpdated: "December 2024",
    language: "English",
    closedCaptions: true
  };

  const handleEnroll = () => {
    setEnrolled(true);
    // In real app, handle payment and enrollment
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/academy" className="hover:text-primary flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Academy
            </Link>
            <span>/</span>
            <span className="text-foreground">Course Details</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <Badge className="mb-3" variant="outline">{course.level}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={course.instructorImage} 
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor}</p>
                  <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Last updated {course.lastUpdated}
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {course.language}
                </div>
                {course.closedCaptions && (
                  <div className="flex items-center gap-1">
                    <Smartphone className="h-4 w-4" />
                    Closed captions
                  </div>
                )}
              </div>
            </div>

            {/* Course Content Tabs */}
            <Tabs defaultValue="curriculum" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Course Curriculum
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {course.curriculum.length} sections • {course.curriculum.reduce((total, section) => total + section.lessons.length, 0)} lectures • {course.duration} total
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {course.curriculum.map((section, index) => (
                        <AccordionItem key={index} value={`section-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex justify-between items-center w-full pr-4">
                              <span className="font-medium">{section.title}</span>
                              <span className="text-sm text-muted-foreground">{section.duration}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center justify-between p-3 border border-border rounded-lg">
                                  <div className="flex items-center gap-3">
                                    {lesson.isPreview ? (
                                      <PlayCircle className="h-4 w-4 text-primary" />
                                    ) : enrolled ? (
                                      <CheckCircle className="h-4 w-4 text-success" />
                                    ) : (
                                      <Lock className="h-4 w-4 text-muted-foreground" />
                                    )}
                                    <span className="text-sm">{lesson.title}</span>
                                    {lesson.isPreview && (
                                      <Badge variant="outline" className="text-xs">Preview</Badge>
                                    )}
                                  </div>
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What you'll learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {course.learningObjectives.map((objective, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img 
                        src={course.instructorImage} 
                        alt={course.instructor}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <CardTitle>{course.instructor}</CardTitle>
                        <p className="text-muted-foreground">{course.instructorTitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{course.instructorBio}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Reviews coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">${course.price}</span>
                    {course.originalPrice > course.price && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
                </div>

                {enrolled ? (
                  <Link to={`/academy/course/${course.id}/learn`}>
                    <Button className="w-full" size="lg">
                      Continue Learning
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleEnroll}
                    variant="medical"
                  >
                    Enroll Now
                  </Button>
                )}

                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">This course includes:</h4>
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Trophy className="h-4 w-4" />
                    Certificate of completion
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Smartphone className="h-4 w-4" />
                    Access on mobile and desktop
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;