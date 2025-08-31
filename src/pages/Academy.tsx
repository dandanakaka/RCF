import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, Clock, Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Advanced Endodontics Masterclass",
    instructor: "Dr. Sarah Johnson",
    duration: "12 hours",
    level: "Advanced",
    rating: 4.9,
    reviews: 127,
    students: 1200,
    price: 299,
    originalPrice: 399,
    thumbnail: "/placeholder.svg",
    description: "Master advanced endodontic techniques with microscopic dentistry and 3D imaging.",
    skills: ["Microscopic Dentistry", "3D Imaging", "Root Canal Therapy", "Pain Management"],
    lastUpdated: "December 2024",
    bestseller: true,
    videoCount: 45,
    category: "Endodontics"
  },
  {
    id: 2,
    title: "Digital Dentistry Complete Course",
    instructor: "Dr. Michael Chen",
    duration: "8 hours",
    level: "Intermediate",
    rating: 4.8,
    reviews: 89,
    students: 850,
    price: 199,
    originalPrice: 249,
    thumbnail: "/placeholder.svg",
    description: "Master digital workflows, CAD/CAM technology, and digital impression techniques.",
    skills: ["CAD/CAM", "Digital Impressions", "3D Printing", "Digital Workflows"],
    lastUpdated: "November 2024",
    bestseller: false,
    videoCount: 32,
    category: "Digital Dentistry"
  },
  {
    id: 3,
    title: "Anxiety Management in Dental Practice",
    instructor: "Dr. Emily Rodriguez",
    duration: "6 hours",
    level: "Beginner",
    rating: 4.9,
    reviews: 203,
    students: 2100,
    price: 149,
    originalPrice: 199,
    thumbnail: "/placeholder.svg",
    description: "Evidence-based techniques for managing patient anxiety and creating calming environments.",
    skills: ["Psychology", "Communication", "Sedation", "Behavioral Management"],
    lastUpdated: "January 2025",
    bestseller: true,
    videoCount: 24,
    category: "Patient Care"
  },
  {
    id: 4,
    title: "Implant Dentistry Fundamentals",
    instructor: "Dr. Robert Wilson",
    duration: "15 hours",
    level: "Advanced",
    rating: 4.7,
    reviews: 156,
    students: 950,
    price: 349,
    originalPrice: 449,
    thumbnail: "/placeholder.svg",
    description: "Comprehensive training in dental implant placement and restoration.",
    skills: ["Implant Placement", "Bone Grafting", "Prosthetics", "Surgical Planning"],
    lastUpdated: "October 2024",
    bestseller: false,
    videoCount: 58,
    category: "Oral Surgery"
  }
];

const categories = ["All", "Endodontics", "Digital Dentistry", "Patient Care", "Oral Surgery", "Orthodontics", "Periodontics"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Academy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl font-bold mb-4">Professional Development Academy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Advance your dental practice with expert-led courses from leading professionals
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for courses, instructors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/95 border-0"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-soft p-3 rounded-xl inline-block mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Expert Courses</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-soft p-3 rounded-xl inline-block mb-3">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">10,000+</h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="bg-success-soft p-3 rounded-xl inline-block mb-3">
                <Award className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground">Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-soft p-3 rounded-xl inline-block mb-3">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">4.8</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Course Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="mb-8">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-7 mb-6">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex gap-4 items-center mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Level:</span>
                <select 
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-muted-foreground">
                {filteredCourses.length} courses found
              </p>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover-lift border-border">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {course.bestseller && (
                    <Badge className="absolute top-3 left-3 bg-warning text-warning-foreground">
                      Bestseller
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-warning" />
                      {course.rating}
                    </div>
                    <span>({course.reviews} reviews)</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </div>
                    <span>{course.videoCount} videos</span>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">
                        ${course.price}
                      </span>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link to={`/academy/course/${course.id}`}>
                      <Button variant="medical" size="sm">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;