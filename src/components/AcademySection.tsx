import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Advanced Endodontics Masterclass",
    duration: "3 days",
    level: "Advanced",
    rating: 4.9,
    students: 120,
    price: "$2,495",
    description: "Comprehensive training in modern endodontic techniques, including microscopic dentistry and 3D imaging.",
    highlights: ["Hands-on practice", "Live patient procedures", "Certification included"]
  },
  {
    title: "Digital Dentistry Workshop",
    duration: "2 days",
    level: "Intermediate",
    rating: 4.8,
    students: 85,
    price: "$1,795",
    description: "Master digital workflows, CAD/CAM technology, and digital impression techniques for modern practice.",
    highlights: ["Latest technology", "Software training", "Equipment demos"]
  },
  {
    title: "Anxiety Management Protocols",
    duration: "1 day",
    level: "Beginner",
    rating: 4.9,
    students: 200,
    price: "$895",
    description: "Evidence-based techniques for managing patient anxiety and creating a calming dental environment.",
    highlights: ["Psychology insights", "Communication skills", "Practice protocols"]
  }
];

const AcademySection = () => {
  return (
    <section id="academy" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Development Academy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advance your career with cutting-edge training programs designed by leading dental professionals. 
            Stay at the forefront of dental innovation and patient care excellence.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-primary-soft p-4 rounded-2xl inline-block mb-3">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold text-foreground">25+</h4>
            <p className="text-muted-foreground">Course Modules</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary-soft p-4 rounded-2xl inline-block mb-3">
              <Award className="h-8 w-8 text-secondary" />
            </div>
            <h4 className="text-2xl font-bold text-foreground">98%</h4>
            <p className="text-muted-foreground">Certification Rate</p>
          </div>
          <div className="text-center">
            <div className="bg-success-soft p-4 rounded-2xl inline-block mb-3">
              <Users className="h-8 w-8 text-success" />
            </div>
            <h4 className="text-2xl font-bold text-foreground">500+</h4>
            <p className="text-muted-foreground">Professionals Trained</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-soft p-4 rounded-2xl inline-block mb-3">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-2xl font-bold text-foreground">4.9</h4>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
        
        {/* Courses */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="shadow-card border-border hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={course.level === 'Advanced' ? 'destructive' : course.level === 'Intermediate' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-warning mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground leading-tight">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} enrolled
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                  <Button variant="medical" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Registration CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Advance Your Practice?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of dental professionals committed to excellence. 
            Get exclusive access to new courses, networking events, and continuing education credits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy">
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
                Browse All Courses
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;