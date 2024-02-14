import { course_images as images } from "../assets/images";

const courses = [
  {
    id: 1001,
    subcategory_id: 101,
    title: "The Complete 2024 Web Development Bootcamp",
    img: images.the_complete_2024_web_development_bootcamp,
    instructor: "Dr. Angela Yu",
    price: 3990.0,
    description:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    ratings: {
      stars: 4.7,
      count: 351389,
    },
    students: 1174688,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
      "After the course you will be able to build ANY website you want.",
      "Build fully-fledged websites and web apps for your startup or business.",
      "Work as a freelance web developer.",
      "Master frontend development with React",
      "Master backend development with Node",
      "Learn professional developer best practices.",
    ],
    course_content: [
      {
        title: "Front-End Web Development",
        content_list: [
          {
            title: "What You'll Get in This Course",
            time: "03:08",
          },
          {
            title: "Download the Course Syllabus",
            time: "00:12",
          },
          {
            title:
              "Download the 12 Rules to Learn to Code eBook [Latest Edition]",
            time: "00:42",
          },
          {
            title: "Download the Required Software",
            time: "00:43",
          },
          {
            title: "How Does the Internet Actually Work?",
            time: "05:27",
          },
          {
            title: "How Do Websites Actually Work?",
            time: "08:22",
          },
          {
            title: "How to Get the Most Out of the Course",
            time: "09:33",
          },
          {
            title: "How to Get Help When You're Stuck",
            time: "06:39",
          },
          {
            title: "Pathfinder",
            time: "02:20",
          },
        ],
      },
      {
        title: "Introduction to HTML",
        content_list: [
          {
            title: "A Note About 2023 Course Updates",
            time: "00:36",
          },
          {
            title: "What is HTML?",
            time: "04:18",
          },
          {
            title: "How to Download the Course Resources",
            time: "02:43",
          },
          {
            title: "HTML Heading Elements",
            time: "14:24",
          },
          {
            title: "HTML Paragraph Elements",
            time: "08:40",
          },
          {
            title: "Self Closing Tags",
            time: "11:40",
          },
          {
            title: "[Project] Movie Ranking",
            time: "05:43",
          },
          {
            title: "How to Ace this Course",
            time: "01:24",
          },
        ],
      },
      {
        title: "Intermediate HTML",
        content_list: [
          {
            title: "The List Element",
            time: "10:32",
          },
          {
            title: "Nesting and Indentation",
            time: "14:09",
          },
          {
            title: "Anchor Elements",
            time: "10:45",
          },
          {
            title: "Image Elements",
            time: "08:17",
          },
          {
            title: "[Project] Birthday Invite",
            time: "04:01",
          },
          {
            title: "Tip from Angela - Habit Building with the Calendar Trick",
            time: "02:52",
          },
          {
            title: "Get Access to the Monthly App Brewery Newsletter",
            time: "00:56",
          },
        ],
      },
      {
        title: "Multi-Page Websites",
        content_list: [
          {
            title: "Computer File Paths",
            time: "19:20",
          },
          {
            title: "What are Webpages?",
            time: "12:55",
          },
          {
            title: "The HTML Boilerplate",
            time: "12:53",
          },
          {
            title: "[Project] Portfolio Website",
            time: "08:34",
          },
          {
            title: "How to Host Your Website for Free with GitHub",
            time: "08:33",
          },
          {
            title: "Introduction to Capstone Projects",
            time: "05:05",
          },
          {
            title: "Instructions for Capstone Project 1 - Online Resume",
            time: "02:22",
          },
        ],
      },
      {
        title: "Introduction to CSS",
        content_list: [
          {
            title: "Why do we need CSS?",
            time: "08:44",
          },
          {
            title: "How to add CSS",
            time: "15:19",
          },
          {
            title: "CSS Quiz",
            string: "3 questions",
          },
          {
            title: "CSS Selectors",
            time: "22:56",
          },
          {
            title: "[Project] Colour Vocab Website",
            time: "09:08",
          },
          {
            title: "Tip from Angela - Dealing with Distractions",
            time: "02:28",
          },
          {
            title: "Join the Student Community",
            time: "00:39",
          },
        ],
      },
      {
        title: "CSS Properties",
        content_list: [
          {
            title: "CSS Colours",
            time: "07:05",
          },
          {
            title: "Font Properties",
            time: "21:26",
          },
          {
            title: "Inspecting CSS",
            time: "11:52",
          },
          {
            title: "The CSS Box Model - Margin, Padding and Border",
            time: "20:45",
          },
          {
            title: "[Project] Motivational Poster Website",
            time: "07:37",
          },
        ],
      },
      {
        title: "Intermediate CSS",
        content_list: [
          {
            title: "The Cascade - Specificity and Inheritance",
            time: "25:28",
          },
          {
            title: "Combining CSS Selectors",
            time: "23:12",
          },
          {
            title: "CSS Positioning",
            time: "22:50",
          },
          {
            title: "[Project] CSS Flag",
            time: "17:54",
          },
          {
            title: "Tip from Angela - Nothing Easy is Worth Doing!",
            time: "03:35",
          },
        ],
      },
      {
        title: "Advanced CSS",
        content_list: [
          {
            title: "CSS Display",
            time: "11:30",
          },
          {
            title: "CSS Float",
            time: "11:39",
          },
          {
            title: "How to Create Responsive Websites",
            time: "18:44",
          },
          {
            title: "Media Queries",
            time: "10:32",
          },
          {
            title: "[Project] Web Design Agency Website",
            time: "07:06",
          },
          {
            title: "Tip from Angela - How to Deal with Procrastination",
            time: "04:08",
          },
        ],
      },
      {
        title: "Flexbox",
        content_list: [
          {
            title: "Display: Flex",
            time: "14:21",
          },
          {
            title: "Flex Direction",
            time: "13:43",
          },
          {
            title: "Flex Layout",
            time: "19:22",
          },
          {
            title: "Flex Sizing",
            time: "24:27",
          },
          {
            title: "[Project] Pricing Table",
            time: "10:08",
          },
          {
            title: "Tip from Angela - Building a Programming Habit",
            time: "02:46",
          },
        ],
      },
      {
        title: "Grid",
        content_list: [
          {
            title: "Display: Grid",
            time: "14:55",
          },
          {
            title: "Grid Sizing",
            time: "23:32",
          },
          {
            title: "Grid Placement",
            time: "26:17",
          },
          {
            title: "[Project] Mondrian Painting",
            time: "06:45",
          },
        ],
      },
    ],
  },
  {
    id: 1002,
    subcategory_id: 101,
    title: "The Web Developer Bootcamp 2024",
    img: images.the_web_developer_bootcamp_2024,
    instructor: "Colt Steele",
    price: 3790.0,
    description:
      "10 Hours of React just added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!",
    ratings: {
      stars: 4.7,
      count: 268584,
    },
    students: 897114,
    lastUpdated: "Last updated 12/2023",
    what_you_will_learn: [
      "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
      "Make REAL web applications using cutting-edge technologies",
      "Create responsive, accessible, and beautiful layouts",
      "Recognize and prevent common security exploits like SQL-Injection & XSS",
      "Continue to learn and grow as a developer, long after the course ends",
      "Create a blog application from scratch using Node, Express, and MongoDB.",
      "Create a complicated yelp-like application from scratch",
      "Deploy your applications and work with cloud databases",
      "Create static HTML and CSS portfolio sites and landing pages",
      "Think like a developer.  Become an expert at Googling code questions!",
      "Create complex HTML forms with validations",
      "Implement full authentication from scratch!",
      "Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma",
      "Implement responsive navbars on websites",
      "Use JavaScript variables, conditionals, loops, functions, arrays, and objects",
      "Write Javascript functions, and understand scope and higher order functions",
      'Master the "weird" parts of JavaScript',
      "Create full-stack web applications from scratch",
      "Manipulate the DOM with vanilla JS",
      "Write JavaScript based browser games",
      "Use Postman to monitor and test APIs",
      "Use NodeJS to write server-side JavaScript",
      "Write complex web apps with multiple models and data associations",
      "Write a REAL application using everything in the course",
      "Use Express and MongoDB to create full-stack JS applications",
      "Use common JS data structures like Arrays and Objects",
      "Master the command line interface",
      "Use NPM to install all sorts of useful packages",
      "Understand the ins and outs of HTTP requests",
      "Create your own Node modules",
      "Make a beautiful, responsive photographer's portfolio page",
      "Create a beautiful, responsive landing page for a startup",
      "Implement user authentication",
      "Create a beautiful animated todo list application",
      "Create single page applications with AJAX",
    ],
    course_content: [
      {
        title: "Course Orientation",
        content_list: [
          {
            title: "Welcome To The Course!",
            time: "03:47",
          },
          {
            title: "Joining The Community Chat & Groups",
            time: "00:26",
          },
          {
            title: "Curriculum Walkthrough",
            time: "04:12",
          },
          {
            title: "When Was The Course Last Updated?",
            time: "02:17",
          },
          {
            title: "Course Change Log",
            time: "00:18",
          },
          {
            title: "Will I Get A Job?",
            time: "05:45",
          },
          {
            title: "Accessing Course Code & Slides",
            time: "02:23",
          },
          {
            title: "Tips On The Interactive Coding Exercises",
            time: "03:25",
          },
          {
            title: "Course Coding Exercise Solutions",
            time: "00:16",
          },
          {
            title: "Migrating From The Old Version Of This Course",
            time: "08:07",
          },
        ],
      },
      {
        title: "An Introduction to Web Development",
        content_list: [
          {
            title: "What Matters In This Section?",
            time: "03:28",
          },
          {
            title: "The Internet in 5 Minutes",
            time: "05:42",
          },
          {
            title: "Intro to the Web",
            time: "06:01",
          },
          {
            title: "The Request/Response Cycle",
            time: "04:21",
          },
          {
            title: "Front-End and Back-End",
            time: "03:59",
          },
          {
            title: "What do HTML/CSS/JS do?",
            time: "05:36",
          },
          {
            title: "Setting Up Our Developer Environment",
            time: "05:59",
          },
          {
            title: "OPTIONAL VSCode Theme",
            time: "04:28",
          },
        ],
      },
      {
        title: "HTML: The Essentials",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:12",
          },
          {
            title: "Introduction to HTML",
            time: "06:55",
          },
          {
            title: "Our Very First HTML Page",
            time: "05:33",
          },
          {
            title: "TIP: Mozilla Developer Network",
            time: "02:41",
          },
          {
            title: "Paragraph Elements",
            time: "03:14",
          },
          {
            title: "Heading Elements",
            time: "06:34",
          },
          {
            title: "Pangolin Practice",
            string: "1 question",
          },
          {
            title: "Introduction to the Chrome Inspector",
            time: "03:07",
          },
          {
            title: "HTML Boilerplate",
            time: "07:25",
          },
          {
            title: "VSCode Tip: Auto-format",
            time: "02:37",
          },
          {
            title: "List Elements",
            time: "06:39",
          },
          {
            title: "Favorite Movies Exercises",
            string: "1 question",
          },
          {
            title: "Anchor Tags",
            time: "07:07",
          },
          {
            title: "Images",
            time: "06:26",
          },
          {
            title: "Comments",
            time: "02:31",
          },
          {
            title: "Wolf Images & Links Exercise",
            string: "1 question",
          },
        ],
      },
      {
        title: "HTML: Next Steps & Semantics",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:27",
          },
          {
            title: "What Exactly Is HTML5?",
            time: "06:27",
          },
          {
            title: "Block vs. Inline Elements - Divs and Spans",
            time: "08:42",
          },
          {
            title: "An Odd Assortment of Elements: HR, BR, Sup, & Sub",
            time: "06:18",
          },
          {
            title: "Entity Codes",
            time: "06:01",
          },
          {
            title: "Snowman Logo Exercise",
            string: "1 question",
          },
          {
            title: "Intro to Semantic Markup",
            time: "09:01",
          },
          {
            title: "Playing With Semantic Elements",
            time: "12:18",
          },
          {
            title: "Screen Reader Demonstration",
            time: "03:33",
          },
          {
            title: "VSCode Tip: Emmet",
            time: "06:12",
          },
        ],
      },
      {
        title: "HTML: Forms & Tables",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:52",
          },
          {
            title: "Unit Goals",
            time: "01:09",
          },
          {
            title: "Introducing HTML Tables",
            time: "04:08",
          },
          {
            title: "Tables: TR, TD, and TH Elements",
            time: "09:11",
          },
          {
            title: "Tables: Thead, Tbody, and Tfoot Elements",
            time: "02:15",
          },
          {
            title: "Tables: Colspan & Rowspan",
            time: "04:14",
          },
          {
            title: "Table Practice Exercise",
            string: "1 question",
          },
          {
            title: "The Form Element",
            time: "09:18",
          },
          {
            title: "Common Input Types",
            time: "05:27",
          },
          {
            title: "The All-Important Label",
            time: "06:52",
          },
          {
            title: "HTML Buttons",
            time: "05:17",
          },
          {
            title: "The Name Attribute",
            time: "05:26",
          },
          {
            title: '"Hijacking" Google & Reddit\'s Search',
            time: "06:25",
          },
          {
            title: "Radio Buttons, Checkboxes, & Selects",
            time: "10:54",
          },
          {
            title: "Range & Text Area",
            time: "07:02",
          },
          {
            title: "Forms Practice Exercise",
            string: "1 question",
          },
          {
            title: "HTML5 Form Validations",
            time: "09:27",
          },
          {
            title: "Creating A Marathon Registration Form Intro",
            time: "02:45",
          },
          {
            title: "Creating A Marathon Registration Form Solution",
            time: "12:20",
          },
        ],
      },
      {
        title: "CSS: The Very Basics",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:51",
          },
          {
            title: "What is CSS?",
            time: "04:55",
          },
          {
            title: "CSS is Huge, Don't Panic!",
            time: "04:03",
          },
          {
            title: "Including Styles Correctly",
            time: "06:15",
          },
          {
            title: "Color & Background-Color Properties",
            time: "05:15",
          },
          {
            title: "Our First CSS Exercise",
            string: "1 question",
          },
          {
            title: "Colors Systems: RGB & Named Colors",
            time: "07:21",
          },
          {
            title: "Colors Systems: Hexadecimal",
            time: "07:38",
          },
          {
            title: "Colors Quiz",
            string: "2 questions",
          },
          {
            title: "A Reminder On Semicolons & CSS",
            time: "01:11",
          },
          {
            title: "Common Text Properties",
            time: "11:16",
          },
          {
            title: "Font Size Basics With Pixels",
            time: "03:06",
          },
          {
            title: "The Font Family Property",
            time: "06:01",
          },
          {
            title: "Hipster Logo Exercise",
            string: "1 question",
          },
        ],
      },
      {
        title: "The World of CSS Selectors",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:38",
          },
          {
            title: "Universal & Element Selectors",
            time: "04:57",
          },
          {
            title: "The ID Selector",
            time: "05:24",
          },
          {
            title: "The Class Selector",
            time: "04:43",
          },
          {
            title: "Basic Selectors Practice",
            string: "1 question",
          },
          {
            title: "The Descendant Selector",
            time: "05:11",
          },
          {
            title: "Descendant Combinator Practice",
            string: "1 question",
          },
          {
            title: "The Adjacent & Direct-Descendant Selectors",
            time: "05:03",
          },
          {
            title: "The Attribute Selector",
            time: "05:30",
          },
          {
            title: "Pseudo Classes",
            time: "08:46",
          },
          {
            title: "Checkerboard Exercise",
            string: "1 question",
          },
          {
            title: "Pseudo Elements",
            time: "04:23",
          },
          {
            title: "The CSS Cascade",
            time: "02:21",
          },
          {
            title: "WTF is Specificity",
            time: "08:00",
          },
          {
            title: "Specificity Quiz",
            string: "3 questions",
          },
          {
            title: "TIP: Chrome Dev Tools & CSS",
            time: "03:57",
          },
          {
            title: "Inline Styles & Important",
            time: "03:49",
          },
          {
            title: "CSS Inheritance",
            time: "05:10",
          },
        ],
      },
      {
        title: "The CSS Box Model",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "02:42",
          },
          {
            title: "Box Model: Width & Height",
            time: "05:40",
          },
          {
            title: "Box Model: Border & Border-Radius",
            time: "12:08",
          },
          {
            title: "Box Model Practice",
            string: "1 question",
          },
          {
            title: "Box Model: Padding",
            time: "07:45",
          },
          {
            title: "Box Model: Margin",
            time: "06:11",
          },
          {
            title: "The Display Property",
            time: "11:46",
          },
          {
            title: "CSS Units Revisited",
            time: "05:39",
          },
          {
            title: "CSS Units: ems",
            time: "08:20",
          },
          {
            title: "CSS Units: rems",
            time: "07:43",
          },
        ],
      },
      {
        title: "Other Assorted Useful CSS Properties",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "03:04",
          },
          {
            title: "Opacity & The Alpha Channel",
            time: "06:32",
          },
          {
            title: "The Position Property",
            time: "09:40",
          },
          {
            title: "CSS Transitions (yay!)",
            time: "11:17",
          },
          {
            title: "The Power of CSS Transforms",
            time: "13:13",
          },
          {
            title: "Fancy Button Hover Effect CodeAlong",
            time: "10:21",
          },
          {
            title: "The Truth About Background",
            time: "08:45",
          },
          {
            title: "Google Fonts is Amazing",
            time: "07:47",
          },
          {
            title: "IMPORTANT REMINDER: How To Find And Download Course Code",
            time: "01:12",
          },
          {
            title: "Photo Blog CodeAlong Pt. 1",
            time: "08:44",
          },
          {
            title: "Photo Blog CodeAlong Pt. 2",
            time: "08:38",
          },
        ],
      },
      {
        title: "Responsive CSS & Flexbox",
        content_list: [
          {
            title: "What Matters In This Section",
            time: "03:11",
          },
          {
            title: "What on Earth Is Flexbox?",
            time: "04:23",
          },
          {
            title: "Flex-Direction",
            time: "05:58",
          },
          {
            title: "Justify-Content",
            time: "05:07",
          },
          {
            title: "Flex-Wrap",
            time: "03:42",
          },
          {
            title: "Align-Items",
            time: "07:47",
          },
          {
            title: "Align-Content & Align-Self",
            time: "05:18",
          },
          {
            title: "Flex-Basis, Grow, & Shrink",
            time: "07:51",
          },
          {
            title: "Flex Shorthand",
            time: "05:38",
          },
          {
            title: "Responsive Design & Media Queries Intro",
            time: "07:18",
          },
          {
            title: "The Power of Media Queries",
            time: "09:25",
          },
          {
            title: "Building a Responsive Nav",
            time: "08:42",
          },
        ],
      },
    ],
  },
  {
    id: 1003,
    subcategory_id: 101,
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    img: images.the_complete_javascript_course_2024_from_zero_to_expert,
    instructor: "Jonas Schmedtmann",
    price: 4790.0,
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    ratings: {
      stars: 4.7,
      count: 197452,
    },
    students: 874786,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Become an advanced, confident, and modern JavaScript developer from scratch",
      "Build 6 beautiful real-world projects for your portfolio (not boring toy apps)",
      "Become job-ready by understanding how JavaScript really works behind the scenes",
      "How to think and work like a developer: problem-solving, researching, workflows",
      "JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.",
      "Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.",
      "Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.",
      "Complex concepts like the 'this' keyword, higher-order functions, closures, etc.",
      "Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs",
      "How to architect your code using flowcharts and common patterns",
      "Modern tools for 2022 and beyond: NPM, Parcel, Babel and ES6 modules",
      "Practice your skills with 50+ challenges and assignments (solutions included)",
      "Get fast and friendly support in the Q&A area",
      "Course pathways: design your unique learning path according to your goals!",
    ],
    course_content: [
      {
        title: "Welcome, Welcome, Welcome!",
        content_list: [
          {
            title: "Course Structure and Projects",
            time: "05:25",
          },
          {
            title: "Read Before You Start!",
            time: "00:40",
          },
          {
            title: "Watch Before You Start!",
            time: "06:09",
          },
          {
            title: "Setting Up Our Code Editor",
            time: "08:23",
          },
        ],
      },
      {
        title: "JavaScript Fundamentals \u2013 Part 1",
        content_list: [
          {
            title: "Section Intro",
            time: "00:53",
          },
          {
            title: "Hello World!",
            time: "05:57",
          },
          {
            title: "A Brief Introduction to JavaScript",
            time: "11:18",
          },
          {
            title: "Linking a JavaScript File",
            time: "15:55",
          },
          {
            title: "Values and Variables",
            time: "16:05",
          },
          {
            title: "Practice Assignments",
            time: "00:23",
          },
          {
            title: "Data Types",
            time: "19:19",
          },
          {
            title: "let, const and var",
            time: "09:58",
          },
          {
            title: "Basic Operators",
            time: "19:31",
          },
          {
            title: "Operator Precedence",
            time: "11:19",
          },
          {
            title: "A Note About Challenges",
            time: "00:29",
          },
          {
            title: "CHALLENGE #1",
            string: "1 question",
          },
          {
            title: "CHALLENGE #1: Video Solution",
            time: "07:20",
          },
          {
            title: "Strings and Template Literals",
            time: "10:57",
          },
          {
            title: "Taking Decisions: if / else Statements",
            time: "12:50",
          },
          {
            title: "CHALLENGE #2",
            string: "1 question",
          },
          {
            title: "CHALLENGE #2: Video Solution",
            time: "05:20",
          },
          {
            title: "Type Conversion and Coercion",
            time: "16:40",
          },
          {
            title: "Truthy and Falsy Values",
            time: "10:03",
          },
          {
            title: "Equality Operators: == vs. ===",
            time: "15:41",
          },
          {
            title: "Boolean Logic",
            time: "08:30",
          },
          {
            title: "Logical Operators",
            time: "10:37",
          },
          {
            title: "CHALLENGE #3",
            string: "1 question",
          },
          {
            title: "CHALLENGE #3: Video Solution",
            time: "11:42",
          },
          {
            title: "The switch Statement",
            time: "13:10",
          },
          {
            title: "Statements and Expressions",
            time: "06:08",
          },
          {
            title: "The Conditional (Ternary) Operator",
            time: "10:02",
          },
          {
            title: "CHALLENGE #4",
            string: "1 question",
          },
          {
            title: "CHALLENGE #4: Video Solution",
            time: "05:57",
          },
          {
            title: "JavaScript Releases: ES5, ES6+ and ESNext",
            time: "14:19",
          },
        ],
      },
      {
        title: "JavaScript Fundamentals \u2013 Part 2",
        content_list: [
          {
            title: "Section Intro",
            time: "00:36",
          },
          {
            title: "Activating Strict Mode",
            time: "10:27",
          },
          {
            title: "Functions",
            time: "19:08",
          },
          {
            title: "Function Declarations vs. Expressions",
            time: "10:39",
          },
          {
            title: "Arrow Functions",
            time: "09:52",
          },
          {
            title: "Functions Calling Other Functions",
            time: "10:07",
          },
          {
            title: "Reviewing Functions",
            time: "15:37",
          },
          {
            title: "CHALLENGE #1",
            string: "1 question",
          },
          {
            title: "CHALLENGE #1: Video Solution",
            time: "14:10",
          },
          {
            title: "Introduction to Arrays",
            time: "21:34",
          },
          {
            title: "Basic Array Operations (Methods)",
            time: "12:52",
          },
          {
            title: "CHALLENGE #2",
            string: "1 question",
          },
          {
            title: "CHALLENGE #2: Video Solution",
            time: "06:54",
          },
          {
            title: "Introduction to Objects",
            time: "06:08",
          },
          {
            title: "Dot vs. Bracket Notation",
            time: "19:21",
          },
          {
            title: "Object Methods",
            time: "23:04",
          },
          {
            title: "CHALLENGE #3",
            string: "1 question",
          },
          {
            title: "CHALLENGE #3: Video Solution",
            time: "09:50",
          },
          {
            title: "Iteration: The for Loop",
            time: "11:11",
          },
          {
            title: "Looping Arrays, Breaking and Continuing",
            time: "22:02",
          },
          {
            title: "Looping Backwards and Loops in Loops",
            time: "11:53",
          },
          {
            title: "The while Loop",
            time: "11:52",
          },
          {
            title: "CHALLENGE #4",
            string: "1 question",
          },
          {
            title: "CHALLENGE #4: Video Solution",
            time: "11:24",
          },
        ],
      },
      {
        title: "How to Navigate This Course",
        content_list: [
          {
            title: "Pathways and Section Roadmaps",
            time: "04:08",
          },
          {
            title: "Course Pathways",
            time: "00:07",
          },
        ],
      },
      {
        title: "Developer Skills & Editor Setup",
        content_list: [
          {
            title: "Section Intro",
            time: "00:39",
          },
          {
            title: "Section Roadmap",
            time: "00:22",
          },
          {
            title: "Setting up Prettier and VS Code",
            time: "16:22",
          },
          {
            title: "Installing Node.js and Setting Up a Dev Environment",
            time: "11:32",
          },
          {
            title: "Learning How to Code",
            time: "17:42",
          },
          {
            title: "How to Think Like a Developer: Become a Problem Solver!",
            time: "10:53",
          },
          {
            title: "Using Google, StackOverflow and MDN",
            time: "26:36",
          },
          {
            title: "Debugging (Fixing Errors)",
            time: "05:09",
          },
          {
            title: "Debugging with the Console and Breakpoints",
            time: "19:25",
          },
          {
            title: "Coding Challenge #1",
            time: "15:24",
          },
        ],
      },
      {
        title: "[OPTIONAL] HTML & CSS Crash Course",
        content_list: [
          {
            title: "Section Intro",
            time: "00:40",
          },
          {
            title: "Basic HTML Structure and Elements",
            time: "09:32",
          },
          {
            title: "Attributes, Classes and IDs",
            time: "13:09",
          },
          {
            title: "Basic Styling with CSS",
            time: "12:00",
          },
          {
            title: "Introduction to the CSS Box Model",
            time: "20:57",
          },
        ],
      },
      {
        title: "JavaScript in the Browser: DOM and Events Fundamentals",
        content_list: [
          {
            title: "Section Intro",
            time: "00:49",
          },
          {
            title: "Section Roadmap",
            time: "00:29",
          },
          {
            title: "PROJECT #1: Guess My Number!",
            time: "08:47",
          },
          {
            title: "What's the DOM and DOM Manipulation",
            time: "06:48",
          },
          {
            title: "Selecting and Manipulating Elements",
            time: "08:22",
          },
          {
            title: "Handling Click Events",
            time: "12:50",
          },
          {
            title: "Implementing the Game Logic",
            time: "19:33",
          },
          {
            title: "Manipulating CSS Styles",
            time: "08:17",
          },
          {
            title: "Coding Challenge #1",
            time: "11:40",
          },
          {
            title: "Implementing Highscores",
            time: "07:47",
          },
          {
            title: "Refactoring Our Code: The DRY Principle",
            time: "15:05",
          },
          {
            title: "PROJECT #2: Modal Window",
            time: "13:21",
          },
          {
            title: "Working With Classes",
            time: "16:55",
          },
          {
            title: 'Handling an "Esc" Keypress Event',
            time: "14:11",
          },
          {
            title: "PROJECT #3: Pig Game",
            time: "17:08",
          },
          {
            title: "Rolling the Dice",
            time: "15:58",
          },
          {
            title: "Switching the Active Player",
            time: "15:16",
          },
          {
            title: "Holding Current Score",
            time: "24:55",
          },
          {
            title: "Resetting the Game",
            time: "15:38",
          },
        ],
      },
      {
        title: "How JavaScript Works Behind the Scenes",
        content_list: [
          {
            title: "Section Intro",
            time: "01:31",
          },
          {
            title: "Section Roadmap",
            time: "00:30",
          },
          {
            title: "An High-Level Overview of JavaScript",
            time: "12:11",
          },
          {
            title: "The JavaScript Engine and Runtime",
            time: "13:47",
          },
          {
            title: "Execution Contexts and The Call Stack",
            time: "17:45",
          },
          {
            title: "Scope and The Scope Chain",
            time: "25:37",
          },
          {
            title: "Scoping in Practice",
            time: "21:13",
          },
          {
            title: "Variable Environment: Hoisting and The TDZ",
            time: "11:00",
          },
          {
            title: "Hoisting and TDZ in Practice",
            time: "14:42",
          },
          {
            title: "The this Keyword",
            time: "06:30",
          },
          {
            title: "The this Keyword in Practice",
            time: "13:11",
          },
          {
            title: "Regular Functions vs. Arrow Functions",
            time: "18:04",
          },
          {
            title: "Primitives vs. Objects (Primitive vs. Reference Types)",
            time: "16:06",
          },
          {
            title: "Primitives vs. Objects in Practice",
            time: "14:57",
          },
        ],
      },
      {
        title: "Data Structures, Modern Operators and Strings",
        content_list: [
          {
            title: "Section Intro",
            time: "00:53",
          },
          {
            title: "Section Roadmap",
            time: "00:22",
          },
          {
            title: "Destructuring Arrays",
            time: "19:33",
          },
          {
            title: "Practice Assignments",
            time: "00:10",
          },
          {
            title: "Destructuring Objects",
            time: "19:46",
          },
          {
            title: "The Spread Operator (...)",
            time: "21:26",
          },
          {
            title: "Rest Pattern and Parameters",
            time: "19:01",
          },
          {
            title: "Short Circuiting (&& and ||)",
            time: "15:55",
          },
          {
            title: "The Nullish Coalescing Operator (??)",
            time: "03:32",
          },
          {
            title: "Logical Assignment Operators",
            time: "11:39",
          },
          {
            title: "Coding Challenge #1",
            time: "14:57",
          },
          {
            title: "Looping Arrays: The for-of Loop",
            time: "07:20",
          },
          {
            title: "Enhanced Object Literals",
            time: "07:02",
          },
          {
            title: "Optional Chaining (?.)",
            time: "16:10",
          },
          {
            title: "Looping Objects: Object Keys, Values, and Entries",
            time: "10:09",
          },
          {
            title: "Coding Challenge #2",
            time: "14:30",
          },
          {
            title: "Sets",
            time: "13:18",
          },
          {
            title: "Maps: Fundamentals",
            time: "14:03",
          },
          {
            title: "Maps: Iteration",
            time: "12:41",
          },
          {
            title: "Summary: Which Data Structure to Use?",
            time: "09:40",
          },
          {
            title: "Coding Challenge #3",
            time: "09:37",
          },
          {
            title: "Working With Strings - Part 1",
            time: "16:53",
          },
          {
            title: "Working With Strings - Part 2",
            time: "21:45",
          },
          {
            title: "Working With Strings - Part 3",
            time: "21:41",
          },
          {
            title: "Coding Challenge #4",
            time: "15:15",
          },
          {
            title: "String Methods Practice",
            time: "16:36",
          },
        ],
      },
      {
        title: "A Closer Look at Functions",
        content_list: [
          {
            title: "Section Intro",
            time: "00:48",
          },
          {
            title: "Section Roadmap",
            time: "00:22",
          },
          {
            title: "Default Parameters",
            time: "09:17",
          },
          {
            title: "How Passing Arguments Works: Value vs. Reference",
            time: "13:36",
          },
          {
            title: "First-Class and Higher-Order Functions",
            time: "05:24",
          },
          {
            title: "Functions Accepting Callback Functions",
            time: "15:20",
          },
          {
            title: "Functions Returning Functions",
            time: "06:36",
          },
          {
            title: "The call and apply Methods",
            time: "16:51",
          },
          {
            title: "The bind Method",
            time: "21:33",
          },
          {
            title: "Coding Challenge #1",
            time: "18:47",
          },
          {
            title: "Immediately Invoked Function Expressions (IIFE)",
            time: "07:52",
          },
          {
            title: "Closures",
            time: "19:48",
          },
          {
            title: "More Closure Examples",
            time: "15:30",
          },
          {
            title: "Coding Challenge #2",
            time: "05:25",
          },
        ],
      },
    ],
  },
  {
    id: 1004,
    subcategory_id: 102,
    title: "iOS & Swift - The Complete iOS App Development Bootcamp",
    img: images.ios_swift_the_complete_ios_app_development_bootcamp,
    instructor: "Dr. Angela Yu",
    price: 3290.0,
    description:
      "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
    ratings: {
      stars: 4.7,
      count: 88894,
    },
    students: 367389,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company",
      "You will learn Xcode, UIKit and SwiftUI, ARKit, CoreML and CoreData.",
      "You will learn by doing, where every lesson is incorporated into a real-world app project.",
      "After the course, you will be able to build any app you want.",
      "Start your own app based business",
      "Become a digital nomad by working as a freelance iOS developer",
      "Master creating Augmented Reality apps using Apple\u2019s new ARKit",
      "Create apps that use Machine Learning using Apple\u2019s new CoreML",
      "Master app design so you'll know how to wireframe, mockup and prototype your app idea",
      "Master app marketing so you can publish your apps and generate downloads",
    ],
    course_content: [
      {
        title: "Getting Started with iOS Development and Swift 5",
        content_list: [
          {
            title: "Intro to the Course. What's coming up?",
            time: "04:02",
          },
          {
            title: "Download the Course Syllabus",
            time: "00:11",
          },
          {
            title: "The Giant List of Resources",
            time: "00:14",
          },
          {
            title: "How does an App Work?",
            time: "07:47",
          },
          {
            title: "How to Make an App",
            time: "08:36",
          },
          {
            title: "How to Get All the Free Stuff",
            time: "01:09",
          },
          {
            title: "Download your Massive Bundle of Assets",
            time: "00:30",
          },
          {
            title: "Download the 12 Rules to Learn to Code eBook PDF",
            time: "00:40",
          },
          {
            title: "How to Make the Most of the Bootcamp",
            time: "06:45",
          },
          {
            title: "How to Get Help When You're Stuck",
            time: "06:40",
          },
          {
            title: "Can I use Windows to develop iOS apps? (and other FAQs)",
            time: "01:06",
          },
          {
            title: "Developing for iOS - Tools and Materials",
            time: "09:59",
          },
          {
            title: "Getting set up with Xcode",
            time: "04:17",
          },
          {
            title: "Pathfinder",
            time: "02:09",
          },
        ],
      },
      {
        title: "Xcode Storyboards and Interface Builder",
        content_list: [
          {
            title: "The I am Rich App",
            time: "02:57",
          },
          {
            title: "A Note About the Next Lesson",
            time: "00:32",
          },
          {
            title: "Let's Create a Brand New Xcode Project",
            time: "05:30",
          },
          {
            title: "A Walkthrough of the Xcode Development Environment",
            time: "14:12",
          },
          {
            title: "Let's Design the User Interface!",
            time: "16:42",
          },
          {
            title: "Let's Incorporate Some Image Assets",
            time: "10:35",
          },
          {
            title: "How to Design and Add an App Icon",
            time: "09:09",
          },
          {
            title: "A Note About the Next Lesson",
            time: "00:14",
          },
          {
            title: "Run Your App on Your iPhone or Simulator",
            time: "13:03",
          },
          {
            title: "Join the Student Community",
            time: "00:25",
          },
          {
            title: "How to Ace this Course",
            time: "01:24",
          },
        ],
      },
      {
        title: "Xcode Storyboard and Interface Builder Challenge",
        content_list: [
          {
            title: "What You Will Create",
            time: "00:15",
          },
          {
            title: "Step 1: Create a New Xcode Project",
            time: "00:15",
          },
          {
            title: "Step 2: Add a Label Element from the Object Library",
            time: "00:17",
          },
          {
            title: "Step 3: Add an Image View to the Storyboard",
            time: "00:18",
          },
          {
            title: "Step 4: Add an App Icon",
            time: "00:18",
          },
          {
            title: "Step 5: Run Your App",
            time: "00:24",
          },
          {
            title: "Step 6: Show off your work!",
            time: "00:19",
          },
          {
            title: "Tip from Angela - Habit Building with the Calendar Trick",
            time: "02:52",
          },
        ],
      },
      {
        title: "Swift Programming Basics - Collections, Constants & Variables",
        content_list: [
          {
            title: "What You'll Make by the End of This Module",
            time: "01:59",
          },
          {
            title:
              "Cloning from GitHub and How to Download the L.A.B. Project Stubs",
            time: "08:47",
          },
          {
            title: "How to Design Your App",
            time: "09:34",
          },
          {
            title: "Let's Link Our Design to Our Code",
            time: "22:52",
          },
          {
            title: "Responding to User Interactions with IBActions",
            time: "08:30",
          },
          {
            title:
              'Bug Hint ?Thread 1: signal SIGABRT and "Not Key Value Coding Compliant"',
            time: "00:31",
          },
          {
            title:
              "[Swift Deep Dive] Naming Conventions, Commenting and String Interpolation",
            time: "09:20",
          },
          {
            title: "Storing Data using Variables and Arrays",
            time: "16:54",
          },
          {
            title: "[Swift Deep Dive] Variables",
            time: "07:50",
          },
          {
            title: "[Coding Exercise] Variables",
            string: "1 question",
          },
          {
            title: "[Swift Deep Dive] Arrays",
            time: "06:16",
          },
          {
            title: "[Code Exercise] Arrays",
            string: "1 question",
          },
          {
            title: "How to Randomise the Dice Images",
            time: "14:38",
          },
          {
            title:
              '?How to Solve the Error: "Maximum number of apps for free development reached"',
            time: "00:41",
          },
          {
            title:
              "[Swift Deep Dive] Constants, the Range Operator and Randomisation",
            time: "14:56",
          },
          {
            title: "[Code Exercise] Constants",
            string: "1 question",
          },
          {
            title: "[Code Exercise] Randomisation",
            string: "1 question",
          },
          {
            title: "Download the Completed App Project",
            time: "00:17",
          },
          {
            title: "Do You Want This?",
            time: "00:56",
          },
          {
            title: "Tip from Angela - Dealing with Distractions",
            time: "02:28",
          },
        ],
      },
      {
        title: "Swift Programming Basics Challenge",
        content_list: [
          {
            title: "What You Will Create",
            time: "00:34",
          },
          {
            title: "Step 1: Clone the Starting Project",
            time: "00:09",
          },
          {
            title: "Step 2: Design the User Interface",
            time: "00:42",
          },
          {
            title: "Step 3: Link Up the Design with Code",
            time: "00:13",
          },
          {
            title: "Step 4: Use Code to Change the 8 Ball Image",
            time: "00:58",
          },
          {
            title: "Step 5: Make the Ball Image Random",
            time: "00:28",
          },
          {
            title: "Step 6: Show off your work!",
            time: "00:09",
          },
          {
            title: "Download the Completed Project",
            time: "00:17",
          },
          {
            title: "Tip from Angela - Nothing Easy is Worth Doing!",
            time: "03:35",
          },
        ],
      },
      {
        title: "Auto Layout and Responsive UIs",
        content_list: [
          {
            title: "Why do we need Auto Layout?",
            time: "02:58",
          },
          {
            title: "Size Classes Explained",
            time: "06:34",
          },
          {
            title: "Setting Constraints and working with the Safe Area",
            time: "08:59",
          },
          {
            title: "How to use Alignment and Pinning",
            time: "05:52",
          },
          {
            title: "Working with Containers and Subviews",
            time: "06:49",
          },
          {
            title: "Stack Views",
            time: "10:27",
          },
          {
            title: "Auto Layout (Optional) Boss Challenge",
            time: "00:14",
          },
          {
            title: "Download the Completed Project",
            time: "00:34",
          },
          {
            title: "Calculator Challenge Solution and Walkthrough",
            time: "09:58",
          },
          {
            title: "Tip from Angela - How to Deal with Procrastination",
            time: "04:08",
          },
        ],
      },
      {
        title: "Using and Understanding Apple Documentation",
        content_list: [
          {
            title: "What You'll Make by the End of this Module",
            time: "02:19",
          },
          {
            title: "Setting up the Xylophone Project",
            time: "04:46",
          },
          {
            title: "The 5 Step Approach to Solve Any Programming Problem",
            time: "24:41",
          },
          {
            title: "[Swift Deep Dive] Functions and Scope",
            time: "10:47",
          },
          {
            title: "[Coding Exercise] Functions Part 1",
            time: "00:19",
          },
          {
            title: "Linking Multiple Buttons to the Same IBAction",
            time: "10:10",
          },
          {
            title: "[Swift Deep Dive] Functions with Inputs and Type Inference",
            time: "09:54",
          },
          {
            title: "[Coding Exercise] Functions Part 2",
            string: "1 question",
          },
          {
            title: "Playing Different Xylophone Sounds",
            time: "04:30",
          },
          {
            title: "Boss Challenge",
            time: "00:43",
          },
          {
            title: "Download the Completed App Project",
            time: "00:17",
          },
          {
            title: "Tip from Angela - Building a Programming Habit",
            time: "02:46",
          },
        ],
      },
      {
        title: "Intermediate Swift Programming - Control Flow and Optionals",
        content_list: [
          {
            title: "What You'll Make by the End of this Module",
            time: "00:47",
          },
          {
            title:
              "Setting up the Egg Timer Project and Linking the Storyboard and ViewController",
            time: "09:35",
          },
          {
            title: "[Swift Deep Dive] If-Else Control Flow",
            time: "12:28",
          },
          {
            title: "[Coding Exercise] IF/ELSE",
            string: "1 question",
          },
          {
            title: "[Swift Deep Dive] Switch Statements",
            time: "07:27",
          },
          {
            title: "[Coding Exercise] Switch",
            string: "1 question",
          },
          {
            title: "Conditional Statements Challenge Solution",
            time: "04:53",
          },
          {
            title: "[Swift Deep Dive] Dictionaries",
            time: "03:55",
          },
          {
            title: "[Coding Exercise] Dictionaries",
            string: "1 question",
          },
          {
            title: "[Swift Deep Dive] Defining and Unwrapping Optionals",
            time: "10:58",
          },
          {
            title: "[Coding Exercise] Optionals",
            string: "1 question",
          },
          {
            title: "Dictionary Challenge Solution",
            time: "06:17",
          },
          {
            title: "Implementing a Countdown Timer Challenge",
            time: "01:23",
          },
          {
            title: "Egg Timer Challenge Solution",
            time: "08:12",
          },
          {
            title: "Showing the Timer to the User with a Progress View",
            time: "05:39",
          },
          {
            title: "Calculating the Progress Percentage",
            time: "07:39",
          },
          {
            title: "Using the 5 Step Approach to Debug our App",
            time: "11:08",
          },
          {
            title: "Download the Completed App Project",
            time: "00:17",
          },
          {
            title: "Tip from Angela - Set Your Expectations",
            time: "02:35",
          },
        ],
      },
      {
        title: "iOS App Design Patterns and Code Structuring",
        content_list: [
          {
            title: "What You'll Make by the End of this Module",
            time: "01:17",
          },
          {
            title: "Setting up the Quizzler Project and Showing the Questions",
            time: "11:02",
          },
          {
            title: "Checking Answers using 2-Dimensional Arrays",
            time: "12:28",
          },
          {
            title: "[Swift Deep Dive] Structures, Methods and Properties",
            time: "23:01",
          },
          {
            title: "[Coding Exercise] Structures",
            string: "1 question",
          },
          {
            title: "Creating a Question Struct",
            time: "07:55",
          },
          {
            title: "Giving the User Feedback and working with a ProgressView",
            time: "10:16",
          },
          {
            title: "Understand the MVC Design Pattern",
            time: "07:57",
          },
          {
            title: "Implementing MVC and Understanding Parameter Names",
            time: "09:47",
          },
          {
            title: "[Swift Deep Dive] Functions with Outputs and Return Types",
            time: "05:53",
          },
          {
            title: "[Coding Exercise] Functions Part 3",
            string: "1 question",
          },
          {
            title: "Refactoring to Implement the MVC Design Pattern",
            time: "08:41",
          },
          {
            title: "[Swift Deep Dive] Immutability",
            time: "07:29",
          },
          {
            title: "Using Mutating Functions to Track the Score",
            time: "09:27",
          },
          {
            title: "Download the Completed App Project",
            time: "00:17",
          },
          {
            title: "Tip from Angela - The 20 Minute Method",
            time: "02:39",
          },
        ],
      },
      {
        title: "iOS App Design Pattern Challenge",
        content_list: [
          {
            title: "What You'll Create",
            time: "00:23",
          },
          {
            title: "Step 1: Clone the Starting Project",
            time: "00:35",
          },
          {
            title: "Step 2: Update the storyLabel and Button Titles",
            time: "00:36",
          },
          {
            title: "Step 3: Create a Structure",
            time: "00:32",
          },
          {
            title: "Step 4: Update the Story",
            time: "00:39",
          },
          {
            title: "Step 5: Apply MVC",
            time: "00:47",
          },
          {
            title: "Step 6: Make the StoryBrain more Scalable",
            time: "00:37",
          },
          {
            title: "Step 7: Show off your Work!",
            time: "00:09",
          },
          {
            title: "Download the Completed App Project",
            time: "00:17",
          },
          {
            title: "Tip from Angela - Retrieval is How You Learn",
            time: "02:52",
          },
        ],
      },
    ],
  },
  {
    id: 1005,
    subcategory_id: 102,
    title: "Flutter & Dart - The Complete Guide [2024 Edition]",
    img: images.flutter_dart_the_complete_guide_2024_edition,
    instructor: "Academind by Maximilian Schwarzm\u00fcller",
    price: 4490.0,
    description:
      "A Complete Guide to the Flutter SDK &amp; Flutter Framework for building native iOS and Android apps",
    ratings: {
      stars: 4.6,
      count: 71972,
    },
    students: 290172,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Learn Flutter and Dart from the ground up, step-by-step",
      "Build engaging native mobile apps for both Android and iOS",
      "Use features like Google Maps, the device camera, authentication and much more!",
      "Learn how to upload images and how to send manual and automated push notifications",
      "Learn all the basics without stopping after them: Dive deeply into Flutter & Dart and become an advanced developer",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "Welcome To This Course!",
            time: "01:16",
          },
          {
            title: "What Is Flutter?",
            time: "02:49",
          },
          {
            title: "Flutter uses Dart!",
            time: "01:51",
          },
          {
            title: "One Codebase, Multiple Platforms",
            time: "02:56",
          },
          {
            title: "Flutter Setup - Overview",
            time: "03:58",
          },
          {
            title: "Windows Setup",
            time: "13:26",
          },
          {
            title: "macOS Setup",
            time: "17:53",
          },
          {
            title:
              "Project Creation & Setting Up a Code Editor for Flutter Development",
            time: "05:10",
          },
          {
            title: "Running a First Flutter App",
            time: "09:06",
          },
          {
            title: "Understanding Material Design",
            time: "02:35",
          },
          {
            title: "About This Course",
            time: "04:43",
          },
          {
            title: "Course Resources (Code Snapshots, Community & Slides)",
            time: "00:39",
          },
        ],
      },
      {
        title:
          "Flutter & Dart Basics I - Getting a Solid Foundation [ROLL DICE APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:21",
          },
          {
            title: "Analyzing A New Flutter Project",
            time: "08:50",
          },
          {
            title: "Form Dart To Machine Code",
            time: "03:05",
          },
          {
            title: "How Programming Languages Work",
            time: "05:51",
          },
          {
            title: "Starting From Scratch: Understanding Functions",
            time: "06:05",
          },
          {
            title: "Importing Features From Packages",
            time: "05:02",
          },
          {
            title: "How Flutter Apps Start",
            time: "02:26",
          },
          {
            title: "Knowledge Check: Flutter & Dart Basics",
            string: "6 questions",
          },
          {
            title: "Understanding Widgets",
            time: "02:52",
          },
          {
            title: "Using a First Widget & Passing Values to Functions",
            time: "04:37",
          },
          {
            title: "Positional & Named Arguments",
            time: "03:58",
          },
          {
            title: "Deep Dive: Position & Named Arguments",
            time: "01:55",
          },
          {
            title: "Combining Multiple Widgets",
            time: "02:50",
          },
          {
            title: 'Understanding "const" Values',
            time: "03:58",
          },
          {
            title: "Building More Complex Widget Trees",
            time: "07:24",
          },
          {
            title: "Understanding Value Types",
            time: "06:54",
          },
          {
            title: "Configuring Widgets & Understanding Objects",
            time: "07:24",
          },
          {
            title: 'Working with "Configuration Objects" (Non-Widget Objects)',
            time: "05:13",
          },
          {
            title: "Generics, Lists & Adding Gradient Colors",
            time: "04:13",
          },
          {
            title: "How To Configure Widgets & Objects",
            time: "03:03",
          },
          {
            title: "Practice: Styling Text",
            time: "03:27",
          },
          {
            title: "Onwards to Custom Widgets: Why Do You Need Them?",
            time: "02:37",
          },
          {
            title: "Understanding Classes",
            time: "05:01",
          },
          {
            title: "Building Custom Widgets",
            time: "09:27",
          },
          {
            title: "Working with Constructor Functions",
            time: "05:56",
          },
          {
            title: "Splitting Code Across Files",
            time: "03:18",
          },
          {
            title: "Practice: Create a Custom Widget",
            time: "03:49",
          },
          {
            title: "Introducing Variables",
            time: "05:22",
          },
          {
            title: "Variables & Types - Combining Two Key Concepts",
            time: "02:23",
          },
          {
            title: '"final" & "const" - Special Kinds Of "Variables"',
            time: "04:53",
          },
          {
            title: "Instance Variables (Properties) & Configurable Widgets",
            time: "10:03",
          },
          {
            title: "Practice: Reusable Widgets & Constructor Functions",
            time: "06:40",
          },
          {
            title: "Displaying Images & Using Multiple Constructor Functions",
            time: "06:35",
          },
          {
            title: "Adding Buttons & Using Functions As Values",
            time: "06:08",
          },
          {
            title: "Styling Buttons & Working with Padding",
            time: "06:17",
          },
          {
            title: "How NOT To Build Interactive Widgets",
            time: "03:48",
          },
          {
            title: "Introducing Stateful Widgets",
            time: "15:06",
          },
          {
            title: "Generating Random Numbers",
            time: "07:54",
          },
          {
            title: "Module Summary",
            time: "10:21",
          },
        ],
      },
      {
        title: "Flutter & Dart Basics II - Fundamentals Deep Dive [QUIZ APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "02:00",
          },
          {
            title: "A Challenge For You!",
            time: "02:21",
          },
          {
            title: "Challenge Solution 1/2 - Creating a Widget",
            time: "11:46",
          },
          {
            title: "Challenge Solution 2/2 - Working with More Widgets",
            time: "17:05",
          },
          {
            title: "Adding Icons to Buttons",
            time: "03:43",
          },
          {
            title: "Adding Transparency to Widgets",
            time: "04:22",
          },
          {
            title: "Repetition & Exercise: Adding a Stateful Widget",
            time: "10:50",
          },
          {
            title: "Rendering Content Conditionally",
            time: "07:02",
          },
          {
            title: "Accepting & Passing Functions as Values",
            time: "09:16",
          },
          {
            title: 'The "initState" Method',
            time: "04:28",
          },
          {
            title: "Deep Dive: Flutter's (Stateful) Widget Lifecycle",
            time: "00:29",
          },
          {
            title: "Using Ternary Expressions & Comparison Operators",
            time: "07:05",
          },
          {
            title: 'Understanding "if" Statements',
            time: "04:52",
          },
          {
            title: 'Using "if" Statements In Lists',
            time: "01:02",
          },
          {
            title: "if Statements & Comparison Operators",
            time: "01:15",
          },
          {
            title: "Adding a Data Model & Dummy Data",
            time: "08:48",
          },
          {
            title: "Configuring a Column",
            time: "05:35",
          },
          {
            title: "Creating a Reusable, Custom Styled Button",
            time: "12:04",
          },
          {
            title: "Accessing List Elements & Object Properties",
            time: "05:53",
          },
          {
            title: "Mapping Lists & Using the Spread Operator",
            time: "07:45",
          },
          {
            title: "Alignment, Margin & Padding",
            time: "03:57",
          },
          {
            title: "Mutating Values in Memory",
            time: "05:46",
          },
          {
            title: "Managing The Questions Index As State",
            time: "05:49",
          },
          {
            title: "More on Button Styling",
            time: "01:20",
          },
          {
            title: "Using Third-Party Packages & Adding Google Fonts",
            time: "07:26",
          },
          {
            title: "Passing Data via Functions Across Widgets",
            time: "13:18",
          },
          {
            title: "More Conditions",
            time: "04:27",
          },
          {
            title: "Getting Started with the Results Screen",
            time: "08:02",
          },
          {
            title: "Passing Data to the Results Screen",
            time: "02:40",
          },
          {
            title: 'Introducing Maps & "for" Loops',
            time: "12:00",
          },
          {
            title: 'Using "for" Loops In Lists',
            time: "01:02",
          },
          {
            title: "Note: A Typo In The Next Lecture",
            time: "00:08",
          },
          {
            title: 'Accessing Map Values & Using "Type Casting"',
            time: "10:52",
          },
          {
            title: "Combining Columns & Rows",
            time: "06:07",
          },
          {
            title: "Expanded To The Rescue!",
            time: "03:07",
          },
          {
            title: "Filtering & Analyzing Lists",
            time: "07:43",
          },
          {
            title: "Making Content Scrollable with SingleChildScrollView",
            time: "04:06",
          },
          {
            title: "Time to Practice: Flutter Basics",
            string: "2 questions",
          },
          {
            title: "Beyond the Basics: Optional, Important Dart Features",
            time: "08:53",
          },
          {
            title: "Module Summary",
            time: "07:32",
          },
        ],
      },
      {
        title: "Debugging Flutter Apps",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:56",
          },
          {
            title: "The Starting Project & A Problem",
            time: "01:08",
          },
          {
            title: "Understanding Error Messages",
            time: "07:36",
          },
          {
            title: 'Debugging Apps & Using "Debug Mode"',
            time: "14:59",
          },
          {
            title: "Working with the Flutter DevTools",
            time: "07:41",
          },
          {
            title: "Running the App on Real iOS or Android Devices",
            time: "00:53",
          },
        ],
      },
      {
        title:
          "Adding Interactivity, More Widgets & Theming [EXPENSE TRACKER APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:38",
          },
          {
            title: "Starting Setup & Repetition Time!",
            time: "07:07",
          },
          {
            title:
              "Adding an Expense Data Model with a Unique ID & Exploring Initializer Lists",
            time: "06:59",
          },
          {
            title: "Introducing Enums",
            time: "04:10",
          },
          {
            title: "Creating Dummy Data",
            time: "04:02",
          },
          {
            title: "Efficiently Rendering Long Lists with ListView",
            time: "10:21",
          },
          {
            title: "Using Lists Inside Of Lists",
            time: "02:27",
          },
          {
            title: "Creating a Custom List Item with the Card & Spacer Widgets",
            time: "16:47",
          },
          {
            title: "Using Icons & Formatting Dates",
            time: "07:25",
          },
          {
            title: "Setting an AppBar with a Title & Actions",
            time: "06:46",
          },
          {
            title: "Adding a Modal Sheet & Understanding Context",
            time: "07:24",
          },
          {
            title: "Handling User (Text) Input with the TextField Widget",
            time: "08:14",
          },
          {
            title: "Getting User Input on Every Keystroke",
            time: "04:53",
          },
          {
            title: "Letting Flutter do the Work with TextEditingController",
            time: "04:10",
          },
          {
            title: "Time to Practice: Adding a New Input",
            time: "01:11",
          },
          {
            title: "Exercise Solution",
            time: "03:49",
          },
          {
            title: "Closing The Modal Manually",
            time: "01:47",
          },
          {
            title: "Showing a Date Picker",
            time: "08:33",
          },
          {
            title: 'Working with "Futures" for Handling Data from the Future',
            time: "07:41",
          },
          {
            title: "Adding a Dropdown Button",
            time: "10:57",
          },
          {
            title: "Combining Conditions with AND and OR Operators",
            time: "07:48",
          },
          {
            title: "Validating User Input & Showing an Error Dialog",
            time: "05:11",
          },
          {
            title: "Saving New Expenses",
            time: "05:59",
          },
          {
            title: "Creating a Fullscreen Modal",
            time: "02:02",
          },
          {
            title: "Using the Dismissible Widget for Dismissing List Items",
            time: "07:46",
          },
          {
            title: 'Showing & Managing "Snackbars"',
            time: "09:13",
          },
          {
            title: "Getting Started with Theming",
            time: "07:43",
          },
          {
            title: "Setting & Using a Color Scheme",
            time: "06:38",
          },
          {
            title: "Setting Text Themes",
            time: "09:00",
          },
          {
            title: "Using Theme Data in Widgets",
            time: "09:02",
          },
          {
            title: "Important: Adding Dark Mode",
            time: "00:26",
          },
          {
            title: "Adding Dark Mode",
            time: "07:13",
          },
          {
            title: "Using Another Kind of Loop (for-in)",
            time: "05:03",
          },
          {
            title: "Adding Alternative Constructor Functions & Filtering Lists",
            time: "04:39",
          },
          {
            title: "Adding Chart Widgets",
            time: "10:26",
          },
          {
            title: "Module Summary",
            time: "02:45",
          },
        ],
      },
      {
        title:
          "Building Responsive & Adaptive User Interfaces [EXPENSE TRACKER APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:57",
          },
          {
            title: 'What is "Responsiveness"?',
            time: "02:06",
          },
          {
            title: "Locking the Device Orientiation",
            time: "04:53",
          },
          {
            title: "Updating the UI based on the Available Space",
            time: "07:55",
          },
          {
            title: "Understanding Size Constraints",
            time: "07:09",
          },
          {
            title: "Handling to Screen Overlays like the Soft Keyboard",
            time: "05:12",
          },
          {
            title: 'Understanding "Safe Areas"',
            time: "02:53",
          },
          {
            title: "Using the LayoutBuilder Widget",
            time: "12:04",
          },
          {
            title: "Building Adaptive Widgets",
            time: "07:14",
          },
          {
            title: "Module Summary",
            time: "01:26",
          },
        ],
      },
      {
        title: "Flutter & Dart Internals [TODO APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:09",
          },
          {
            title: "Three Trees: Widget Tree, Element Tree & Render Tree",
            time: "04:46",
          },
          {
            title: "How The UI Is Updated",
            time: "06:51",
          },
          {
            title: "Refactor & Extract Widgets To Avoid Unnecessary Builds",
            time: "06:34",
          },
          {
            title: "Understanding Keys - Setup",
            time: "04:34",
          },
          {
            title: "Which Problem Do Keys Solve?",
            time: "05:33",
          },
          {
            title: "Understanding & Using Keys",
            time: "04:12",
          },
          {
            title:
              "Mutating Values in Memory & Making Sense of var, final & const",
            time: "06:56",
          },
          {
            title: "Module Summary",
            time: "00:55",
          },
        ],
      },
      {
        title:
          "Building Multi-Screen Apps & Navigating Between Screens [MEALS APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "02:05",
          },
          {
            title: "Project Setup",
            time: "01:35",
          },
          {
            title: "Using a GridView",
            time: "07:58",
          },
          {
            title: "Widgets vs Screens",
            time: "06:12",
          },
          {
            title: "Displaying Category Items on a Screen",
            time: "08:02",
          },
          {
            title: "Making any Widget Tappable with InkWell",
            time: "03:34",
          },
          {
            title: "Adding Meals Data",
            time: "05:20",
          },
          {
            title: "Loading Meals Data Into a Screen",
            time: "06:37",
          },
          {
            title: "Adding Cross-Screen Navigation",
            time: "08:41",
          },
          {
            title: "Passing Data to the Target Screen",
            time: "04:53",
          },
          {
            title: "Introducing the Stack Widget",
            time: "17:01",
          },
          {
            title: "Improving the MealItem Widget",
            time: "11:53",
          },
          {
            title: "Adding Navigation to the MealDetails Screen",
            time: "09:58",
          },
          {
            title: "Improving the MealDetails Screen",
            time: "08:15",
          },
          {
            title: "Adding Tab-based Navigation",
            time: "16:34",
          },
          {
            title:
              "Passing Functions Through Multiple Layers of Widgets (for State Management)",
            time: "11:55",
          },
          {
            title: "Managing App-wide State & Data",
            time: "05:28",
          },
          {
            title: "Adding a Side Drawer",
            time: "14:08",
          },
          {
            title: "Closing the Drawer Manually",
            time: "05:35",
          },
          {
            title: "Adding a Filter Item",
            time: "07:33",
          },
          {
            title: "Replacing Screens (Instead of Pushing)",
            time: "07:58",
          },
          {
            title: "Adding More Filter Options",
            time: "02:44",
          },
          {
            title: "Returning Data When Leaving a Screen",
            time: "06:18",
          },
          {
            title: "Reading & Using Returned Data",
            time: "04:31",
          },
          {
            title: "Applying Filters",
            time: "15:50",
          },
          {
            title: "An Alternative Navigation Pattern: Using Named Routes",
            time: "00:15",
          },
          {
            title: "Module Summary",
            time: "03:04",
          },
        ],
      },
      {
        title: "Managing App-wide State [MEALS APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:29",
          },
          {
            title: "What's The Problem?",
            time: "02:08",
          },
          {
            title: "Installing the Solution: Riverpod",
            time: "01:20",
          },
          {
            title: "How State Management with Riverpod Works",
            time: "01:21",
          },
          {
            title: "Creating a Provider",
            time: "03:54",
          },
          {
            title: "Using a Provider",
            time: "07:17",
          },
          {
            title: "Creating a More Complex Provider with StateNotifier",
            time: "12:18",
          },
          {
            title: "Using the FavoritesProvider",
            time: "04:49",
          },
          {
            title: "Triggering a Notifier Method",
            time: "05:31",
          },
          {
            title: "Getting Started with Another Provider",
            time: "08:24",
          },
          {
            title: "Combining Local & Provider-managed State",
            time: "06:33",
          },
          {
            title: "Outsourcing State Into The Provider",
            time: "05:36",
          },
          {
            title:
              "Connecting Multiple Providers With Each Other (Dependent Providers)",
            time: "05:19",
          },
          {
            title: 'Swapping The "Favorite Button" Based On Provider State',
            time: "02:41",
          },
          {
            title: "Module Summary",
            time: "03:11",
          },
          {
            title: '"riverpod" vs "provider" - There are many Alternatives!',
            time: "00:26",
          },
        ],
      },
      {
        title: "Adding Animations [MEALS APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:44",
          },
          {
            title: "Setup & Understanding Explicit vs Implicit Animations",
            time: "01:52",
          },
          {
            title: "Explicit Animations: Adding an Animation Controller",
            time: "09:35",
          },
          {
            title:
              "Explicit Animations: Playing the Animation with AnimatedBuilder",
            time: "08:39",
          },
          {
            title: "Finetuning Explicit Animations",
            time: "08:36",
          },
          {
            title: "Getting Started with Implicit Animations",
            time: "07:23",
          },
          {
            title: "Configuring Implicit Animations",
            time: "05:49",
          },
          {
            title: "Adding Multi-Screen Transitions",
            time: "03:53",
          },
          {
            title: "Module Summary",
            time: "02:28",
          },
        ],
      },
    ],
  },
  {
    id: 1006,
    subcategory_id: 102,
    title: "React Native - The Practical Guide [2024]",
    img: images.react_native_the_practical_guide_2024,
    instructor: "Academind by Maximilian Schwarzm\u00fcller",
    price: 4490.0,
    description:
      "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
    ratings: {
      stars: 4.7,
      count: 36967,
    },
    students: 208251,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Learn how to use ReactJS to build real native mobile apps for iOS and Android",
      "Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android",
      "Explore React Native basics and advanced features!",
      "Learn how to use key mobile app features like Google maps or the device camera",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Welcome To This Course & What To Expect!",
            time: "01:05",
          },
          {
            title: "What Is React Native?",
            time: "03:27",
          },
          {
            title: "Join our Online Learning Community",
            time: "00:23",
          },
          {
            title: "A Glance Under The Hood Of React Native",
            time: "05:05",
          },
          {
            title:
              "Creating React Native Projects: Expo CLI vs React Native CLI",
            time: "05:56",
          },
          {
            title: "Creating React Native Projects",
            time: "00:17",
          },
          {
            title: "Creating a New React Native Project",
            time: "05:49",
          },
          {
            title: "Analyzing The Created Project",
            time: "05:15",
          },
          {
            title: "Running Our First App On A Real Device!",
            time: "04:20",
          },
          {
            title: "Setting Up A Local Development Environment",
            time: "09:26",
          },
          {
            title: "About This Course",
            time: "06:54",
          },
          {
            title: "Course Resources, Code Snapshots & How To Use",
            time: "00:19",
          },
        ],
      },
      {
        title: "React Native Basics [COURSE GOALS APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:44",
          },
          {
            title: "Exploring Core Components & Component Styling",
            time: "07:52",
          },
          {
            title: "Working With Core Components",
            time: "07:00",
          },
          {
            title: "Styling React Native Apps",
            time: "10:13",
          },
          {
            title:
              "React Native: Core Components, Styling & Colors - More Information",
            time: "00:34",
          },
          {
            title: "Exploring Layouts & Flexbox",
            time: "03:19",
          },
          {
            title: "React Native & Flexbox",
            time: "02:31",
          },
          {
            title: "Using Flexbox To Create Layouts",
            time: "05:08",
          },
          {
            title: "Flexbox - A Deep Dive",
            time: "12:19",
          },
          {
            title: "Components, Styles, Layouts",
            string: "8 questions",
          },
          {
            title: "Improving The Layout",
            time: "07:12",
          },
          {
            title: "Handling Events",
            time: "07:29",
          },
          {
            title: "Managing A List Of Course Goals (in our Demo App)",
            time: "07:10",
          },
          {
            title: "iOS & Android Styling Differences",
            time: "08:50",
          },
          {
            title: "Making Content Scrollable with ScrollView",
            time: "06:15",
          },
          {
            title: "Optimizing Lists with FlatList",
            time: "13:41",
          },
          {
            title: "More Components & Lists",
            string: "3 questions",
          },
          {
            title: "Splitting Components Into Smaller Components",
            time: "05:11",
          },
          {
            title: "Utilizing Props",
            time: "02:33",
          },
          {
            title: 'Working on the "Goal Input" Component',
            time: "09:40",
          },
          {
            title: "Handling Taps with the Pressable Component",
            time: "03:34",
          },
          {
            title: "Making Items Deletable & Using IDs",
            time: "05:17",
          },
          {
            title: "Adding an Android Ripple Effect & an iOS Alternative",
            time: "04:52",
          },
          {
            title: "Adding a Modal Screen",
            time: "06:57",
          },
          {
            title: "Styling the Modal Overlay",
            time: "05:41",
          },
          {
            title: "Opening & Closing the Modal",
            time: "02:30",
          },
          {
            title: "Working with Images & Changing Colors",
            time: "06:04",
          },
          {
            title: "App Finishing Touches",
            time: "07:15",
          },
          {
            title: "Module Summary",
            time: "03:32",
          },
        ],
      },
      {
        title: "Debugging React Native Apps (Introduction)",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:17",
          },
          {
            title: "Handling Errors",
            time: "04:37",
          },
          {
            title: "Logging to the Console",
            time: "01:52",
          },
          {
            title: "Debugging JavaScript Remotely",
            time: "03:05",
          },
          {
            title: "Using the React DevTools",
            time: "03:27",
          },
          {
            title: "Using the Documentation",
            time: "00:34",
          },
        ],
      },
      {
        title:
          "Diving Deeper into Components, Layouts & Styling - Building a Mini-Game App",
        content_list: [
          {
            title: "Module Introduction & What We'll Build",
            time: "02:06",
          },
          {
            title: "Starting Setup & Analyzing the Target App",
            time: "03:03",
          },
          {
            title: "Setting Up our Screen Components",
            time: "05:39",
          },
          {
            title: "Creating Custom Buttons",
            time: "06:58",
          },
          {
            title: "Styling for Android & iOS",
            time: "11:16",
          },
          {
            title: 'Styling the "Number Input" Element',
            time: "06:52",
          },
          {
            title: "Configuring the TextInput Field",
            time: "03:21",
          },
          {
            title: "Adding Visual Feedback to the Buttons",
            time: "15:46",
          },
          {
            title: "Improving the Buttons",
            time: "07:38",
          },
          {
            title: "Coloring the Components & The Overall App",
            time: "03:19",
          },
          {
            title: "Adding a Linear Gradient",
            time: "04:02",
          },
          {
            title: "Adding a Background Image",
            time: "07:03",
          },
          {
            title: "Getting Started with the Game Logic",
            time: "07:10",
          },
          {
            title: "Handling User Input & Showing an Alert Dialog",
            time: "07:30",
          },
          {
            title: "Switching Screens Programmatically",
            time: "07:11",
          },
          {
            title: "Starting Work on the Game Screen",
            time: "04:45",
          },
          {
            title:
              "Respecting Device Screen Restrictions with the SafeAreaView",
            time: "03:06",
          },
          {
            title: "Creating a Title Component",
            time: "04:37",
          },
          {
            title: "Managing Colors Globally",
            time: "06:53",
          },
          {
            title: "Creating, Using & Displaying Random Numbers",
            time: "12:43",
          },
          {
            title: 'Adding Game Control Buttons ("+" & "-") to the App',
            time: "15:27",
          },
          {
            title: 'Checking for "Game Over"',
            time: "11:12",
          },
          {
            title: "Improving the Game Screen Visuals",
            time: "11:40",
          },
          {
            title: 'Using "Cascading Styles"',
            time: "05:45",
          },
          {
            title: "Working with Icons (Button Icons)",
            time: "04:08",
          },
          {
            title: "Adding & Using Custom Fonts with React Native Apps",
            time: "07:03",
          },
          {
            title: "Adding a (Foreground) Image",
            time: "09:01",
          },
          {
            title: "Using & Styling Nested Text",
            time: "04:52",
          },
          {
            title:
              "Adding Logic to (Re-)Start Games & Displaying a Summary Screen",
            time: "06:58",
          },
          {
            title: "Logging Game Rounds",
            time: "05:51",
          },
          {
            title: "Outputting Log Data with FlatList",
            time: "02:49",
          },
          {
            title: "Styling the Game Round Logs",
            time: "08:10",
          },
          {
            title: "Finishing Touches",
            time: "04:33",
          },
          {
            title: "Module Summary",
            time: "02:56",
          },
        ],
      },
      {
        title:
          "Building Adaptive User Interfaces (Adapt to Platform & Device Sizes)",
        content_list: [
          {
            title: "Module Introduction",
            time: "04:05",
          },
          {
            title: "Setting Dynamic Widths",
            time: "04:29",
          },
          {
            title: "Introducing the Dimensions API",
            time: "06:39",
          },
          {
            title: "Adjusting Image Sizes with the Dimensions API",
            time: "04:04",
          },
          {
            title: "Understanding Screen Orientation Problems",
            time: "03:16",
          },
          {
            title: "Setting Sizes Dynamically (for different Orientations)",
            time: "07:55",
          },
          {
            title: "Managing Screen Content with KeyboardAvoidingView",
            time: "05:49",
          },
          {
            title: "Improving the Landscape Mode UI",
            time: "07:54",
          },
          {
            title: "The Dimensions API & Responsive UIs",
            string: "3 questions",
          },
          {
            title: "Further Improvements with useWindowDimensions",
            time: "04:35",
          },
          {
            title: "Writing Platform-specific Code with the Platform API",
            time: "08:59",
          },
          {
            title: "Styling the Status Bar",
            time: "02:08",
          },
        ],
      },
      {
        title: "React Native Navigation with React Navigation [MEALS APP]",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:28",
          },
          {
            title: "What Is Navigation?",
            time: "04:21",
          },
          {
            title: "Getting Started with the App & Outputting Meal Categories",
            time: "09:31",
          },
          {
            title: "Displaying Items in a Grid",
            time: "14:28",
          },
          {
            title: "Getting Started with the React Navigation Package",
            time: "09:44",
          },
          {
            title: "Implementing Navigation Between Two Screens",
            time: "08:30",
          },
          {
            title: "Setting the Default Screen",
            time: "00:33",
          },
          {
            title: "Understanding the useNavigation Hook",
            time: "03:38",
          },
          {
            title: "Working with Route Parameters To Pass Data Between Screens",
            time: "06:36",
          },
          {
            title: "Displaying Meals",
            time: "07:51",
          },
          {
            title: "Adding Images & Styling",
            time: "17:11",
          },
          {
            title: "Styling Screen Headers & Backgrounds",
            time: "07:59",
          },
          {
            title: "Setting Navigation Options Dynamically",
            time: "09:04",
          },
          {
            title: "Adding & Configuring the Meal Details Screen",
            time: "08:57",
          },
          {
            title: "Outputting Content in the Meal Detail Screen",
            time: "09:23",
          },
          {
            title: "Finishing the Meal Detail Screen",
            time: "18:57",
          },
          {
            title: "Adding Header Buttons",
            time: "06:55",
          },
          {
            title: "Adding an Icon Button to a Header",
            time: "04:50",
          },
          {
            title: "Adding Drawer Navigation & Creating a Drawer",
            time: "09:31",
          },
          {
            title: "Configuring the Drawer Navigator & The Drawer",
            time: "10:09",
          },
          {
            title: "Adding, Configuring & Using Bottom Tabs",
            time: "06:29",
          },
          {
            title: "Nesting Navigators",
            time: "13:04",
          },
          {
            title: "Bottom Tabs & App Finishing Touches",
            time: "03:52",
          },
          {
            title: "Module Summary",
            time: "02:43",
          },
        ],
      },
      {
        title: "App-wide State Management with Redux & Context API",
        content_list: [
          {
            title: "Module Introduction",
            time: "03:04",
          },
          {
            title: "Getting Started with React's Context API",
            time: "05:22",
          },
          {
            title: "Managing App-wide State with Context",
            time: "04:59",
          },
          {
            title: "Using the Created Context with useContext",
            time: "05:11",
          },
          {
            title: "Managing Favorite Meals with the Context API",
            time: "09:39",
          },
          {
            title: "Getting Started with Redux & Redux Toolkit",
            time: "04:45",
          },
          {
            title: "Working with Redux Slices",
            time: "07:02",
          },
          {
            title: "Managing Redux State & Dispatching Actions",
            time: "05:13",
          },
          {
            title: "Using Redux State in Components",
            time: "01:45",
          },
          {
            title: "Module Summary",
            time: "01:15",
          },
        ],
      },
      {
        title: "Time To Practice - The Expense Tracker App",
        content_list: [
          {
            title: "Module Introduction & What We'll Build",
            time: "02:21",
          },
          {
            title: "The Starting Setup",
            time: "06:17",
          },
          {
            title:
              "Adding Navigation (with React Navigation) & Configuring Navigation",
            time: "08:28",
          },
          {
            title: "Adding Global Colors & Editing Navigation Configuration",
            time: "10:03",
          },
          {
            title: "Creating Key App Components to Display Expenses",
            time: "06:17",
          },
          {
            title: "Continuing Work on the Expense-related Components",
            time: "06:48",
          },
          {
            title: "Adding Dummy Expense Data",
            time: "05:37",
          },
          {
            title: "Outputting a List of Expenses",
            time: "04:44",
          },
          {
            title: "Improving App Layout & Styling",
            time: "07:50",
          },
          {
            title: "Working on Expense List Items",
            time: "13:24",
          },
          {
            title: "Formatting Dates",
            time: "04:41",
          },
          {
            title: "Adding a Header Button & Making Expense Items Tappable",
            time: "11:32",
          },
          {
            title: "Navigating Programmatically Between Screens",
            time: "05:16",
          },
          {
            title: "Styling The Expense Management Screen",
            time: "03:06",
          },
          {
            title:
              "Supporting Different Editing Modes & Using Route Parameters",
            time: "07:00",
          },
          {
            title: 'Adding a "Delete" Button',
            time: "05:34",
          },
          {
            title: "Adding Custom Buttons",
            time: "09:40",
          },
          {
            title: "Closing A Modal Programmatically",
            time: "03:21",
          },
          {
            title: "Managing App-wide State With Context",
            time: "18:17",
          },
          {
            title: "Using Context From Inside Components",
            time: "08:18",
          },
          {
            title: "Deleting & Updating Expenses",
            time: "06:32",
          },
          {
            title: "Finishing Touches",
            time: "04:25",
          },
        ],
      },
      {
        title: "Handling User Input",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:26",
          },
          {
            title: "Building a Custom Input Component",
            time: "08:34",
          },
          {
            title: "Creating an Overall Form",
            time: "05:57",
          },
          {
            title: "Configuring the Form Input Elements",
            time: "04:08",
          },
          {
            title: "Adding Styling",
            time: "07:40",
          },
          {
            title: "Setting the Form Layout",
            time: "06:41",
          },
          {
            title: "Handling User Input in a Generic Way",
            time: "09:56",
          },
          {
            title: "Managing Form State & Submission",
            time: "04:54",
          },
          {
            title: "Working with Entered Data",
            time: "05:20",
          },
          {
            title: "Setting & Using Default Values",
            time: "07:08",
          },
          {
            title: "Adding Validation",
            time: "06:38",
          },
          {
            title: "Providing Visual Validation Feedback",
            time: "09:18",
          },
          {
            title: "Adding Error Styling",
            time: "04:54",
          },
          {
            title: "Module Summary",
            time: "01:41",
          },
        ],
      },
      {
        title: "Sending Http Requests",
        content_list: [
          {
            title: "Module Introduction",
            time: "02:22",
          },
          {
            title: "Backend Setup (Firebase)",
            time: "03:29",
          },
          {
            title: "Installing Axios",
            time: "02:12",
          },
          {
            title: "Sending POST Http Requests",
            time: "06:34",
          },
          {
            title: "Fetching Backend Data (GET Requests)",
            time: "09:25",
          },
          {
            title: "Transforming & Using Fetched Data",
            time: "08:19",
          },
          {
            title: "Using Response Data from POST Requests",
            time: "05:43",
          },
          {
            title:
              "Updating & Deleting Backend Data (UPDATE & DELETE Requests)",
            time: "07:50",
          },
          {
            title: "Managing the Loading State",
            time: "08:57",
          },
          {
            title: "Handling Request Errors",
            time: "12:02",
          },
          {
            title: "Module Summary",
            time: "00:58",
          },
        ],
      },
    ],
  },
  {
    id: 1007,
    subcategory_id: 201,
    title: "An Entire MBA in 1 Course:Award Winning Business School Prof",
    img: images.an_entire_mba_in_1_course_award_winning_business_school_prof,
    instructor:
      "Chris Haroun | 1.4 Million Students | #1 Best Selling Business & Finance Prof.",
    price: 4790.0,
    description:
      "** #1 Best Selling Business Course! ** Everything You Need to Know About Business from Start-up to IPO",
    ratings: {
      stars: 4.5,
      count: 57604,
    },
    students: 476123,
    lastUpdated: "Last updated 6/2023",
    what_you_will_learn: [
      "Over 450,000 students in 195 countries!",
      "Superb reviews!",
      "Free 384 page book version of this course included!",
      "Take your career to the next level!",
      "Launch a company from scratch.",
      "Get any job the easy way.",
      "Get many customers by using the best networking tool!",
      "Raise a lot of money quickly.",
      "Create financial models from scratch (the Professor makes it so easy to understand).",
      "Analyze company financials with ease!",
      "Understand how investment banking firms work and what they can do to help your business.",
      "Understand how management consulting firms work and when you need to hire them.",
      "Understand how macro economics and micro economics works.",
      "Understand what is venture capital and how to partner with the top venture capital firms to take your company to the next level.",
      "Present to investors and customers like a boss : )",
      "Communicate the right way in business so that you don't waste time.",
      "Change careers easily.",
      "Network and get a meeting with anyone (ideal tips on how to get a job or how to reinvent yourself or how to find customers).",
      "Analyze entire markets and companies from a qualitative and quantitative perspective.",
      "Understand how taxes work (don't worry this section is not boring)!",
      "Protect your family and assets in case your business gets sued.",
      "Understand what business career makes most sense for you!",
      "Restructure your company and the benefits of declaring bankruptcy protection if needed.",
      "Partner with equity and debt providers.",
      "After this course you will have the tools / skills needed to launch a company, grow it and then take it public!",
      "Value companies the easy way.",
      "Set up the correct and most beneficial legal entity for your company.",
      "Identify what makes an entrepreneur extremely successful.",
      "Set unbelievable goals for yourself (there are no limits to what you can achieve....)!",
    ],
    course_content: [
      {
        title: "Introduction & Class #1: Launching a New Company",
        content_list: [
          {
            title: "Welcome and Free Book Version of this Course",
            time: "00:21",
          },
          {
            title: "Course Introduction",
            time: "01:26",
          },
          {
            title: "Overview & the Qualities of the Best Entrepreneurs",
            time: "13:22",
          },
          {
            title:
              "How to Start a Successful Company + Qualities of the Top Business People",
            time: "17:58",
          },
          {
            title:
              "How to Legally Protect Your Company/Family in Business + Easy Overview of Taxes",
            time: "18:45",
          },
          {
            title: "Free 200+ Page Networking Book Attached",
            time: "00:51",
          },
          {
            title:
              "How to Network + Get Many Meetings to Help You Get a Job or Customers",
            time: "07:54",
          },
          {
            title:
              "Side Note: Be a Contrarian and Watch Your Net Worth Take-off!",
            time: "00:55",
          },
          {
            title:
              "How to Ask me Questions in the course and on my Weekly Webcast (Includes Zoom)",
            time: "00:11",
          },
          {
            title: "Chapter 1 Quiz",
            string: "10 questions",
          },
          {
            title: "Additional Internet Resources for Section 1",
            time: "01:35",
          },
          {
            title: "Unabridged 25 Page Downloadable Recap of Section 1",
            time: "00:05",
          },
          {
            title:
              "How to Ask me Questions Live on my Weekly Webcast (Includes Zoom)",
            time: "00:11",
          },
        ],
      },
      {
        title:
          "Class #2: Business Presentations: Use These Tips & Watch Your Sales Take-off!",
        content_list: [
          {
            title:
              "How to Present Like Steve Jobs and Impress an Audience, Customers & Your Peers",
            time: "19:12",
          },
          {
            title:
              "What to Include in Your Business Presentations Slides + Incredible Workshop/Tips",
            time: "04:06",
          },
          {
            title: "Side Note: Hiring and Firing",
            time: "01:07",
          },
          {
            title: "Chapter 2 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 2",
            time: "01:15",
          },
          {
            title: "Unabridged 22 Page Downloadable Recap of Section 2",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #3: Venture Capital (VC) Part 1: How to Raise Money",
        content_list: [
          {
            title:
              "What is VC + How to Raise Money + How to Get Board Advisors + More Network Tips",
            time: "19:24",
          },
          {
            title:
              "How to Improve Your Management Team + More $ Raising Tips from VCs / Investors",
            time: "01:55",
          },
          {
            title:
              "Side Note: 2 Very Important Sales Techniques / Best Practices",
            time: "01:10",
          },
          {
            title: "Chapter 3 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 3",
            time: "00:16",
          },
          {
            title: "Unabridged 8 Page Downloadable Recap of Section 3",
            time: "00:05",
          },
        ],
      },
      {
        title:
          "Class #4: VC Part 2: Security/Legal Structures to Protect You + Make You More $",
        content_list: [
          {
            title:
              "VC History is Crucial to Review So You Know the Qualities of Steve Jobs + Others",
            time: "13:40",
          },
          {
            title:
              "What Investors You Should Target + How Do Investors do Due Diligence on You",
            time: "19:09",
          },
          {
            title:
              "Not Understanding Security Structures Can Hurt You (What Common / Preferred is)",
            time: "05:46",
          },
          {
            title: "Convertible Debt, Warrants and Options",
            time: "06:12",
          },
          {
            title: "Side Note: How to Avoid Burnout",
            time: "01:26",
          },
          {
            title: "Chapter 4 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 4",
            time: "01:06",
          },
          {
            title: "Unabridged 37 Page Downloadable Recap of Section 4",
            time: "00:05",
          },
        ],
      },
      {
        title:
          "Class #5: Investor Valuation Topics & Dilution. Importance of Contracts",
        content_list: [
          {
            title:
              "Case Study on How to Deal with VC Firms Investing in Your Company Like Sequoia",
            time: "20:20",
          },
          {
            title: "Side Note: Touch Hand Only Once",
            time: "00:40",
          },
          {
            title: "Chapter 5 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 5",
            time: "00:14",
          },
          {
            title: "Unabridged 20 Page Downloadable Recap of Section 5",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #6: Financial Analysis",
        content_list: [
          {
            title:
              "Easy Way to Understand the Income Statement + Balance Sheet +Dealing with Risk",
            time: "11:03",
          },
          {
            title:
              "Easy Way to Understand the Cash Flow Statement + What Links the IS, BS & CF",
            time: "19:08",
          },
          {
            title:
              "Understanding Financial Ratios + Leverage + What Software to Use for Accounting",
            time: "04:44",
          },
          {
            title:
              "Side Note: How to Get A Raise or a Promotion + Managing People",
            time: "01:26",
          },
          {
            title: "Chapter 6 Quiz",
            string: "5 questions",
          },
          {
            title: "Additional Internet Resources for Section 6",
            time: "00:22",
          },
          {
            title: "Unabridged 29 Page Downloadable Recap of Section 6",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #7: Managing Cash Flow",
        content_list: [
          {
            title:
              "Forecasting + Budgeting + Fiscal Versus Calendar Years + Ethics",
            time: "08:26",
          },
          {
            title:
              'Side Note: "Why am I So Lucky to be Given this Investment Opportunity?"',
            time: "01:00",
          },
          {
            title: "Chapter 7 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 7",
            time: "00:15",
          },
          {
            title: "Unabridged 7 Page Downloadable Recap of Section 7",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #8: Financial Capital and Securities Law",
        content_list: [
          {
            title:
              "Easy Way to Understand Debt/Bonds, Interest Rates/Yield Curves + Equity",
            time: "19:09",
          },
          {
            title:
              "Risk & Return + Business Statistics (Only What You Need to Know) + Security Law",
            time: "10:39",
          },
          {
            title: "Side Note: Run to Your Fears",
            time: "01:25",
          },
          {
            title: "Chapter 8 Quiz",
            string: "4 questions",
          },
          {
            title: "Additional Internet Resources for Section 8",
            time: "00:49",
          },
          {
            title: "Unabridged 21 Page Downloadable Recap of Section 8",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #9: Projecting Financial Statements",
        content_list: [
          {
            title:
              "How to Build Financial Statements for Private Companies the Easy Way",
            time: "11:22",
          },
          {
            title:
              "How to Value Private Companies the Easy Way + Growth Metrics",
            time: "17:53",
          },
          {
            title: "Side Note: Office Politics",
            time: "01:24",
          },
          {
            title: "Chapter 9 Quiz",
            string: "3 questions",
          },
          {
            title: "Additional Internet Resources for Section 9",
            time: "00:14",
          },
          {
            title: "Unabridged 24 Page Downloadable Recap of Section 9",
            time: "00:05",
          },
        ],
      },
      {
        title: "Class #10: Due Diligence and Data Sources",
        content_list: [
          {
            title:
              "Where to Get Awesome Information for Your Financial Models + More Networking",
            time: "17:14",
          },
          {
            title:
              "Side Note: Small Customers are Just as Much Work as Large Customers + Sports!",
            time: "01:57",
          },
          {
            title: "Chapter 10 Quiz",
            string: "3 questions",
          },
          {
            title: "Unabridged 16 Page Downloadable Recap of Section 10",
            time: "00:05",
          },
        ],
      },
    ],
  },
  {
    id: 1008,
    subcategory_id: 201,
    title: "MBA in a Box: Business Lessons from a CEO",
    img: images.mba_in_a_box_business_lessons_from_a_ceo,
    instructor: "365 Careers",
    price: 4490.0,
    description:
      "A Complete MBA Training: Business Strategy, Management, Marketing, Accounting, Decision Making & Negotiation",
    ratings: {
      stars: 4.6,
      count: 17860,
    },
    students: 102830,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "Receive an 'MBA in a Box' certificate of completion",
      "Acquire the same business acumen as MBA graduates",
      "How to start a company from scratch",
      "Understand how a business functions and what makes a company successful",
      "Get promoted and be ready for a managerial role",
      "Transition into a career requiring solid business knowledge",
      "Be able to perform an industry analysis",
      "Understand what the critical success factors in an industry are",
      "Carry out SWOT analysis",
      "Use Michael Porter's Five Forces model",
      "Apply Game theory in real-life business situations",
      "Understand what a competitive advantage is and how to acquire it",
      "Be able to choose one of the three core strategies: Cost leadership, DIfferentiation, and Niche",
      "Apply best practices when managing people",
      "Understand how to recruit, select, onboard, develop, and motivate employees",
      "Carry out effective marketing research",
      "Perform market segmentation",
      "Select the right target client group",
      "Set up the 4 Ps of Marketing in a coherent way",
      "Calculate Customer-Lifetime-Value",
      "Understand financials",
      "Be able to read and prepare the three financial statements - P&L, Balance Sheet, and Cash Flow",
      "Perform financial statement analysis",
      "Calculate cash flows",
      "Become a master negotiator",
      "Enlarge the pie for all negotiating parties",
      "Have experience and be aware of different negotiating tactics",
      "Expand the pie for all negotiating parties",
    ],
    course_content: [
      {
        title: "MBA in a Box: Introduction",
        content_list: [
          {
            title: "What does the course cover?",
            time: "05:11",
          },
          {
            title: "MBA in a Box: The Gamebook - Download it here",
            time: "01:40",
          },
        ],
      },
      {
        title: "Strategy: An Introduction",
        content_list: [
          {
            title: "The role of Strategy and what makes a Strategy successful",
            time: "05:17",
          },
          {
            title: "The difference between Corporate and Business Strategy",
            time: "04:11",
          },
          {
            title:
              "The importance of the Mission, Vision, Goals, and Values statements",
            time: "06:13",
          },
          {
            title: "Strategy - An Introduction",
            string: "4 questions",
          },
        ],
      },
      {
        title: "Strategy: The industry life cycle model",
        content_list: [
          {
            title:
              "The four stages of the industry life cycle model - An introduction",
            time: "03:16",
          },
          {
            title: "The strategic importance of the industry life cycle model",
            time: "01:44",
          },
          {
            title: "The Introduction stage - A new industry is born",
            time: "04:44",
          },
          {
            title: "The Growth stage - An industry in its expansion phase",
            time: "03:20",
          },
          {
            title: "The Maturity stage - An industry at its peak",
            time: "02:51",
          },
          {
            title: "The Decline stage - An obsolete industry",
            time: "03:51",
          },
          {
            title: "Strategy - The industry life cycle model",
            string: "6 questions",
          },
        ],
      },
      {
        title:
          "Strategy: Porter's Five Forces model - The competitive dynamics in an industry",
        content_list: [
          {
            title: "Michael Porter's Five Forces model",
            time: "01:53",
          },
          {
            title: "The threat of new entrants",
            time: "04:32",
          },
          {
            title: "The threat of substitute products",
            time: "02:59",
          },
          {
            title: "The intensity of current competition",
            time: "01:44",
          },
          {
            title: "The bargaining power of suppliers",
            time: "02:43",
          },
          {
            title: "The bargaining power of clients",
            time: "03:35",
          },
          {
            title: "Porter's Five Forces framework applied in practice",
            time: "07:45",
          },
          {
            title: "The Five Forces model",
            string: "8 questions",
          },
        ],
      },
      {
        title:
          "Strategy: Game Theory - Studying the interaction between multiple parties",
        content_list: [
          {
            title: "An introduction to Game Theory",
            time: "01:36",
          },
          {
            title:
              "Zero-sum games - approaching situations with a win-lose perspective",
            time: "01:32",
          },
          {
            title:
              "Non-zero-sum games - considering both cooperation and confrontation",
            time: "02:45",
          },
          {
            title:
              "Tobacco companies - a real-life example of Game Theory application",
            time: "02:19",
          },
          {
            title: "Strategy - Game theory",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Strategy: Focusing on the inside of a business",
        content_list: [
          {
            title: "Focusing on the inside of a business - An Introduction",
            time: "00:45",
          },
          {
            title:
              "A company's life cycle model -  what should be done at different stages",
            time: "05:55",
          },
          {
            title: "Strategy - A company's life cycle model",
            string: "2 questions",
          },
        ],
      },
      {
        title: "Strategy: Acquiring a competitive advantage",
        content_list: [
          {
            title: "The quest for a competitive advantage - An Introduction",
            time: "02:57",
          },
          {
            title:
              "The importance of building a sustainable competitive advantage",
            time: "02:58",
          },
          {
            title: "The role of resources and capabilities",
            time: "02:56",
          },
          {
            title: "Acquiring an actual competitive advantage",
            time: "02:22",
          },
        ],
      },
      {
        title: "Strategy: The three main competitive strategies",
        content_list: [
          {
            title: "The three main competitive strategies",
            time: "01:44",
          },
          {
            title: "Cost leadership - sell cheap",
            time: "06:35",
          },
          {
            title: "Differentiation - be different",
            time: "02:56",
          },
          {
            title: "Niche (Focus) strategy - find your niche market",
            time: "03:28",
          },
          {
            title: "The danger of hybrid strategies",
            time: "02:43",
          },
          {
            title:
              "Strategy - Acquiring a competitive advantage & the three competitive strategies",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Strategy: Corporate growth strategies",
        content_list: [
          {
            title: "The types of growth opportunities companies pursue",
            time: "01:58",
          },
          {
            title: "Organic growth - building a solid foundation",
            time: "04:56",
          },
          {
            title: "Inorganic growth - leveraging M&A transactions",
            time: "01:56",
          },
          {
            title: "Horizontal integration",
            time: "02:34",
          },
          {
            title: "Vertical integration",
            time: "04:22",
          },
          {
            title: "Strategy - Corporate growth strategies",
            string: "4 questions",
          },
        ],
      },
      {
        title: "Strategy: The SWOT analysis framework",
        content_list: [
          {
            title: "An introduction to SWOT analysis",
            time: "03:07",
          },
          {
            title: "SWOT analysis in practice - Starbucks",
            time: "03:35",
          },
          {
            title: "Strategy - SWOT analysis",
            string: "1 question",
          },
        ],
      },
    ],
  },
  {
    id: 1009,
    subcategory_id: 202,
    title: "Communication Fundamentals: How To Communicate Better",
    img: images.communication_fundamentals_how_to_communicate_better,
    instructor: "Life Progression Project",
    price: 1950.0,
    description:
      "Become an Effective Communicator And Learn How to Get Your Message Across By Learning Communication Fundamentals",
    ratings: {
      stars: 4.5,
      count: 92279,
    },
    students: 192560,
    lastUpdated: "Last updated 6/2020",
    what_you_will_learn: [
      "Effectively communicate",
      "Communicate with different personalities",
    ],
    course_content: [
      {
        title: "Welcome To Communication Fundamentals",
        content_list: [
          {
            title: "About The Instructor And About This Course",
            time: "02:51",
          },
          {
            title: "What Is Communication?",
            time: "01:17",
          },
        ],
      },
      {
        title: "The Process Of Communication",
        content_list: [
          {
            title: "The Communication Process Defined",
            time: "01:27",
          },
          {
            title: "Channels Of Communication",
            time: "03:52",
          },
          {
            title: "Formal Communication",
            time: "02:28",
          },
          {
            title: "Informal Communication",
            time: "01:01",
          },
          {
            title: "Exercise",
            time: "00:21",
          },
        ],
      },
      {
        title: "Communication Styles",
        content_list: [
          {
            title: "Putting Yourself In The Shoes Of The Receiver",
            time: "02:38",
          },
          {
            title: "Listening Loudly",
            time: "02:33",
          },
          {
            title: "Questions",
            time: "03:15",
          },
          {
            title: "Communicating Based On Style Of Decision Making",
            time: "04:13",
          },
          {
            title: "Persuasion Principles: Liking And Reciprocity",
            time: "02:13",
          },
          {
            title: "Persuasion Principles: Social Proof And Consistency",
            time: "03:35",
          },
          {
            title: "Persuasion Principles: Authority And Scarcity",
            time: "02:31",
          },
          {
            title: "Styles Of Talking",
            time: "04:08",
          },
          {
            title: "The Art Of Persuasion",
            time: "01:59",
          },
          {
            title: "The Power Of Silence",
            time: "04:14",
          },
          {
            title: "Being Authentic",
            time: "01:27",
          },
          {
            title: "Story Telling",
            time: "01:58",
          },
          {
            title: "Section 3 Exercise",
            time: "00:18",
          },
          {
            title: "Section 3 Exercise 2A",
            time: "00:23",
          },
          {
            title: "Section 3 Exercise 2B",
            time: "02:14",
          },
          {
            title: "Section 3 Exercise 2C",
            time: "03:48",
          },
        ],
      },
      {
        title: "Management And Communication Under Pressure",
        content_list: [
          {
            title: "Topics Where Managers Must Be Clear",
            time: "03:39",
          },
          {
            title: "Leadership: Owning The Responsibility Of Communication",
            time: "01:30",
          },
          {
            title: "Qualities To Expect From An Ideal Communications Person",
            time: "02:49",
          },
          {
            title: "How It Differs In A Crisis Situation",
            time: "04:51",
          },
          {
            title: "The Skeptical Audience",
            time: "01:21",
          },
          {
            title: "Delivering Bad News",
            time: "03:00",
          },
          {
            title: "Section 4 Exercise",
            time: "00:27",
          },
        ],
      },
      {
        title: "Cross Cultural Communication",
        content_list: [
          {
            title: "Virtual Teams",
            time: "01:34",
          },
          {
            title: "Giving The Benefit Of The Doubt",
            time: "01:26",
          },
          {
            title: "Overcommunicate",
            time: "01:19",
          },
          {
            title: "Being Intentionally Positive",
            time: "01:13",
          },
          {
            title: "Offer Suggestions Not Critiques",
            time: "02:02",
          },
          {
            title: "The Common Cause Of Communication Breakdown",
            time: "01:47",
          },
          {
            title: "Section 5 Exercise",
            time: "00:22",
          },
        ],
      },
      {
        title: "In Summary",
        content_list: [
          {
            title: "In summary",
            time: "03:36",
          },
        ],
      },
    ],
  },
  {
    id: 1010,
    subcategory_id: 202,
    title: "Write Better Emails: Tactics for Smarter Team Communication",
    img: images.write_better_emails_tactics_for_smarter_team_communication,
    instructor: "Hassan Osman",
    price: 2790.0,
    description:
      "How to improve your email writing skills to save time & improve communication with your team; easy business writing tips",
    ratings: {
      stars: 4.6,
      count: 71887,
    },
    students: 210732,
    lastUpdated: "Last updated 9/2023",
    what_you_will_learn: [
      "Improve your email writing skills in simple steps",
      "Learn proper email etiquette and business writing techniques that get you results",
      "Avoid common errors in email messages that confuse people",
      "The #1 Udemy bestselling course about email communication in teams",
      "Improve communication within teams",
      "Save time in writing and responding to emails",
      "Write clear email messages that explain exactly what you want",
      "Get higher response rates from teammates",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "Introduction",
            time: "03:01",
          },
          {
            title: "Course Overview",
            time: "01:56",
          },
          {
            title: "Quick and Important Note",
            time: "00:50",
          },
        ],
      },
      {
        title: "The Fundamentals of Writing Better Emails",
        content_list: [
          {
            title: "How to Assign Tasks in Emails (using the 3Ws)",
            time: "08:26",
          },
          {
            title: "How to Write the Perfect Subject Line",
            time: "07:35",
          },
          {
            title: "Write Emails that are Five Sentences or Less (TL;DR)",
            time: "04:06",
          },
          {
            title: "Break Long Emails Into Two Parts",
            time: "04:22",
          },
          {
            title: "How to Make Your Emails Scannable",
            time: "05:48",
          },
        ],
      },
      {
        title: "Additional Tactics for Writing Better Emails",
        content_list: [
          {
            title: "Show Instead of Tell by Attaching Screenshots",
            time: "06:54",
          },
          {
            title: "Spell Out Time Zones, Dates and Acronyms",
            time: "06:39",
          },
          {
            title: 'Use "If...Then" Statements',
            time: "04:07",
          },
          {
            title: "Present Options Instead of Asking Open-Ended Questions",
            time: "02:20",
          },
          {
            title: "Re-read Your Email Once for a Content Check",
            time: "03:48",
          },
          {
            title: "Save Drafts of Repetitive Emails",
            time: "06:13",
          },
          {
            title: 'Write it Now, Send it Later Using "Delay Delivery"',
            time: "06:54",
          },
          {
            title: 'How to Properly Use "Reply All"',
            time: "04:25",
          },
          {
            title: "Reply to Questions Inline",
            time: "04:21",
          },
          {
            title: "Reply Immediately to Time-Sensitive Emails",
            time: "02:55",
          },
          {
            title: "Read the Latest Email on a Thread Before Responding",
            time: "04:58",
          },
          {
            title: "Write the Perfect Out-of-Office (OOO) Auto Reply",
            time: "03:57",
          },
          {
            title: "Share the Rules of Email Ahead of Time",
            time: "01:40",
          },
        ],
      },
      {
        title: "Conclusion",
        content_list: [
          {
            title: "Conclusion: Thank You and Next Steps",
            time: "00:30",
          },
          {
            title:
              "Bonus Lecture: Free Email Resources (1-page PDF + PowerPoint slides)",
            time: "03:08",
          },
        ],
      },
    ],
  },
  {
    id: 1011,
    subcategory_id: 103,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    img: images.a_100_days_of_code_the_complete_python_pro_bootcamp,
    instructor: "Dr. Angela Yu",
    price: 3790.0,
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    ratings: {
      stars: 4.7,
      count: 266997,
    },
    students: 1154191,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "You will master the Python programming language by building 100 unique projects over 100 days.",
      "You will learn automation, game, app and web development, data science and machine learning all using Python.",
      "You will be able to program in Python professionally",
      "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
      "Create a portfolio of 100 Python projects to apply for developer jobs",
      "Be able to build fully fledged websites and web apps with Python",
      "Be able to use Python for data science and machine learning",
      "Build games like Blackjack, Pong and Snake using Python",
      "Build GUIs and Desktop applications with Python",
    ],
    course_content: [
      {
        title:
          "Day 1 - Beginner - Working with Variables in Python to Manage Data",
        content_list: [
          {
            title: "What you're going to get from this course",
            time: "03:27",
          },
          {
            title: "START HERE",
            time: "02:53",
          },
          {
            title: "Downloadable Resources and Tips for Taking the Course",
            time: "04:22",
          },
          {
            title: "Day 1 Goals: what we will make by the end of the day",
            time: "02:30",
          },
          {
            title: "FAQ: Can I Use PyCharm/VSCode/ Another Local Code Editor?",
            time: "00:53",
          },
          {
            title: "Printing to the Console in Python",
            time: "09:28",
          },
          {
            title: "Join our Class on Auditorium",
            time: "05:34",
          },
          {
            title: "[Interactive Coding Exercise] Printing",
            time: "04:27",
          },
          {
            title: "String Manipulation and Code Intelligence",
            time: "09:46",
          },
          {
            title: "[Interactive Coding Exercise] Debugging Practice",
            time: "03:53",
          },
          {
            title: "The Python Input Function",
            time: "08:49",
          },
          {
            title: "[Interactive Coding Exercise] Input Function",
            time: "02:56",
          },
          {
            title: "Python Variables",
            time: "06:43",
          },
          {
            title: "[Interactive Coding Exercise] Variables",
            time: "03:00",
          },
          {
            title: "Variable Naming",
            time: "03:58",
          },
          {
            title: "Variable Naming Quiz",
            string: "3 questions",
          },
          {
            title: "Day 1 Project: Band Name Generator",
            time: "05:49",
          },
          {
            title: "Congratulations! Well done!",
            time: "00:52",
          },
        ],
      },
      {
        title:
          "Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings",
        content_list: [
          {
            title: "Day 2 Goals: what we will make by the end of the day",
            time: "01:46",
          },
          {
            title: "Python Primitive Data Types",
            time: "07:58",
          },
          {
            title: "Data Types Quiz",
            string: "3 questions",
          },
          {
            title: "Type Error, Type Checking and Type Conversion",
            time: "07:19",
          },
          {
            title: "[Interactive Coding Exercise] Data Types",
            time: "03:35",
          },
          {
            title: "Mathematical Operations in Python",
            time: "08:27",
          },
          {
            title: "[Interactive Coding Exercise] BMI Calculator",
            time: "06:14",
          },
          {
            title: "Number Manipulation and F Strings in Python",
            time: "08:10",
          },
          {
            title: "[Interactive Coding Exercise] Life in Weeks",
            time: "03:31",
          },
          {
            title: "Mathematical Operations Quiz",
            string: "3 questions",
          },
          {
            title: "Day 2 Project: Tip Calculator",
            time: "18:26",
          },
          {
            title: "You are already in the top 50%",
            time: "00:29",
          },
        ],
      },
      {
        title: "Day 3 - Beginner - Control Flow and Logical Operators",
        content_list: [
          {
            title: "Day 3 Goals: what we will make by the end of the day",
            time: "01:22",
          },
          {
            title: "Get Access to the Monthly App Brewery Newsletter",
            time: "00:56",
          },
          {
            title: "Control Flow with if / else and Conditional Operators",
            time: "10:24",
          },
          {
            title:
              "[Interactive Coding Exercise] Odd or Even? Introducing the Modulo",
            time: "04:32",
          },
          {
            title: "Nested if statements and elif statements",
            time: "06:28",
          },
          {
            title: "[Interactive Coding Exercise] BMI 2.0",
            time: "04:33",
          },
          {
            title: "[Interactive Coding Exercise] Leap Year",
            time: "07:59",
          },
          {
            title: "Multiple If Statements in Succession",
            time: "09:29",
          },
          {
            title: "[Interactive Coding Exercise] Pizza Order Practice",
            time: "04:13",
          },
          {
            title: "Logical Operators",
            time: "05:58",
          },
          {
            title: "[Interactive Coding Exercise] Love Calculator",
            time: "07:45",
          },
          {
            title: "Day 3 Project: Treasure Island",
            time: "18:12",
          },
          {
            title: "Share and Show off your Project!",
            time: "00:43",
          },
        ],
      },
      {
        title: "Day 4 - Beginner - Randomisation and Python Lists",
        content_list: [
          {
            title: "Day 4 Goals: what we will make by the end of the day",
            time: "01:31",
          },
          {
            title: "Random Module",
            time: "13:45",
          },
          {
            title: "[Interactive Coding Exercise] Heads or Tails",
            time: "01:31",
          },
          {
            title: "Understanding the Offset and Appending Items to Lists",
            time: "13:14",
          },
          {
            title:
              "[Interactive Coding Exercise] Banker Roulette - Who will pay the bill?",
            time: "03:01",
          },
          {
            title: "IndexErrors and Working with Nested Lists",
            time: "05:25",
          },
          {
            title: "List and IndexError Quiz",
            string: "3 questions",
          },
          {
            title: "[Interactive Coding Exercise] Treasure Map",
            time: "06:01",
          },
          {
            title: "Day 4 Project: Rock Paper Scissors",
            time: "21:27",
          },
          {
            title: "Programming is like going to the Gym",
            time: "01:04",
          },
        ],
      },
      {
        title: "Day 5 - Beginner - Python Loops",
        content_list: [
          {
            title: "Day 5 Goals: what we will make by the end of the day",
            time: "03:13",
          },
          {
            title: "Using the for loop with Python Lists",
            time: "07:32",
          },
          {
            title: "[Interactive Coding Exercise] Average Height",
            time: "03:47",
          },
          {
            title: "[Interactive Coding Exercise] High Score",
            time: "02:47",
          },
          {
            title: "for loops and the range() function",
            time: "05:21",
          },
          {
            title: "[Interactive Coding Exercise] Adding Even Numbers",
            time: "05:57",
          },
          {
            title:
              "[Interactive Coding Exercise] The FizzBuzz Job Interview Question",
            time: "04:28",
          },
          {
            title: "Day 5 Project: Create a Password Generator",
            time: "16:10",
          },
          {
            title: "Hard Work and Perseverance beats Raw Talent Every Time",
            time: "01:08",
          },
        ],
      },
      {
        title: "Day 6 - Beginner - Python Functions & Karel",
        content_list: [
          {
            title: "Day 6 Goals: what we will make by the end of the day",
            time: "01:01",
          },
          {
            title: "Defining and Calling Python Functions",
            time: "15:50",
          },
          {
            title: "The Hurdles Loop Challenge",
            time: "10:37",
          },
          {
            title: "Indentation in Python",
            time: "09:14",
          },
          {
            title: "Code Indentation Quiz",
            string: "3 questions",
          },
          {
            title: "While Loops",
            time: "12:42",
          },
          {
            title: "Hurdles Challenge using While Loops",
            time: "06:57",
          },
          {
            title: "Jumping over Hurdles with Variable Heights",
            time: "08:12",
          },
          {
            title: "Final Project: Escaping the Maze",
            time: "16:41",
          },
          {
            title: "Why is this *so* Hard?! Can I really do this?",
            time: "01:25",
          },
        ],
      },
      {
        title: "Day 7 - Beginner - Hangman",
        content_list: [
          {
            title: "Day 7 Goals: what we will make by the end of the day",
            time: "01:59",
          },
          {
            title: "How to break a Complex Problem down into a Flow Chart",
            time: "05:13",
          },
          {
            title: "Challenge 1 - Picking a Random Words and Checking Answers",
            time: "02:05",
          },
          {
            title: "Challenge 1 Solution - How to Check the User's Answer",
            time: "06:45",
          },
          {
            title: "Challenge 2 - Replacing Blanks with Guesses",
            time: "02:55",
          },
          {
            title: "Challenge 2 Solution - How to Replace the Blanks",
            time: "10:46",
          },
          {
            title: "Challenge 3 - Checking if the Player has Won",
            time: "03:25",
          },
          {
            title: "Challenge 3 Solution - How to Check if the Player Won",
            time: "03:51",
          },
          {
            title: "Challenge 4 - Keeping Track of the Player's Lives",
            time: "02:16",
          },
          {
            title:
              "Challenge 4 Solution - How to Keep Track of the Player's Lives",
            time: "05:47",
          },
          {
            title: "Challenge 5 - Improving the User Experience",
            time: "04:23",
          },
          {
            title:
              "Challenge 5 Solution - How to Add ASCII Art and Improve the UI",
            time: "06:33",
          },
          {
            title: "The Benefits of Daily Practice",
            time: "01:12",
          },
        ],
      },
      {
        title: "Day 8 - Beginner - Function Parameters & Caesar Cipher",
        content_list: [
          {
            title: "Day 8 Goals: what we will make by the end of the day",
            time: "02:15",
          },
          {
            title: "Functions with Inputs",
            time: "09:32",
          },
          {
            title: "Positional vs. Keyword Arguments",
            time: "08:51",
          },
          {
            title: "[Interactive Coding Exercise] Paint Area Calculator",
            time: "04:47",
          },
          {
            title: "[Interactive Coding Exercise] Prime Number Checker",
            time: "04:15",
          },
          {
            title: "Caesar Cipher Part 1 - Encryption",
            time: "14:41",
          },
          {
            title: "Caesar Cipher Part 2 - Decryption",
            time: "06:29",
          },
          {
            title: "Caesar Cipher Part 3 - Reorganising our Code",
            time: "10:36",
          },
          {
            title:
              "Caesar Cipher Part 4 - User Experience Improvements & Final Touches",
            time: "13:23",
          },
          {
            title: "How You Can *Stay* Motivated",
            time: "01:06",
          },
        ],
      },
      {
        title:
          "Day 9 - Beginner - Dictionaries, Nesting and the Secret Auction",
        content_list: [
          {
            title: "Day 9 Goals: what we will make by the end of the day",
            time: "02:29",
          },
          {
            title: "The Python Dictionary: Deep Dive",
            time: "14:13",
          },
          {
            title: "[Interactive Coding Exercise] Grading Program",
            time: "03:53",
          },
          {
            title: "Nesting Lists and Dictionaries",
            time: "09:55",
          },
          {
            title: "[Interactive Coding Exercise] Dictionary in List",
            time: "03:51",
          },
          {
            title: "Python Dictionaries Quiz",
            string: "3 questions",
          },
          {
            title: "The Secret Auction Program Instructions and Flow Chart",
            time: "04:29",
          },
          {
            title: "Solution and Complete Code for the Secret Auction Program",
            time: "18:13",
          },
          {
            title: "Motivation and the Accountability Trick",
            time: "01:02",
          },
        ],
      },
      {
        title: "Day 10 - Beginner - Functions with Outputs",
        content_list: [
          {
            title: "Day 10 Goals: what we will make by the end of the day",
            time: "01:34",
          },
          {
            title: "Functions with Outputs",
            time: "12:57",
          },
          {
            title: "Multiple return values",
            time: "03:31",
          },
          {
            title: "[Interactive Coding Exercise] Days in Month",
            time: "06:16",
          },
          {
            title: "Docstrings",
            time: "03:42",
          },
          {
            title: "Functions Quiz",
            string: "3 questions",
          },
          {
            title: "Calculator Part 1: Combining Dictionaries and Functions",
            time: "08:43",
          },
          {
            title: "Print vs. Return",
            time: "04:37",
          },
          {
            title: "While Loops, Flags and Recursion",
            time: "07:49",
          },
          {
            title: "Calculator Finishing Touches and Bug Fixes",
            time: "03:47",
          },
          {
            title: "How to Get a Good Night's Sleep",
            time: "01:32",
          },
        ],
      },
    ],
  },
  {
    id: 1012,
    subcategory_id: 103,
    title: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
    img: images.c_sharp_basics_for_beginners_learn_c_sharp_fundamentals_by_coding,
    instructor: "Mosh Hamedani",
    price: 4490.0,
    description:
      "Master C# fundamentals in 6 hours - The most popular course with 50,000+ students, packed with tips and exercises!",
    ratings: {
      stars: 4.5,
      count: 67587,
    },
    students: 229221,
    lastUpdated: "Last updated 12/2020",
    what_you_will_learn: [
      "Learn the fundamentals of C# and .NET Framework",
      "Work with primitive types and expressions",
      "Work with non-primitive types (classes, structs, arrays and enums)",
      "Learn the difference between value types and reference types",
      "Control the flow of programs using conditional statements",
      "Use arrays and lists",
      "Work with files and directories",
      "Work with text",
      "Work with date and time",
      "Debug C# applications effectively",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "What is this Course",
            time: "01:21",
          },
          {
            title: "About Me",
            time: "01:40",
          },
          {
            title: "A Note on Taking this Course",
            time: "00:14",
          },
          {
            title: "Asking Questions",
            time: "00:33",
          },
          {
            title: "Before You Get Started",
            time: "00:50",
          },
        ],
      },
      {
        title: "Introduction to C# and .NET Framework",
        content_list: [
          {
            title: "Introduction",
            time: "00:55",
          },
          {
            title: "C# vs .NET",
            time: "00:53",
          },
          {
            title: "What is CLR?",
            time: "02:12",
          },
          {
            title: "Architecture of .NET Applications",
            time: "02:42",
          },
          {
            title: "Getting Visual Studio",
            time: "1 page",
          },
          {
            title: "Our First C# Application",
            time: "09:53",
          },
          {
            title: "What is ReSharper?",
            time: "00:28",
          },
          {
            title: "Fundamentals of C# and .NET",
            string: "3 questions",
          },
          {
            title: "Summary",
            time: "01:13",
          },
        ],
      },
      {
        title: "Primitive Types and Expressions",
        content_list: [
          {
            title: "Introduction",
            time: "00:26",
          },
          {
            title: "Variables and Constants",
            time: "08:43",
          },
          {
            title: "Overflowing",
            time: "02:13",
          },
          {
            title: "Scope",
            time: "01:02",
          },
          {
            title: "Demo: Variables and Constants",
            time: "11:27",
          },
          {
            title: "Type Conversion",
            time: "04:48",
          },
          {
            title: "Demo: Type Conversion",
            time: "10:16",
          },
          {
            title: "Operators",
            time: "04:12",
          },
          {
            title: "What are Logical Operations?",
            time: "2 pages",
          },
          {
            title: "Demo: Operators",
            time: "06:21",
          },
          {
            title: "Comments",
            time: "01:43",
          },
          {
            title: "Primitive Types and Expressions",
            string: "6 questions",
          },
          {
            title: "Summary",
            time: "00:35",
          },
        ],
      },
      {
        title: "Non-Primitive Types",
        content_list: [
          {
            title: "Introduction",
            time: "00:25",
          },
          {
            title: "Classes",
            time: "05:55",
          },
          {
            title: "Demo: Classes",
            time: "08:27",
          },
          {
            title: "Structs",
            time: "01:28",
          },
          {
            title: "Arrays",
            time: "02:15",
          },
          {
            title: "Demo: Arrays",
            time: "03:51",
          },
          {
            title: "Strings",
            time: "05:49",
          },
          {
            title: "Demo: Strings",
            time: "07:42",
          },
          {
            title: "Enums",
            time: "01:47",
          },
          {
            title: "Demo: Enums",
            time: "07:37",
          },
          {
            title: "Reference Types and Value Types",
            time: "03:14",
          },
          {
            title: "Demo: Reference Types and Value Types",
            time: "05:48",
          },
          {
            title: "Demo: Reference Types and Value Types",
            time: "03:48",
          },
          {
            title: "Non-primitive Types",
            string: "8 questions",
          },
          {
            title: "Summary",
            time: "00:56",
          },
        ],
      },
      {
        title: "Control Flow",
        content_list: [
          {
            title: "Introduction",
            time: "01:13",
          },
          {
            title: "Conditional Statements",
            time: "02:43",
          },
          {
            title: "Demo: If/Else and Switch/Case",
            time: "08:40",
          },
          {
            title: "Exercises",
            time: "01:10",
          },
          {
            title: "Iteration Statements",
            time: "04:00",
          },
          {
            title: "Demo: For Loops",
            time: "01:56",
          },
          {
            title: "Demo: Foreach Loops",
            time: "03:42",
          },
          {
            title: "Demo: While Loops",
            time: "07:00",
          },
          {
            title: "Random Class",
            time: "09:05",
          },
          {
            title: "Control Flow",
            string: "4 questions",
          },
          {
            title: "Exercises",
            time: "01:07",
          },
          {
            title: "Summary",
            time: "00:37",
          },
        ],
      },
      {
        title: "Arrays and Lists",
        content_list: [
          {
            title: "Introduction",
            time: "00:38",
          },
          {
            title: "Arrays",
            time: "04:47",
          },
          {
            title: "Demo: Arrays",
            time: "10:02",
          },
          {
            title: "Lists",
            time: "02:18",
          },
          {
            title: "Demo: Lists",
            time: "10:11",
          },
          {
            title: "Exercises",
            time: "01:20",
          },
          {
            title: "Arrays and Lists",
            string: "4 questions",
          },
          {
            title: "Summary",
            time: "00:38",
          },
        ],
      },
      {
        title: "Working with Dates",
        content_list: [
          {
            title: "Introduction",
            time: "00:17",
          },
          {
            title: "DateTime",
            time: "06:20",
          },
          {
            title: "TimeSpan",
            time: "07:28",
          },
          {
            title: "Dates and Times Quiz",
            string: "4 questions",
          },
          {
            title: "Summary",
            time: "00:35",
          },
        ],
      },
      {
        title: "Working with Text",
        content_list: [
          {
            title: "Introduction",
            time: "00:17",
          },
          {
            title: "String",
            time: "04:24",
          },
          {
            title: "Demo: String",
            time: "12:28",
          },
          {
            title: "Live Coding: Summarising Text",
            time: "11:18",
          },
          {
            title: "StringBuilder",
            time: "01:07",
          },
          {
            title: "Demo: StringBuilder",
            time: "07:30",
          },
          {
            title: "Working with Text",
            string: "4 questions",
          },
          {
            title: "Exercises",
            time: "01:15",
          },
          {
            title: "Procedural Programming",
            time: "08:45",
          },
          {
            title: "Summary",
            time: "00:35",
          },
        ],
      },
      {
        title: "Working with Files",
        content_list: [
          {
            title: "Introduction",
            time: "00:20",
          },
          {
            title: "System.IO Namespace",
            time: "03:58",
          },
          {
            title: "Demo: File and FileInfo",
            time: "05:50",
          },
          {
            title: "Demo: Directory and DirectoryInfo",
            time: "06:01",
          },
          {
            title: "Demo: Path",
            time: "02:53",
          },
          {
            title: "Exercises",
            time: "00:08",
          },
          {
            title: "Working with Files",
            string: "2 questions",
          },
          {
            title: "Summary",
            time: "01:00",
          },
        ],
      },
      {
        title: "Debugging Applications",
        content_list: [
          {
            title: "Introduction",
            time: "00:21",
          },
          {
            title: "Debugging Tools in Visual Studio",
            time: "10:24",
          },
          {
            title: "Removing Side Effects",
            time: "09:15",
          },
          {
            title: "Defensive Programming",
            time: "07:44",
          },
          {
            title: "Call Stack Window",
            time: "01:46",
          },
          {
            title: "Locals and Autos Windows",
            time: "01:53",
          },
          {
            title: "Debugging Applications",
            string: "4 questions",
          },
          {
            title: "Summary",
            time: "00:38",
          },
        ],
      },
    ],
  },
  {
    id: 1013,
    subcategory_id: 103,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    img: images.beginning_cpp_programming_from_beginner_to_beyond,
    instructor: "Tim Buchalka's Learn Programming Academy",
    price: 4790.0,
    description:
      "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17 covered.  C++20 info see below.",
    ratings: {
      stars: 4.6,
      count: 66358,
    },
    students: 286533,
    lastUpdated: "Last updated 12/2023",
    what_you_will_learn: [
      "Learn to program with one of the most powerful programming languages that exists today, C++.",
      "Obtain the key concepts of programming that will also apply to other programming languages",
      "Learn Modern C++ rather than an obsolete version of C++ that most other courses teach",
      "Learn C++ features from basic to more advanced such as inheritance and polymorphic functions",
      "Learn C++ using a proven curriculum that covers more material than most C++ university courses",
      "Learn C++ from an experienced university full professor who has been using and teaching C++ for more than 25 years",
      "Includes Quizzes, Live Coding Exercises, Challenge Coding Exercises and Assignments",
      "New Section: Learn to use Visual Studio Code with C++",
      "New Section: Learn all about using C++ Lambda Expressions",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "About the Course",
            time: "03:39",
          },
          {
            title: "Why Learn C++?",
            time: "05:00",
          },
          {
            title: "Modern C++ and the  C++ Standard",
            time: "02:58",
          },
          {
            title: "How does all this work?",
            time: "08:13",
          },
          {
            title: "FAQ -- Please Read!",
            time: "00:10",
          },
        ],
      },
      {
        title: "Installation and Setup",
        content_list: [
          {
            title: "Installation and Setup Overview",
            time: "02:53",
          },
          {
            title: "Installing the C++ Compiler on Windows",
            time: "07:06",
          },
          {
            title: "Installing CodeLite on Windows",
            time: "03:48",
          },
          {
            title: "Configuring CodeLite on Windows",
            time: "22:40",
          },
          {
            title: "Installing the C++ Compiler on Mac OSX",
            time: "02:59",
          },
          {
            title: "Installing CodeLite on Mac OSX",
            time: "04:33",
          },
          {
            title: "Configuring CodeLite on Mac OSX",
            time: "15:05",
          },
          {
            title: "Using the Command-Line interface",
            time: "01:32",
          },
          {
            title: "Installing CodeLite on Ubuntu Linux",
            time: "06:27",
          },
          {
            title: "Configuring CodeLite on Ubuntu Linux",
            time: "17:42",
          },
          {
            title:
              "Creating a Default CodeLite Project Template (All Versions)",
            time: "07:45",
          },
          {
            title: "Using the Command-Line Interface on Windows",
            time: "09:43",
          },
          {
            title: "Using the Command-Line Interface on Mac OSX",
            time: "07:49",
          },
          {
            title: "Using the Command-Line Interface on Linux (Ubuntu)",
            time: "08:55",
          },
          {
            title: "Using a Web-based C++ Compiler",
            time: "03:22",
          },
          {
            title: "Using the Included Source Code Course Resources",
            time: "05:08",
          },
        ],
      },
      {
        title: "Curriculum Overview",
        content_list: [
          {
            title: "Curriculum Overview",
            time: "06:58",
          },
          {
            title: "Overview of the Section Challenge Exercises",
            time: "01:29",
          },
          {
            title: "Overview of the Section Quizzes",
            time: "01:06",
          },
        ],
      },
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Section Overview",
            time: "00:58",
          },
          {
            title: "An Overview of the CodeLite Interface",
            time: "21:35",
          },
          {
            title: "Writing our first program",
            time: "08:23",
          },
          {
            title: "Building our first program",
            time: "12:33",
          },
          {
            title: "What are Compiler Errors?",
            time: "09:07",
          },
          {
            title: "What are Compiler Warnings?",
            time: "03:51",
          },
          {
            title: "What are Linker Errors?",
            time: "04:07",
          },
          {
            title: "What are Runtime Errors?",
            time: "00:41",
          },
          {
            title: "What are Logic Errors?",
            time: "01:49",
          },
          {
            title: "Section Challenge",
            time: "01:21",
          },
          {
            title: "Section Challenge - Solution",
            time: "05:09",
          },
          {
            title: "Section 4 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Structure of a C++ Program",
        content_list: [
          {
            title: "Section Overview",
            time: "00:56",
          },
          {
            title: "Overview of the Structure of a C++ Program",
            time: "04:20",
          },
          {
            title: "#include Preprocessor Directive",
            time: "02:11",
          },
          {
            title: "Comments",
            time: "07:29",
          },
          {
            title: "The main() function",
            time: "03:05",
          },
          {
            title: "Namespaces",
            time: "03:56",
          },
          {
            title: "Basic Input and Output (I/O) using cin and cout",
            time: "20:39",
          },
          {
            title: "Using cout and the insertion operator to say Hi to Frank",
            string: "1 question",
          },
          {
            title: "Using cout and the insertion operator",
            string: "1 question",
          },
          {
            title: "Using cin and the extraction operator",
            string: "1 question",
          },
          {
            title: "Section 5 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Variables and Constants",
        content_list: [
          {
            title: "Section Overview",
            time: "01:10",
          },
          {
            title: "What is a variable?",
            time: "03:08",
          },
          {
            title: "Declaring and Initializing Variables",
            time: "14:04",
          },
          {
            title: "Declaring and Initializing Variables",
            string: "1 question",
          },
          {
            title: "Global Variables",
            time: "03:23",
          },
          {
            title: "C++ Built-in Primitive Types",
            time: "15:59",
          },
          {
            title: "What is the Size of a Variable (sizeof)",
            time: "06:52",
          },
          {
            title: "What is a Constant?",
            time: "05:03",
          },
          {
            title: "Declaring and Using Constants",
            time: "18:26",
          },
          {
            title: "Section Challenge",
            time: "01:50",
          },
          {
            title: "Section Challenge - Solution",
            time: "03:08",
          },
          {
            title: "Section 06 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Arrays and Vectors",
        content_list: [
          {
            title: "Section Overview",
            time: "01:07",
          },
          {
            title: "What is an Array?",
            time: "04:40",
          },
          {
            title: "Declaring and Initializing Arrays",
            time: "02:56",
          },
          {
            title: "Accessing and Modifying Array Elements",
            time: "14:13",
          },
          {
            title: "Declaring, Initializing and Accessing an Array",
            string: "1 question",
          },
          {
            title: "Multidimensional Arrays",
            time: "03:11",
          },
          {
            title: "Declaring and Initializing Vectors",
            time: "06:26",
          },
          {
            title: "Accessing and Modifying Vector Elements",
            time: "15:29",
          },
          {
            title: "Declaring, Initializing and Accessing Vectors",
            string: "1 question",
          },
          {
            title: "Section Challenge",
            time: "02:07",
          },
          {
            title: "Section Challenge - Solution",
            time: "06:03",
          },
          {
            title: "Section 07 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Statements and Operators",
        content_list: [
          {
            title: "Section Overview",
            time: "02:02",
          },
          {
            title: "Expressions and Statements",
            time: "03:20",
          },
          {
            title: "Using Operators",
            time: "01:58",
          },
          {
            title: "The Assignment Operator",
            time: "12:31",
          },
          {
            title: "Arithmetic Operators",
            time: "14:55",
          },
          {
            title: "Using the Assignment Operator",
            string: "1 question",
          },
          {
            title: "Using the Arithmetic Operators",
            string: "1 question",
          },
          {
            title: "Increment and Decrement Operators",
            time: "13:11",
          },
          {
            title: "Mixed Expressions and Conversions",
            time: "12:56",
          },
          {
            title: "Testing for Equality",
            time: "09:04",
          },
          {
            title: "Relational Operators",
            time: "04:17",
          },
          {
            title: "Logical Operators",
            time: "15:48",
          },
          {
            title: "Compound Assignment Operators",
            time: "02:15",
          },
          {
            title: "Operator Precedence",
            time: "03:48",
          },
          {
            title: "Logical Operators and Operator Precedence - Can you work?",
            string: "1 question",
          },
          {
            title: "Section Challenge",
            time: "02:30",
          },
          {
            title: "Section Challenge - Solution",
            time: "09:51",
          },
          {
            title: "Section 08 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Controlling Program Flow",
        content_list: [
          {
            title: "Section Overview",
            time: "03:06",
          },
          {
            title: "if Statement",
            time: "18:08",
          },
          {
            title: "If Statement - Can you Drive?",
            string: "1 question",
          },
          {
            title: "if else Statement",
            time: "05:48",
          },
          {
            title: "If-Else Statement - Can you Drive?",
            string: "1 question",
          },
          {
            title: "Nested if Statements",
            time: "22:04",
          },
          {
            title: "Nested If Statements - Can you Drive?",
            string: "1 question",
          },
          {
            title: "switch-case Statement",
            time: "20:14",
          },
          {
            title: "Switch Statement - Day of the Week",
            string: "1 question",
          },
          {
            title: "Conditional Operator",
            time: "10:37",
          },
          {
            title: "Looping",
            time: "03:12",
          },
          {
            title: "for Loop",
            time: "22:08",
          },
          {
            title: "For loop - Sum of Odd Integers",
            string: "1 question",
          },
          {
            title: "range-based for Loop",
            time: "14:59",
          },
          {
            title: "Using the range-based for loop",
            string: "1 question",
          },
          {
            title: "while Loop",
            time: "16:39",
          },
          {
            title: "While loop exercise",
            string: "1 question",
          },
          {
            title: "do while Loop",
            time: "13:46",
          },
          {
            title: "continue and break",
            time: "02:33",
          },
          {
            title: "Infinite Loops",
            time: "03:17",
          },
          {
            title: "Nested Loops",
            time: "19:47",
          },
          {
            title:
              "Nested Loops - Sum of the Product of all Pairs of Vector Elements",
              string: "1 question",
          },
          {
            title: "Section Challenge",
            time: "06:09",
          },
          {
            title: "Section Challenge - Solution Part 1",
            time: "14:47",
          },
          {
            title: "Section Challenge - Solution Part 2",
            time: "10:40",
          },
          {
            title: "\u200bSection 09 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Characters and Strings",
        content_list: [
          {
            title: "Section Overview",
            time: "01:54",
          },
          {
            title: "Character Functions",
            time: "02:30",
          },
          {
            title: "C-Style Strings",
            time: "07:45",
          },
          {
            title: "Working with C-style Strings",
            time: "13:45",
          },
          {
            title: "Using C-style Strings",
            string: "1 question",
          },
          {
            title: "C++ Strings",
            time: "15:28",
          },
          {
            title: "Working with C++ Strings",
            time: "16:45",
          },
          {
            title: "Using C++ Strings - Exercise 1",
            string: "1 question",
          },
          {
            title: "Using C++ Strings - Exercise 2",
            string: "1 question",
          },
          {
            title: "Section Challenge",
            time: "06:48",
          },
          {
            title: "Section Challenge - Solution",
            time: "13:15",
          },
          {
            title: "\u200bSection 10 Quiz",
            string: "10 questions",
          },
          {
            title: "Challenge Assignment - Letter Pyramid",
            string: "1 question",
          },
        ],
      },
    ],
  },
  {
    id: 1014,
    subcategory_id: 203,
    title: "Leadership: Practical Leadership Skills",
    img: images.leadership_practical_leadership_skills,
    instructor: "Chris Croft",
    price: 3290.0,
    description:
      "Master leadership skills and leadership techniques with this highly practical advice and training",
    ratings: {
      stars: 4.6,
      count: 74877,
    },
    students: 213730,
    lastUpdated: "Last updated 10/2023",
    what_you_will_learn: [
      "Become a Master in Leadership",
      "Be a better boss, and run a highly effective team",
      "Delegate effectively to empower their team",
      "Have a healthy work life balance, with a happy environment",
      "Understand academic theories surrounding leadership styles and techniques",
      "Build a vast array of practical tools to be a fantastic leader",
      "Know the difference between delegating styles and which one is appropriate for each situation",
      "Feel confident enough to involve employees in decision making and planning",
      "Spend more time developing plans and ideas for the future",
    ],
    course_content: [
      {
        title: "What to Expect",
        content_list: [
          {
            title: "Welcome to Practical Leadership by Chris Croft",
            time: "00:53",
          },
          {
            title: "John Adair's Matrix",
            time: "1 page",
          },
        ],
      },
      {
        title: "What is a Leader?",
        content_list: [
          {
            title: "What is the difference between Leadership and Management?",
            time: "00:57",
          },
          {
            title: "What makes a good leader? People, systems and vision",
            time: "09:44",
          },
          {
            title: "Is Everything Management's Fault?",
            time: "04:45",
          },
          {
            title: "How to Connect With Your Team",
            time: "05:31",
          },
          {
            title: "How Should I Communicate to My Team?",
            time: "04:10",
          },
          {
            title: "Are Great Leaders Born or Made?",
            time: "06:01",
          },
          {
            title: "What is a Leader? Quiz",
            string: "8 questions",
          },
        ],
      },
      {
        title: "Motivation",
        content_list: [
          {
            title: "Motivation: The Essence of Leadership",
            time: "00:40",
          },
          {
            title:
              "Understanding Maslow's Hierarchy of Needs in a Leadership Role",
            time: "11:07",
          },
          {
            title:
              "Document to Help You Apply Maslow to Your Working Environment",
            time: "1 page",
          },
          {
            title:
              "The Management Potato: How to Separate Praise and Criticism",
            time: "09:06",
          },
          {
            title: "How to Manage and Motivate the 4 Types of People",
            time: "07:00",
          },
          {
            title: "Document to Explain the 4 Types of People",
            time: "1 page",
          },
          {
            title: "Is Money a Motivator?",
            time: "05:59",
          },
          {
            title: "20 Things You Should Be Doing to Motivate Your People",
            time: "09:30",
          },
          {
            title: "Motivation Quiz",
            string: "6 questions",
          },
        ],
      },
      {
        title: "Leadership Styles Part 1",
        content_list: [
          {
            title: "Leadership Styles: Key Theories",
            time: "00:39",
          },
          {
            title:
              "How Much Control Should You Keep And How Much To Give Away?",
            time: "09:10",
          },
          {
            title: "Document: The Tannenbaum & Schmidt Management Continuum",
            time: "1 page",
          },
          {
            title:
              "Which Is Best? Delegating, Abdicating, Empowerment or The Seagull?",
            time: "01:57",
          },
          {
            title: "Leadership Styles Quiz (Part 1)",
            string: "4 questions",
          },
        ],
      },
      {
        title: "Delegating",
        content_list: [
          {
            title: "Delegating: Understand When, How and The Best Way To Do It",
            time: "00:24",
          },
          {
            title: "How To Empower Effectively and What Are The Benefits?",
            time: "09:04",
          },
          {
            title: "Why Should You Delegate?",
            time: "01:48",
          },
          {
            title:
              "Worried About Delegating? How To Overcome The Reasons Not To Delegate",
            time: "05:57",
          },
          {
            title:
              "What Would Happen To Your Team Or Company If You Weren't There?",
            time: "03:33",
          },
          {
            title: "What Happens If You Don't Delegate: The Cushion Story",
            time: "04:47",
          },
          {
            title: "How to Delegate - The Eight Steps to Successful Delegation",
            time: "06:45",
          },
          {
            title:
              "Get People To Fix Their Own Problems - Don't Take the Monkey",
            time: "04:53",
          },
          {
            title: "Delegating Quiz",
            string: "8 questions",
          },
        ],
      },
      {
        title: "Leadership Styles Part 2",
        content_list: [
          {
            title:
              "Leadership Styles: Which Tannenbaum & Schmidt Style Should You Use?",
            time: "00:28",
          },
          {
            title: "How To Lead Using The Situational Leadership Theory",
            time: "06:14",
          },
          {
            title:
              "Document: Situational Leadership - Considerations When Delegating",
            time: "1 page",
          },
          {
            title: "How To Prevent Delegation Failure",
            time: "06:06",
          },
          {
            title:
              "The Freedom Ladder Thoery: How Much Freedom Should You Give?",
            time: "05:35",
          },
          {
            title: "Document: The Freedom Ladder",
            time: "2 pages",
          },
          {
            title: "How To Decide Your Level Of Grip",
            time: "04:22",
          },
          {
            title: "Management Style Options for Planning and Doing",
            time: "03:03",
          },
          {
            title:
              "Document: Visual Plan to Decide The Management Options for Planning and Doing",
            time: "1 page",
          },
          {
            title: "Motivation Quiz",
            string: "4 questions",
          },
          {
            title:
              "What To Do Daily, Weekly, Monthly and Yearly To Stay Ahead of The Game",
            time: "05:56",
          },
          {
            title: "Document: List of Regular Management Tasks",
            time: "1 page",
          },
          {
            title: "Leadership Styles Quiz (Part 2)",
            string: "6 questions",
          },
        ],
      },
      {
        title: "Wrap Up",
        content_list: [
          {
            title: "Your Pledge To Improve: The Management Charter",
            time: "02:00",
          },
          {
            title: "Document: Your Management Charter",
            time: "1 page",
          },
          {
            title: "Thank You And What Will You Do Differently?",
            time: "02:04",
          },
          {
            title: "How To Get Your Certificate",
            time: "01:38",
          },
        ],
      },
      {
        title: "Bonus: Latest Content Updates",
        content_list: [
          {
            title: "Three Types of Leadership Theory",
            time: "05:27",
          },
          {
            title: "The Do-Get-Feel Cycle For Taking Control of Your Work Life",
            time: "04:31",
          },
          {
            title: "Ownership: An Important Motivator",
            time: "02:41",
          },
          {
            title: "How To Motivate The Four Different Types of People",
            time: "05:57",
          },
          {
            title:
              "Keeping People Motivated In Order To Avoid The Banana of Boredom",
            time: "04:02",
          },
          {
            title: 'How to Get From "Tell" to "Delegate"',
            time: "05:57",
          },
        ],
      },
    ],
  },
  {
    id: 1015,
    subcategory_id: 203,
    title: "Become a Product Manager | Learn the Skills & Get the Job",
    img: images.become_a_product_manager_learn_the_skills_and_get_the_job,
    instructor: "Cole Mercer",
    price: 3290.0,
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, &amp; more",
    ratings: {
      stars: 4.5,
      count: 54528,
    },
    students: 235179,
    lastUpdated: "Last updated 12/2023",
    what_you_will_learn: [
      "Understand the varying role of a Product Manager through different types and sizes of companies",
      "Decide which type of Product Manager best fits one's goals and personality",
      "Understand the Product Lifecycle and how it applies to every product",
      "Understand the modern Product Development Process that both Fortune 500s and Startups adhere to",
      "Know how to identify ideas worth pursuing and dedicating resources to",
      "Understand how to get at the root of customer pain points",
      "Understand and communicate customer pain by type and frequency",
      "Assess the core problem of a product",
      "Find and compare competitors and competing products",
      "Differentiate between Direct, Indirect, Substitute, and Potential competitors",
      "Understand the process of Customer Development and how it relates to being a Product Manager",
      "How to find potential interviewees for product interviews, user tests, and exploratory interviews",
      "How to structure and run a customer interview",
      "How to model interview questions correctly while avoiding bias",
      "Navigate the four different types of customer interviews",
      "Find potential interviewees both internally and externally",
      "Write emails that will get users and potential customers to respond",
      "Build user personas based on both qualitative and quantitative data",
      "Understand the difference between a wireframe, a mockup, and a prototype",
      "Sketch out a wireframe with just a pen and paper",
      "Use Balsamiq to create wireframes at an intermediate level",
      "Use a sketch system called POP for digitizing product sketches",
      "Create specs for epics and user stories",
      "Properly apply acceptance criteria",
      "Run a variety of MVP experiments, such as pitch experiments, redirects, shadow buttons, and more",
      "Correctly evaluate which product metrics to track and which to ignore",
      "Apply the AARRR framework to your product",
      "Apply the HEART framework to your product",
      "Track your metrics using a variety of software",
      "Create a product and feature roadmap",
      "Create a product backlog and properly prioritize features",
      "Calculate team velocity and build estimations for product delivery",
      "Understand the difference between Agile and Waterfall development",
      "Understand the difference between two popular Agile frames: Scrum and Kanban",
      "Learn software development concepts like APIs, mobile development, Front End, Back End, MySQL, programming frameworks, and more",
      "Communicate effectively with all the stakeholders of a product",
      "Communicate effectively with engineers in a way they will appreciate and understand",
      "Communicate effectively with designers by focusing on the things they care about most",
      "Communicate effectively with executives and higher-ups",
      "Understand the role of technology in modern Startups and Fortune 500s",
      'Understand the basics of "The Cloud" and Servers vs. Clients',
      "Understand the basics of front-end vs. back-end technology, tech stacks, and how they integrate together",
      "Understand the basics of APIs, what they do, what they look like, and how your team might use them",
      "Understand how to obtain relevant experience to set up for a transition to Product Management",
      "Build a portfolio that will assist in a hiring application",
      "How to self-brand online and build a following pre-hire",
      "What to look for in Product Management jobs and what to ignore",
      "How to apply insider tips and tricks to getting hired as a Product Manager",
      "Craft a resume that appeals to a hiring manager for Product Management placement",
      "Ace the Product Manager interview",
      "Excel beyond getting hired",
    ],
    course_content: [
      {
        title: "Before Starting the Course",
        content_list: [
          {
            title: "Course Overview",
            time: "05:06",
          },
          {
            title: "First Thing to Do",
            time: "01:24",
          },
          {
            title:
              "Choose your own adventure - we'll tell you which lectures to watch *SAVE TIME!*",
            time: "00:33",
          },
          {
            title: "Join our community on Slack!",
            time: "Processing..",
          },
          {
            title: "Review sheets, activities, & resources - all in one PDF!",
            time: "00:17",
          },
        ],
      },
      {
        title: "Introduction to Product Management",
        content_list: [
          {
            title: "What is a Product Manager?",
            time: "03:30",
          },
          {
            title: "What is a Product?",
            time: "02:54",
          },
          {
            title: "[POP QUIZ]  Products and Product Managers",
            string: "5 questions",
          },
          {
            title: "[ACTIVITY] The Big, Bloated, Blue Bird",
            time: "01:32",
          },
          {
            title: "Three Different Types of Product Manager Roles",
            time: "04:30",
          },
          {
            title: "How to Think About the Type of PM You Want to Be",
            time: "04:01",
          },
          {
            title: "Product vs. Project Management",
            time: "06:41",
          },
          {
            title: "A Day in the Life",
            time: "04:48",
          },
          {
            title: "Why Product Management is Awesome",
            time: "01:46",
          },
          {
            title: "[QUIZ] The World of Product Management",
            string: "3 questions",
          },
          {
            title: "Hooray for free stuff!",
            time: "01:40",
          },
          {
            title:
              "Q&A Section 2: SQL, Service Businesses, and All About Being a PM",
            time: "00:53",
          },
          {
            title: "Section 2: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Introduction to Product Development",
        content_list: [
          {
            title: "The Four Major Phases of the Product Lifecycle",
            time: "03:14",
          },
          {
            title: "[POP QUIZ] Did You Catch All of That?",
            string: "2 questions",
          },
          {
            title: "[ACTIVITY] Six Products Four Phases - Can you guess which?",
            time: "00:21",
          },
          {
            title: "Product Lifecycle Phases: Real World Examples",
            time: "04:06",
          },
          {
            title: "The Product Development Process",
            time: "03:22",
          },
          {
            title: "Getting Deeper Into the Product Development Process",
            time: "04:40",
          },
          {
            title: "[ANOTHER POP QUIZ] Product Lifecycle and Development Quiz",
            string: "3 questions",
          },
          {
            title: 'What is "Lean Product Development"?',
            time: "01:56",
          },
          {
            title: 'What is "Agile"?',
            time: "01:37",
          },
          {
            title: 'What is "Scrum" and How Does it Work?',
            time: "04:17",
          },
          {
            title: 'What is "Kanban" and How Does it Work?',
            time: "02:50",
          },
          {
            title: "What is Waterfall Development?",
            time: "01:12",
          },
          {
            title: "Real World Examples of Waterfall and Agile",
            time: "04:26",
          },
          {
            title: '[QUIZ] Speaking "Product Development"',
            string: "7 questions",
          },
          {
            title: "Section 3: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Ideas and User Needs",
        content_list: [
          {
            title: "Introduction to Ideas and User Needs",
            time: "02:01",
          },
          {
            title: "Where Ideas Come From as a PM",
            time: "04:53",
          },
          {
            title: "[POP QUIZ] On the Origin of Ideas",
            string: "6 questions",
          },
          {
            title: "Getting to the Real User Needs",
            time: "07:58",
          },
          {
            title: "[ACTIVITY]: Separating the Signal from the Noise",
            time: "00:26",
          },
          {
            title: "Users vs. Customers",
            time: "01:41",
          },
          {
            title: "[QUIZ] Ideas and User Needs",
            string: "4 questions",
          },
          {
            title: "Section 4: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Competitive and Market Analysis",
        content_list: [
          {
            title: "Market Research - Sizing the Market",
            time: "04:09",
          },
          {
            title: "Introduction to Finding Competitors",
            time: "03:04",
          },
          {
            title: "Finding Competitors as a Product Manager",
            time: "12:18",
          },
          {
            title: "Direct / Indirect / Potential Competitors and Their Impact",
            time: "07:30",
          },
          {
            title: "[POP QUIZ] One Company to Rule Them All",
            string: "5 questions",
          },
          {
            title: "The Five Criteria for Understanding Competitors",
            time: "06:03",
          },
          {
            title: "The Last Three Criteria for Understanding Competitors",
            time: "05:26",
          },
          {
            title: "[POP QUIZ] The Dating Game",
            string: "7 questions",
          },
          {
            title: "What's a Feature Table?",
            time: "02:03",
          },
          {
            title: "Putting Together a Feature Table",
            time: "06:03",
          },
          {
            title: "[ACTIVITY] Oculus Rift Between Your Friends",
            time: "Processing..",
          },
          {
            title: "Practice Building a Feature Table",
            time: "08:30",
          },
          {
            title: "Analyze Specific Features",
            time: "11:42",
          },
          {
            title: "[ACTIVITY] Wunderlist and Their Not-So-Wunderful Dilemma",
            time: "Processing..",
          },
          {
            title: "Monitoring Competitors",
            time: "10:51",
          },
          {
            title: "What Do We Ultimately Care About as a PM?",
            time: "01:33",
          },
          {
            title: "Section 5: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Customer Development",
        content_list: [
          {
            title: "What is Customer Development?",
            time: "06:11",
          },
          {
            title: "The Four Types of Interviews",
            time: "10:22",
          },
          {
            title: "Key Differences in Customer Development",
            time: "02:36",
          },
          {
            title: "[POP QUIZ] Customer Development",
            string: "8 questions",
          },
          {
            title: "Who You Should Talk To",
            time: "10:00",
          },
          {
            title: "Finding Interviewees Externally",
            time: "11:26",
          },
          {
            title: "Finding Interviewees Internally",
            time: "09:22",
          },
          {
            title: "How to Get Them to Talk",
            time: "09:36",
          },
          {
            title: "Practice Writing Emails",
            time: "09:14",
          },
          {
            title: "How to Run a Customer Interview Correctly",
            time: "08:22",
          },
          {
            title: "Putting the GO in Pokemon Go",
            time: "00:00",
          },
          {
            title: "Good Questions, Bad Questions",
            time: "07:10",
          },
          {
            title: "Building User Personas Off Your Interviews",
            time: "03:28",
          },
          {
            title: "Real World Example of a User Persona",
            time: "01:48",
          },
          {
            title: "The Product Manager & The Data Diet",
            time: "04:29",
          },
          {
            title: "[QUIZ] Understanding Customer Development",
            string: "3 questions",
          },
          {
            title: "Section 6: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Designing and Running Experiments",
        content_list: [
          {
            title: "What is an MVP?",
            time: "06:37",
          },
          {
            title: "How do product managers think about MVPs?",
            time: "06:59",
          },
          {
            title: "7 steps to running an MVP experiment",
            time: "04:11",
          },
          {
            title: "[POP QUIZ] You Down with MVP?",
            string: "5 questions",
          },
          {
            title: "Identifying your assumptions",
            time: "07:17",
          },
          {
            title: "FOLLOW ALONG: Let's identify the assumptions for Zirx",
            time: "07:05",
          },
          {
            title: "Finding the riskiest assumption of them all",
            time: "05:56",
          },
          {
            title: "Making decisions: The risk / difficulty square",
            time: "05:57",
          },
          {
            title: "What is a hypothesis?",
            time: "03:45",
          },
          {
            title: "Putting together a hypothesis",
            time: "07:56",
          },
          {
            title: "FOLLOW ALONG: Identifying Zirx's hypothesis",
            time: "04:14",
          },
          {
            title: "What's a minimum criteria for success?",
            time: "08:28",
          },
          {
            title: "Creating a formula for your MCS",
            time: "08:18",
          },
          {
            title: "OPTIONAL: Making the calculation for startups",
            time: "03:18",
          },
          {
            title: "MVP techniques: emails, shadows, & whoops",
            time: "08:39",
          },
          {
            title: "More MVP techniques: walk me throughs & pitch experiments",
            time: "07:29",
          },
          {
            title:
              "Even more MVP techniques: bellhops, Dorothy, & Frankensteins",
            time: "06:57",
          },
          {
            title: "In depth: Email based MVPs",
            time: "03:27",
          },
          {
            title: "In depth: Shadow buttons",
            time: "02:31",
          },
          {
            title: "In depth: Coming soon & 404 MVPs",
            time: "03:42",
          },
          {
            title: "In depth: Explainer videos",
            time: "05:22",
          },
          {
            title: "In depth: Piecemeal MVPs",
            time: "04:42",
          },
          {
            title: "In depth: Concierge service MVPs",
            time: "04:20",
          },
          {
            title:
              "OPTIONAL: How do big companies think about MVP experiments?",
            time: "05:08",
          },
          {
            title: "Evaluating results & Learning from them",
            time: "05:19",
          },
          {
            title: "Section 7: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Conceptualizing the Solution",
        content_list: [
          {
            title: "Introduction to Wireframing",
            time: "05:36",
          },
          {
            title: "Wireframe, Mockup, Prototype",
            time: "11:02",
          },
          {
            title: "Let's Jump into Sketching",
            time: "09:01",
          },
          {
            title: "Sketching Out a Mobile App",
            time: "07:30",
          },
          {
            title: "OPTIONAL: Using POP features in Marvel",
            time: "08:57",
          },
          {
            title: "Intro to Balsamiq",
            time: "11:07",
          },
          {
            title: "Building YouTube in Balsamiq",
            time: "08:27",
          },
          {
            title: "[QUIZ] Just Making Sure...",
            string: "7 questions",
          },
          {
            title: "Section 8: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title:
          "Metrics for Product Managers - Defining Success and Measuring Results",
        content_list: [
          {
            title: "Introduction to Metrics",
            time: "07:31",
          },
          {
            title: "Real Life Examples of Metrics",
            time: "07:53",
          },
          {
            title: "Metrics of All Kinds",
            time: "15:08",
          },
          {
            title: "How to Pick Good Metrics",
            time: "11:57",
          },
          {
            title: "Using the HEART Metrics Framework - Part 1",
            time: "10:04",
          },
          {
            title: "Using the HEART Metrics Framework - Part 2",
            time: "11:46",
          },
          {
            title: "Using the AARRR (Pirate) Metrics Framework",
            time: "06:40",
          },
          {
            title: "Tracking Your Metrics in Practice",
            time: "05:16",
          },
          {
            title: "[QUIZ] Pirates of the Correlation",
            string: "8 questions",
          },
          {
            title: "Section 9: Review & Recap",
            time: "00:00",
          },
        ],
      },
      {
        title: "Building the Product - Project Management for PMs",
        content_list: [
          {
            title: "Introduction to Epics",
            time: "05:15",
          },
          {
            title: "Let's Get Into Epic Specs",
            time: "04:49",
          },
          {
            title: "User Stories and Acceptance Criteria",
            time: "04:33",
          },
          {
            title:
              "Real Life Example of Epics, Specs, User Stories, and the Backlog",
            time: "12:07",
          },
          {
            title: "Estimations and Velocity",
            time: "09:24",
          },
          {
            title: "Roadmapping",
            time: "05:40",
          },
          {
            title: "Prioritization",
            time: "07:20",
          },
          {
            title: "[QUIZ] Epic Feature, Bro",
            string: "7 questions",
          },
          {
            title: "Section 10: Review & Recap",
            time: "00:00",
          },
        ],
      },
    ],
  },
  {
    id: 1016,
    subcategory_id: 301,
    title: "Introduction to Finance, Accounting, Modeling and Valuation",
    img: images.introduction_to_finance_accounting_modeling_and_valuation,
    instructor:
      "Chris Haroun | 1.4 Million Students | #1 Best Selling Business & Finance Prof.",
    price: 4490.0,
    description:
      "Learn Finance & Accounting from Scratch by an Award Winning MBA Professor, Ivy Grad, worked @ Goldman & VC",
    ratings: {
      stars: 4.5,
      count: 31551,
    },
    students: 201451,
    lastUpdated: "Last updated 6/2023",
    what_you_will_learn: [
      "#1 Best Selling Accounting Course on Udemy (Learn Finance and Accounting the Easy Way)!\u200b",
      "Analyze and understand an income statement (even if you have no experience with income statements).",
      "Analyze and understand a balance sheet (even if you have no experience with balance sheets).",
      "Analyze and understand a cash flow statement (even if you have no experience with cash flow statements).",
      "Understand and use modeling best practices so you can create financial models.",
      "Know where to get data in order to build a financial model (in depth understanding of identifying and using/navigating the best free websites and sources to build your financial model)!",
      "Create a financial model (projecting the future) for an income statement.",
      "Create a financial model (projecting the future) for a balance sheet.",
      "Create a financial model (projecting the future) for a cash flow statement.",
      "Understand valuation best practices so you can create target prices based on your financial models.",
      "How to use Discounted Cash Flow (DCF) and how to create the Weighted Average Cost of Capital and Terminal values in order to pick target prices.",
      "How to use P/E in order to pick target prices.",
      "How to use P/R in order to pick target prices.",
      "Other valuation methodologies, including EV/Sales, EV/EBITDA, P/B, EV/FCF, etc.",
      "Come up with a target price based on an average of several different valuation methodologies.",
      "Analyze the total addressable market for a company you are doing research on.",
      "Analyze financial statements using profitability ratios: Gross Margin (Cost of Goods Sold / Revenue), Operating Margin (EBITDA/ Revenue), Net Profit Margin (Net Income / Revenue), Return on Assets (Net Income / Assets) and Return on Equity (Net Income / Equity).",
      "Analyze financial statements using debt and inventory formulas:   Debt to Assets (Total Liabilities/ Total Assets), Debt to Equity (Total Liabilities/ Total Equity), Interest Coverage Ratio (EBITDA / Interest) and   Inventory Days on Hand (Inventory / Cost of Good Sold) * 365.",
      "Analyze and compare companies using the following formulas: Price / Earnings, PEG (P/E / Growth), Price / Revenue, EV/EBITDA, EV/Sales, Price/Free Cash Flow and Price / Book.",
      "We will do an extremely in depth professional accounting, finance, modeling and valuation analysis of LinkedIn using the accounting and finance methodologies used in this course (you will also have many exercises to complete that will help you understand accounting, finance, valuation and modeling).",
    ],
    course_content: [
      {
        title: "Course Introduction",
        content_list: [
          {
            title: "Thank You Message from Chris",
            time: "00:02",
          },
          {
            title: "Course Introduction & Who is this Course For?",
            time: "03:43",
          },
          {
            title:
              "How to Ask me Questions Live on my Weekly Webcast (Includes Zoom)",
            time: "00:11",
          },
        ],
      },
      {
        title: "Accounting Part 1 of 3: Income Statement Analysis",
        content_list: [
          {
            title:
              "Why is the Income Statement Important & How Can It Help You Achieve Your Goals",
            time: "01:53",
          },
          {
            title: "Income Statement Explanation",
            time: "03:57",
          },
          {
            title: "Income Statement Example and Analysis",
            time: "08:48",
          },
          {
            title: "Income Statement Analysis Exercise",
            time: "01:07",
          },
          {
            title: "Income Statement Analysis Exercise Answers Explanations",
            time: "02:57",
          },
        ],
      },
      {
        title: "Accounting Part 2 of 3: Balance Sheet Analysis",
        content_list: [
          {
            title:
              "Why is the Balance Sheet Important & How Can It Help You Achieve Your Goals",
            time: "01:10",
          },
          {
            title: "Balance Sheet Explanation",
            time: "02:04",
          },
          {
            title: "Balance Sheet Example and Analysis",
            time: "08:39",
          },
          {
            title: "Balance Sheet Analysis Exercise",
            time: "00:59",
          },
          {
            title: "Balance Sheet Analysis Exercise Answer Explanations",
            time: "02:39",
          },
        ],
      },
      {
        title: "Accounting Part 3 of 3: Cash Flow Statement Analysis",
        content_list: [
          {
            title:
              "Why is the Cash Flow Statement Important+How Can It Help You Achieve Your Goals",
            time: "01:25",
          },
          {
            title: "Cash Flow Statement Explanation",
            time: "02:08",
          },
          {
            title: "Cash Flow Statement Example and Analysis",
            time: "06:34",
          },
          {
            title: "Cash Flow Statement Analysis Exercise",
            time: "00:34",
          },
          {
            title: "Cash Flow Statement Analysis Exercise Answer Explanations",
            time: "02:08",
          },
          {
            title:
              "Financial Statement Analysis Conclusion (How All 3 Statements Are Related)",
            time: "02:17",
          },
          {
            title: "CPE Review Quiz: Section 2-4",
            string: "4 questions",
          },
        ],
      },
      {
        title:
          "Financial Modeling Part 1 of 4: Introduction and Best Practices",
        content_list: [
          {
            title:
              "Why is Financial Modeling Important & How Can It Help You Achieve Your Goals",
            time: "02:04",
          },
          {
            title: "Financial Modeling Best Practices",
            time: "05:13",
          },
        ],
      },
      {
        title:
          "Financial Modeling Part 2 of 4: Where Do I Get Historical Data From?",
        content_list: [
          {
            title:
              "Why is Investor Relations+SEC.Gov Important & How Can It Help Me Build Models?",
            time: "01:46",
          },
          {
            title:
              "Introduction to Investor Relations (A Great Model Data Source)",
            time: "11:01",
          },
          {
            title: "SEC.gov is Another Great Model Resource",
            time: "07:07",
          },
          {
            title: "Yahoo Finance is Also a Great Model Resource",
            time: "05:28",
          },
          {
            title:
              "What Quarterly Earnings Call & Why Is It Important for Modeling Purposes?",
            time: "04:35",
          },
          {
            title: "CPE Review Quiz: Section 5-6",
            string: "2 questions",
          },
        ],
      },
      {
        title:
          "Financial Modeling Part 3 of 4: Case Study: Building a Model for LinkedIn",
        content_list: [
          {
            title:
              "Case Study Introduction and What You Will Learn in this Section",
            time: "01:55",
          },
          {
            title: "Qualitative Analysis on LinkedIn",
            time: "02:22",
          },
          {
            title:
              "What is the Total Addressable Market for LinkedIn and Why is this Important?",
            time: "06:10",
          },
          {
            title: "LinkedIn Model Introduction",
            time: "04:15",
          },
          {
            title:
              "LinkedIn Model Discussion in More Detail (Historical Data Only)",
            time: "17:47",
          },
          {
            title: "Forecasting the LinkedIn Model",
            time: "16:34",
          },
        ],
      },
      {
        title: "Financial Modeling Part 4 of 4: Financial Model Exercise",
        content_list: [
          {
            title: "Financial Modeling Exercises Introduction",
            time: "00:51",
          },
          {
            title: "Financial Modeling Exercise",
            time: "03:33",
          },
          {
            title: "Modeling Exercise Answer Explanations",
            time: "10:08",
          },
          {
            title: "CPE Review Quiz: Section 7-8",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Valuation Part 1 of 6: Introduction and Best Practices",
        content_list: [
          {
            title: "Introduction to Valuation",
            time: "01:18",
          },
          {
            title:
              "More Detail on Growth Versus Value and P/E + P/R + DCF Overview",
            time: "04:21",
          },
          {
            title: "25 Valuation and Modeling Best Practices",
            time: "00:06",
          },
        ],
      },
      {
        title: "Valuation Part 2 of 6: Discounted Cash Flow (DCF)",
        content_list: [
          {
            title: "What is DCF, Why is it Important and How Does it Work?",
            time: "06:17",
          },
          {
            title: "Calculating the Terminal Value",
            time: "02:42",
          },
          {
            title: "Calculating the Weighted Average Cost of Capital (WACC)",
            time: "06:23",
          },
          {
            title: "DCF Example",
            time: "07:44",
          },
          {
            title: "DCF Exercise",
            time: "01:57",
          },
          {
            title: "DCF Exercise Answer Explanations Part 1 of 2",
            time: "19:27",
          },
          {
            title: "DCF Exercise Answer Explanations Part 2 of 2",
            time: "10:31",
          },
        ],
      },
    ],
  },
  {
    id: 1017,
    subcategory_id: 301,
    title: "Accounting & Financial Statement Analysis: Complete Training",
    img: images.accounting_financial_statement_analysis_complete_training,
    instructor: "365 Careers",
    price: 3290.0,
    description:
      "Accounting & Financial Ratio Analysis made easy. Learn important accounting skills that will get your foot in the door!",
    ratings: {
      stars: 4.6,
      count: 17807,
    },
    students: 76756,
    lastUpdated: "Last updated 10/2022",
    what_you_will_learn: [
      "Understand bookkeeping records",
      "Build an Income Statement",
      "Build a Balance Sheet",
      "Understand the accounting equation and the principle of double entry",
      "Tell the difference between debits and credits",
      "Account for the difference between income and cash",
      "Navigate through Financial Reports with ease",
      "Perform Vertical and Horizontal Analysis",
      "Calculate Liquidity, Solvency, Profitability and Growth ratios",
      "Analyze a company's performance based on the figures in its annual report",
    ],
    course_content: [
      {
        title: "Introduction to Accounting - Why Accounting Is Important?",
        content_list: [
          {
            title: "What Does The Course Cover?",
            time: "01:57",
          },
          {
            title: "What Is Accounting and Why Do We Need It?",
            time: "05:24",
          },
          {
            title: "Why do we need Accounting?",
            string: "1 question",
          },
          {
            title:
              "The Importance of Bookkeeping - Good Accounting Records Are Essential",
            time: "02:33",
          },
          {
            title: "The importance of Bookkeeping",
            string: "1 question",
          },
          {
            title: "Financial Accounting - Who Needs Financial Reports?",
            time: "02:24",
          },
          {
            title: "Course Notes - Download",
            time: "1 page",
          },
          {
            title: "CPE Review Quiz: Section 1",
            string: "3 questions",
          },
        ],
      },
      {
        title: "The Three Main Statements in Financial Accounting",
        content_list: [
          {
            title:
              "The Three Main Financial Statements: P&L, Balance Sheet and Cash Flow Statement",
            time: "02:07",
          },
          {
            title: "Income Statement Items",
            time: "06:37",
          },
          {
            title: "Revenue Types - Practical Exercise",
            time: "01:47",
          },
          {
            title:
              "The Revenue Recognition Principle - Why Is it so Important?",
            time: "02:34",
          },
          {
            title: "Types of Expenses",
            time: "05:24",
          },
          {
            title:
              "The Expense Recognition Principle - When to Recognize Expenses",
            time: "02:29",
          },
          {
            title: "Income Taxes",
            time: "01:48",
          },
          {
            title: "Main P&L Formats",
            time: "01:15",
          },
          {
            title: "Balance Sheet Items",
            time: "04:18",
          },
          {
            title: "Depreciation and Amortization (D&A)",
            time: "04:35",
          },
          {
            title: "Historical Cost vs. Fair Value Accounting",
            time: "02:23",
          },
          {
            title: "Completing 33% of the Course",
            time: "00:32",
          },
          {
            title: "\u0422ypes of Assets - Practical Example",
            time: "03:20",
          },
          {
            title: "\u0422ypes of Liabilities - Practical Example",
            time: "03:19",
          },
          {
            title: "Equity",
            time: "01:55",
          },
          {
            title: "Types of Equity - Practical Example",
            time: "04:41",
          },
          {
            title: "CPE Review Quiz: Section 2",
            string: "3 questions",
          },
          {
            title: "CPE Review Quiz: Section 3",
            string: "2 questions",
          },
        ],
      },
      {
        title:
          "Let's Build a Solid Foundation: Core Accounting Principles That You Should Learn",
        content_list: [
          {
            title: "The Main Accounting Equation and How It Stays in Balance",
            time: "01:56",
          },
          {
            title: "The Accounting Equation",
            string: "1 question",
          },
          {
            title:
              "General & Subsidiary Ledgers - This Is How a Firm Organizes Its Accounts",
            time: "01:39",
          },
          {
            title: "General and Subsidiary Ledgers",
            string: "1 question",
          },
          {
            title:
              "Making Sense of Debits and Credits! Balance Sheet T-Accounts",
            time: "04:13",
          },
          {
            title: "Income Statement T-Accounts",
            time: "02:46",
          },
          {
            title: "T-Accounts",
            string: "1 question",
          },
          {
            title:
              "The Cornerstone Principle of Accounting - Double Entry Bookkeeping",
            time: "05:02",
          },
          {
            title: "Double-Entry Bookkeeping",
            string: "1 question",
          },
          {
            title: "CPE Review Quiz: Section 4",
            string: "3 questions",
          },
        ],
      },
      {
        title:
          "A COMPLETE Case Study: Bookkeeping Records + Income Statement + Balance Sheet",
        content_list: [
          {
            title:
              "Practical Exercise: Bookkeeping entries + Building a P&L & a Balance Sheet (1/4)",
            time: "10:15",
          },
          {
            title: "Case Study (Part 1)",
            string: "2 questions",
          },
          {
            title:
              "Practical Exercise: Bookkeeping entries + Building a P&L & a Balance Sheet (2/4)",
            time: "07:39",
          },
          {
            title: "Case Study (Part 2)",
            string: "2 questions",
          },
          {
            title: "Completing 50% of the course",
            time: "00:39",
          },
          {
            title:
              "Practical Exercise: Bookkeeping entries + Building a P&L & a Balance Sheet (3/4)",
            time: "07:21",
          },
          {
            title: "Case Study (Part 3)",
            string: "2 questions",
          },
          {
            title:
              "Practical Exercise: Bookkeeping entries + Building a P&L & a Balance Sheet (4/4)",
            time: "08:08",
          },
          {
            title:
              "Course Challenge - Build a P&L and Balance Sheet from scratch",
            time: "01:14",
          },
          {
            title: "CPE Review Quiz: Section 5",
            string: "3 questions",
          },
        ],
      },
      {
        title:
          "Preparing a Cash Flow Statement: Understanding Cash Flow Analysis",
        content_list: [
          {
            title: "The Importance of Timing: Revenue and Expense Recognition",
            time: "01:08",
          },
          {
            title:
              "The Difference Between Cash Flow and Revenue-A Must Know For Every Entrepreneur",
            time: "05:34",
          },
          {
            title:
              "The Timing of Payments: Here Is How Many Business Owners Improve Their Cash Flow",
            time: "03:12",
          },
          {
            title:
              "The Four Types of Accruals Arising in Accounting Transactions",
            time: "06:15",
          },
          {
            title: "CPE Review Quiz: Section 6",
            string: "2 questions",
          },
          {
            title:
              "Calculating Cash Flows - Understand if a business makes or burns cash",
            time: "02:38",
          },
          {
            title: "The Three Parts of Cash Flow Statement explained",
            time: "02:11",
          },
          {
            title: "Cash Flow Computations - The Direct Method",
            time: "02:10",
          },
          {
            title: "Cash Flow Computations - The Indirect Method",
            time: "03:32",
          },
          {
            title: "Calculating Cash Flow in Practice: A Complete Example",
            time: "07:31",
          },
          {
            title: "CPE Review Quiz: Section 7",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Introduction to Financial Reporting",
        content_list: [
          {
            title: "Introduction to Financial Statements",
            time: "02:21",
          },
          {
            title:
              "Let's Open P&G's 2021 Financial Report and Take a Look At It Together",
            time: "06:13",
          },
          {
            title: "Who Prepares and Verifies the Annual Report?",
            time: "02:27",
          },
          {
            title: "CPE Review Quiz: Section 8",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Financial Statement Analysis: Science and Practice",
        content_list: [
          {
            title:
              "The Essence of Financial Statement Analysis: Four Key Dimensions",
            time: "01:48",
          },
          {
            title: "Calculating Subtotals, Totals and Year-on-Year Growth",
            time: "02:07",
          },
          {
            title:
              "Key Mechanics of Financial Statement Analysis: Performing a Meaningful Analysis",
            time: "02:43",
          },
          {
            title:
              "Using Different P&L and Balance Sheet Formats + Horizontal and Vertical Analysis",
            time: "03:33",
          },
          {
            title:
              'An Introduction to the "Days" Methodology: Understanding Working Capital Trends',
            time: "02:05",
          },
          {
            title:
              "Financial Ratios Every Investor Should Use: Understanding Financial Ratios",
            time: "08:21",
          },
          {
            title: "Quiz Number 6",
            string: "2 questions",
          },
          {
            title:
              "Practical Exercise: Analyzing P&G's Business Through Financial Ratios (1 of 2)",
            time: "06:38",
          },
          {
            title:
              "Practical Exercise: Analyzing P&G's Business Through Financial Ratios (2 of 2)",
            time: "04:55",
          },
          {
            title: "Financial statement analysis",
            string: "1 question",
          },
          {
            title: "CPE Review Quiz: Section 9",
            string: "2 questions",
          },
        ],
      },
      {
        title: "Financial Statement Analysis - Tesla \u0415xercise",
        content_list: [
          {
            title: "What you will see next in this section",
            time: "01:02",
          },
          {
            title: "How to download Tesla's historical financials",
            time: "02:37",
          },
          {
            title: "Calculating and analyzing growth and profitability ratios",
            time: "10:38",
          },
          {
            title: "Calculating and analyzing liquidity ratios",
            time: "06:23",
          },
          {
            title: "Calculating and analyzing solvency ratios",
            time: "02:22",
          },
          {
            title: "Assessment 10",
            string: "3 questions",
          },
          {
            title: "Congratulations!",
            time: "01:02",
          },
          {
            title: "CPE Qualified Assessment",
            string: "10 questions",
          },
        ],
      },
    ],
  },
  {
    id: 1018,
    subcategory_id: 302,
    title: "Blockchain and Bitcoin Fundamentals",
    img: images.blockchain_and_bitcoin_fundamentals,
    instructor: "George Levy",
    price: 4490.0,
    description:
      "Learn the key elements of blockchain and Bitcoin in this bestselling video course and accompanying PDF glossary.",
    ratings: {
      stars: 4.6,
      count: 40713,
    },
    students: 122661,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Have a strong understanding of what blockchain technology is.",
      "Understand what Bitcoin is and how it works.",
      "Know and use key vocabulary and concepts commonly used when discussing blockchain and Bitcoin in business situations.",
    ],
    course_content: [
      {
        title: "Your Blockchain and Bitcoin Journey Begins Here",
        content_list: [
          {
            title: "Introduction",
            time: "01:22",
          },
          {
            title: "A Quick Personal Message",
            time: "00:28",
          },
          {
            title: "Welcome and How to Communicate With Me",
            time: "01:49",
          },
          {
            title: "Bitcoin: A Moment in Time",
            time: "01:20",
          },
          {
            title: "Join the Course Community",
            time: "00:35",
          },
        ],
      },
      {
        title: "Blockchain and Bitcoin Fundamentals",
        content_list: [
          {
            title: "What is a Blockchain?",
            time: "04:22",
          },
          {
            title: "What is a Blockchain?",
            string: "3 questions",
          },
          {
            title: "Important Message About Udemy Reviews",
            time: "01:00",
          },
          {
            title: "What is Bitcoin?",
            time: "03:49",
          },
          {
            title: "What is Bitcoin?",
            string: "4 questions",
          },
          {
            title: "The Role of Bitcoin Miners",
            time: "03:46",
          },
          {
            title: "Demo: Hash Functions",
            time: "03:21",
          },
          {
            title: "Demo: Block Hashes",
            time: "03:21",
          },
          {
            title: "Demo: How Block Hashes Work in a Blockchain",
            time: "06:17",
          },
          {
            title: "Demo: How a Distributed Blockchain Works",
            time: "04:57",
          },
          {
            title: "Cryptographic Hashing",
            string: "3 questions",
          },
          {
            title: "The Four Components of Bitcoin",
            time: "05:00",
          },
          {
            title: "The Coinbase Transaction",
            time: "06:08",
          },
          {
            title: "Virtual Field Trip: The Bitcoin Blockchain",
            time: "05:46",
          },
          {
            title: "Key Concepts in Bitcoin",
            time: "05:27",
          },
          {
            title: "Key Concepts in Bitcoin",
            string: "3 questions",
          },
          {
            title: "The Birth of Bitcoin",
            time: "02:40",
          },
          {
            title: "The Value of Blockchain",
            time: "04:27",
          },
          {
            title: "The Value of Blockchain: Cryptocurrency",
            time: "04:48",
          },
          {
            title: "The Value of Blockchain: Smart Contracts",
            time: "04:05",
          },
          {
            title: "The Value of Blockchain: Digital Tokens",
            time: "04:23",
          },
          {
            title: "The Value of Blockchain: DAOs and DACs",
            time: "04:11",
          },
          {
            title: "Business Use Cases of Blockchain Beyond Bitcoin",
            time: "04:36",
          },
          {
            title: "Limitations of Blockchain Technology",
            time: "03:20",
          },
          {
            title: "Common Misconceptions About Blockchain and Bitcoin",
            time: "05:09",
          },
          {
            title: "What is Bitcoin Cash?",
            time: "10:50",
          },
          {
            title: "On Forks, Transactions and Segregated Witness (SegWit)",
            time: "11:42",
          },
          {
            title: "How Many Transactions Are There in a Block?",
            time: "08:02",
          },
          {
            title: "The Controlled Supply of Bitcoin",
            time: "06:09",
          },
          {
            title: "On the Future of Bitcoin Mining",
            time: "03:01",
          },
          {
            title: "Important Dates in Bitcoin History",
            time: "01:42",
          },
          {
            title: "On Merkle Trees",
            time: "05:54",
          },
          {
            title: "Blockchain and Bitcoin Quick Knowledge Check",
            string: "5 questions",
          },
          {
            title: "What sets the price of a bitcoin?",
            time: "01:46",
          },
          {
            title: "Additional Fun Ways of Looking at Bitcoin at Work",
            time: "08:51",
          },
        ],
      },
      {
        title: "Getting Started with Bitcoin",
        content_list: [
          {
            title: "Getting Started With Bitcoin",
            time: "03:18",
          },
          {
            title: "Choose your Bitcoin wallet",
            time: "09:16",
          },
          {
            title: "Sending and Receiving bitcoins",
            time: "07:07",
          },
          {
            title: "Store Your bitcoins Safely",
            time: "07:25",
          },
          {
            title: "Converting Your bitcoins to Fiat Currency",
            time: "05:20",
          },
        ],
      },
      {
        title: "Review and Free Resources",
        content_list: [
          {
            title: "Course Review and Valuable Free Resources",
            time: "01:59",
          },
          {
            title: "Bonus Lecture",
            time: "01:19",
          },
        ],
      },
    ],
  },
  {
    id: 1019,
    subcategory_id: 302,
    title: "Cryptocurrency Investment Course 2024: Fund your Retirement!",
    img: images.cryptocurrency_investment_course_2024_fund_your_retirement,
    instructor: "Suppoman \u2122",
    price: 4790.0,
    description:
      "Complete A-Z Guide to Crypto, Bitcoin, Blockchain, Ethereum, Altcoins, Metaverse, NFT, DeFi coins for your retirement!",
    ratings: {
      stars: 4.6,
      count: 21455,
    },
    students: 101172,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Go from Beginner to Advanced in Cryptocurrency, gain financial freedom and escape recession in today's economic collapse!",
      "Learn from 6 courses in 1, across 13 hours: Research & Investing fundamentals, Bitcoin, Ethereum, Early coin investing, DeFi, Metaverse & NFTs",
      "Learn the best of what I've learnt and done to be 13,000,000% up on my initial investment",
      "Consistently build your Retirement fund with my profit taking strategy",
      "Identify Cryptocurrencies with great potential, make huge gains and stick with it for the long-term",
      "Learn how to exploit DeFi & Yield Farming for high profitability in 2022",
      "Learn about Blockchain, SHA256 hashing and mining to fully understand how Crypto is the future!",
      "Set yourself up easily with a Simple Wallet for storing coins safely, while buying and sending Bitcoin to the exchange to buy alt coins",
      "Become a member of the Number 1 retail investors Cryptocurrency Exchange so that you can buy and sell each day!",
      "Know which coins to buy when day trading and which coins have potential for huge long-term profits!",
      "Learn how to use centralised exchanges like Binance & Coinbase, and decentralised exchanges like Uniswap and Pancakeswap",
      "Getting set up and walkthrough of IDO Launchpads like Polkastarter/BSCPad",
    ],
    course_content: [
      {
        title:
          "Welcome to Cryptocurrency Investing! Here is what you will learn!",
        content_list: [
          {
            title:
              "Thank you for learning Cryptocurrencies with me! Here is what you will learn",
            time: "04:38",
          },
          {
            title:
              "Crypto Terminology Essentials to get you started quickly (Part 1)",
            time: "15:27",
          },
          {
            title: "Crypto Terminology Essentials (Part 2)",
            time: "13:21",
          },
        ],
      },
      {
        title: "Why Crypto is the Future of Money, Today!",
        content_list: [
          {
            title: "Why Crypto is the Financial System of the future!",
            time: "07:51",
          },
          {
            title: "Why the time is Now to get into Cryptocurrencies!",
            time: "04:54",
          },
        ],
      },
      {
        title:
          "The Best of what I have learned and implemented in Cryptocurrency",
        content_list: [
          {
            title: "This sites will be your 'Go-to' site in Cryptocurrency!",
            time: "11:05",
          },
          {
            title: "How to buy Cryptocurrencies right now!",
            time: "18:08",
          },
          {
            title:
              "The Harsh Reality of Cryptocurrency, but how to win in the end!",
            time: "07:03",
          },
          {
            title: "Cryptocurrency is ALL about this!",
            time: "11:19",
          },
          {
            title:
              "What drives the price of Bitcoin & Altcoins - use this to your advantage!",
            time: "32:01",
          },
          {
            title: "You must do this for the best results!",
            time: "05:41",
          },
          {
            title: "This approach is CRUCIAL when Cryptocurrency Investing.",
            time: "05:50",
          },
          {
            title: "When is the ideal time to buy and exit Cryptocurrencies?",
            time: "09:51",
          },
          {
            title:
              "The GOLDEN WAY to spot when it's time to sell & time to buy!",
            time: "13:40",
          },
          {
            title:
              "How to maximise your gains using Bitcoin & Altcoins together",
            time: "09:32",
          },
          {
            title: "Going 'All In' on a single Altcoin!",
            time: "09:21",
          },
          {
            title:
              "How to spot the Hidden value for big multipliers in a future gem!",
            time: "19:52",
          },
          {
            title:
              "What are the most profitable Cryptocurrencies to invest in?",
            time: "12:09",
          },
          {
            title:
              "The absolute BEST way to invest in a coin for the long-term!",
            time: "11:34",
          },
          {
            title:
              "Crypto Top VCs List January 2024 (Look out for these in projects)",
            time: "00:46",
          },
          {
            title: "MOST Important lesson to Build your Retirement Fund",
            time: "09:33",
          },
          {
            title: "This FREE tool will turbocharge your Crypto Research!",
            time: "03:27",
          },
          {
            title: "List of All websites/graphs covered in this section",
            time: "00:15",
          },
        ],
      },
      {
        title:
          "Course Update (Bear Market 2022/2023): All-Time Best Time to Buy Crypto?",
        content_list: [
          {
            title: "Cryptos are 90%+ down, and why this is a great thing!",
            time: "06:22",
          },
          {
            title: "Global financial markets are in meltdown, and why?",
            time: "07:48",
          },
          {
            title: "2023 could be worse for Bitcoin and Altcoins - why?!",
            time: "05:58",
          },
          {
            title:
              "My personal strategy Investing in Cryptocurrencies for next 6-8 months!",
            time: "05:40",
          },
          {
            title: "Investment Spreadsheet Resource - June 2023",
            time: "00:09",
          },
          {
            title:
              "When will a Bull Market Return, and why it could be the BIGGEST of all-time!",
            time: "07:43",
          },
          {
            title:
              "Dollar Cost Average Buying will get you BEST returns in bull market!",
            time: "06:12",
          },
          {
            title:
              "100X Simplified: What Cryptos to invest in during a Bear Market!",
            time: "09:23",
          },
          {
            title:
              "Analysis of Best Performing Coins in 2021: What to look for when Investing?",
            time: "12:09",
          },
          {
            title: "Analysis Spreadsheet In Full",
            time: "00:04",
          },
          {
            title: "NEW Coins for the next bull market with metrics!",
            time: "00:11",
          },
        ],
      },
      {
        title: "Understanding Cryptocurrency, Bitcoin & Alt coins!",
        content_list: [
          {
            title: "What are Cryptocurrencies?",
            time: "04:16",
          },
          {
            title: "What is Bitcoin, and why do you need to know about it?",
            time: "02:34",
          },
          {
            title:
              "What is Ethereum (King of Alt Coins) and why is it No2 most valuable?",
            time: "03:49",
          },
          {
            title: "Why Ethereum Will be the Number 1 Crypto in 3 years",
            time: "07:40",
          },
          {
            title: "What are Alt coins?",
            time: "02:39",
          },
          {
            title: "MULTIPLIERS: Why you are here!",
            time: "02:57",
          },
          {
            title: "The HARSH RISKS of Cryptocurrency!",
            time: "04:45",
          },
          {
            title: "Fiat Vs Satoshi Prices of Cryptocurrencies",
            time: "05:41",
          },
          {
            title: "Coins Vs Tokens - What is the difference?",
            time: "02:43",
          },
          {
            title: "Millionaires have been made with these Crypto Coins!",
            time: "05:41",
          },
        ],
      },
      {
        title:
          "Understanding 'Blockchain' - Why this Tech could replace banks!",
        content_list: [
          {
            title: "What is a Blockchain?",
            time: "04:36",
          },
          {
            title:
              "What is the SHA256 Algorithm and how does it secure Bitcoin?",
            time: "03:45",
          },
          {
            title: "How does Bitcoin Mining work?",
            time: "04:49",
          },
        ],
      },
      {
        title: "Let's get started buying your first Cryptocurrency!",
        content_list: [
          {
            title: "All you need to get Set-up!",
            time: "02:17",
          },
          {
            title:
              "Getting Started: Buy Bitcoin with your normal currency (USD, GBP, EURO etc)",
            time: "08:35",
          },
          {
            title:
              "How to buy any of the 25,000+ Cryptocurrencies that exist right now",
            time: "02:10",
          },
          {
            title: "Sending your money to an exchange to buy Cryptocurrency",
            time: "09:55",
          },
          {
            title:
              "2021 Update: You can now buy more Altcoins with Fiat on Coinbase!",
            time: "04:40",
          },
          {
            title:
              "2021 Update: You can now buy Altcoins with fiat Directly on Binance",
            time: "04:09",
          },
          {
            title: "Buying your First Cryptocurrency!",
            time: "10:01",
          },
          {
            title: "Use your first coin for learning the industry!",
            time: "02:59",
          },
          {
            title: "Selling your First Cryptocurrency!",
            time: "01:18",
          },
          {
            title:
              "Uniswap Tutorial - use Decentralised Exchanges to buy exclusive Cryptocurrencies",
            time: "14:25",
          },
          {
            title:
              "Pancakeswap Tutorial - how to buy exciting Binance smart chain coins!",
            time: "07:36",
          },
        ],
      },
      {
        title:
          "Fundamental Analysis 101 - How to evaluate if a Crypto can make you rich!",
        content_list: [
          {
            title:
              "Fundamental Analysis overview - What are the most important criteria",
            time: "04:39",
          },
          {
            title:
              "Case Study - How I made a 1000x using Fundamental Analysis!",
            time: "06:21",
          },
          {
            title:
              "Trending coins you should be looking at for Long-Term Investing!",
            time: "08:41",
          },
          {
            title:
              "Fundamental #1 - This is pivotal to make massive multipliers in Crypto",
            time: "07:12",
          },
          {
            title:
              "Fundamental #2 - Imperative to fulfil investment potential!",
            time: "03:58",
          },
          {
            title:
              "Fundamental #3 - Without this the token will fail and you will lose!",
            time: "03:33",
          },
          {
            title:
              "Fundamental #4 - This will turbocharge the growth of your investment!",
            time: "04:17",
          },
          {
            title:
              "Fundamental #5 - Secret way to check if you're project is Undervalued!",
            time: "04:58",
          },
          {
            title:
              "Fundamental #6 - If this is not Positive, your investment could be destroyed!",
            time: "06:39",
          },
          {
            title: "How to Calculate Multiplier potential of an Investment!",
            time: "06:13",
          },
          {
            title: "Fundamentals Form: Download this to upload your own info",
            time: "00:12",
          },
          {
            title: "List of Websites used in this section",
            time: "00:14",
          },
        ],
      },
      {
        title: "IDO Investing & Launchpads - Get the Best Gains in Crypto!",
        content_list: [
          {
            title: "Launchpads: How you could achieve 100-1000x with IDOs!",
            time: "06:09",
          },
          {
            title: "Why launchpads get you in at the Best Prices!",
            time: "07:17",
          },
          {
            title: "What's the best launchpads to make MULTIPLIERS for you?",
            time: "05:44",
          },
          {
            title:
              "My Strategy: How I have achieved 15 100x gains with Launchpads!",
            time: "04:06",
          },
          {
            title: "What are the Drawbacks of Launchpads?",
            time: "06:08",
          },
          {
            title: "What is the launchpad process of investing in an IDO?",
            time: "05:50",
          },
          {
            title: "BSCPad Walkthough - How to make 329x with BSCPad!",
            time: "19:30",
          },
          {
            title: "How to use Launchpads to exploit key narratives?",
            time: "01:07",
          },
          {
            title: "How to use Launchpads to build your fortune!",
            time: "08:04",
          },
          {
            title: "What to learn from the Best Gains made in IDO launches",
            time: "08:12",
          },
        ],
      },
      {
        title: "Metaverse Cryptocurrencies Are Making Millionaires!",
        content_list: [
          {
            title: "Metaverse - how I have made 7 figures in a few months!",
            time: "02:29",
          },
          {
            title: "What is the Metaverse?",
            time: "06:53",
          },
          {
            title: "Why are Metaverse Cryptos so hot?",
            time: "05:20",
          },
          {
            title: "Best Gainers made from Crypto, and why?",
            time: "05:16",
          },
          {
            title: "How to make Millionaire Money with Metaverse!",
            time: "06:52",
          },
        ],
      },
    ],
  },
  {
    id: 1020,
    subcategory_id: 303,
    title: "The Complete Investment Banking Course 2024",
    img: images.the_complete_investment_banking_course_2024,
    instructor: "365 Careers",
    price: 3290.0,
    description:
      "The #1 Course to Land a Job in Investment Banking. IPOs, Bonds, M&amp;A, Trading, LBOs, Valuation: Everything  is included!",
    ratings: {
      stars: 4.6,
      count: 35752,
    },
    students: 157188,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Start a career in Investment Banking or Private Equity",
      "Pass investment banking interviews",
      "Build financial models from scratch (shown step-by-step)",
      "Build valuation models \u2013 DCF, LBO and multiples",
      "Have solid financial and business acumen",
      "Take your career to the next level!",
      "Tell the story of how investment banking services first appeared",
      "Understand the difference between investment and commercial banking",
      "Explain the mechanics of an Initial Public Offering",
      "Understand how pricing is determined in an IPO",
      "Draw an IPO timetable",
      "Understand why companies go public",
      "Explain the mechanics of a bond offering",
      "Understand how pricing is determined in a bond offering",
      "Draw a bond offering timetable",
      "Understand why companies raise public debt",
      "Explain loan syndication and who participates in the syndicate",
      "Understand securitization and explain why banks use securitization",
      "Learn why companies buy other companies",
      "Identify successful M&A transactions",
      "Explain the deal lifecycle",
      "Tell the difference between Financial and Corporate buyers",
      "Describe the different payment options in an M&A deal",
      "Understand the essence of restructuring services",
      "Learn about the different ways to restructure a company",
      "Become familiar with trading and brokerage and the securities traded on Financial Markets",
      "Understand asset management services",
      "Be able to describe asset management vehicles and expected rates of return",
      "Calculate a company\u2019s cost of debt, cost of equity, and WACC",
      "Perform LBO valuation",
      "Understand the rationale behind Leveraged Buyout deals",
      "Be able to tell who carries out LBO deals and why they can be very profitable",
      "After this course, you will have the skills to start a successful career in Investment Banking and Corporate Finance",
    ],
    course_content: [
      {
        title: "Welcome! Course Introduction",
        content_list: [
          {
            title: "What does the course cover?",
            time: "03:35",
          },
          {
            title: "Download all course materials",
            time: "00:09",
          },
        ],
      },
      {
        title: "The ascendance of investment banking services",
        content_list: [
          {
            title: "The importance of history, name, tradition, and reputation",
            time: "01:38",
          },
          {
            title: "The rise of investment banking services",
            time: "04:16",
          },
          {
            title:
              "What is the difference between commercial and investment banking?",
            time: "01:46",
          },
          {
            title: "Why do universal banks have a competitive advantage?",
            time: "03:41",
          },
          {
            title:
              "Intrinsic conflicts of interest and the role of Chinese walls",
            time: "02:40",
          },
          {
            title: "Quiz #1",
            string: "2 questions",
          },
          {
            title: "Historical M&A waves",
            time: "05:24",
          },
          {
            title: "Three of the most important IPOs in history",
            time: "04:40",
          },
        ],
      },
      {
        title: "The four main areas of investment banking activity",
        content_list: [
          {
            title: "Capital markets \u2013 raising equity and debt capital",
            time: "06:45",
          },
          {
            title: "Advisory \u2013 M&A and Restructuring services",
            time: "07:47",
          },
          {
            title:
              "Trading and Brokerage \u2013 trading with financial securities",
            time: "03:12",
          },
          {
            title:
              "Asset management \u2013 the ability to use money to make more money",
            time: "02:54",
          },
          {
            title: "Quiz #2",
            string: "9 questions",
          },
        ],
      },
      {
        title: "Strategies pursued by investment banks",
        content_list: [
          {
            title: "Strategies pursued by investment banks",
            time: "04:01",
          },
          {
            title: "Relationship vs transaction-based banking",
            time: "04:44",
          },
          {
            title: "The accidental investment banker - Book recommendation",
            time: "01:01",
          },
        ],
      },
      {
        title: "Capital markets \u2013 Equity capital markets",
        content_list: [
          {
            title: "Why would a company want to go public?",
            time: "03:12",
          },
          {
            title: "Who are the investors in an IPO?",
            time: "04:04",
          },
          {
            title: "Coming up with a share price",
            time: "04:13",
          },
          {
            title: "Technical details of IPO pricing",
            time: "02:42",
          },
          {
            title: "IPO share allocation",
            time: "04:07",
          },
          {
            title: "What does an IPO timetable look like?",
            time: "05:24",
          },
          {
            title: "The IPO syndicate \u2013 members and responsibilities",
            time: "03:22",
          },
          {
            title: "Fee distribution among investment banks",
            time: "03:55",
          },
          {
            title: "Post-IPO stabilization: Definition of long/short position",
            time: "03:17",
          },
          {
            title: "Post-IPO stabilization: Applying the Greenshoe option",
            time: "04:44",
          },
          {
            title: "Greenshoe explained \u2013 Practical example",
            time: "02:11",
          },
          {
            title:
              "Other ways to place equity capital \u2013 SEOs and private placements",
            time: "01:43",
          },
          {
            title: "Facebook's IPO - Case study",
            time: "05:40",
          },
          {
            title: "Course Challenge #1 - IPO",
            time: "00:43",
          },
          {
            title: "Quiz #3",
            string: "4 questions",
          },
        ],
      },
      {
        title: "Capital Markets \u2013 Debt Capital Markets",
        content_list: [
          {
            title: "The four different types of bonds",
            time: "03:25",
          },
          {
            title: "Why issue a bond?",
            time: "04:00",
          },
          {
            title: "The mechanics of a bond offering. Process description",
            time: "04:04",
          },
          {
            title: "Junk bonds",
            time: "02:57",
          },
          {
            title: "What is securitization and why can it be useful?",
            time: "03:48",
          },
          {
            title: "Securitization - explained",
            time: "02:43",
          },
          {
            title: "Asset-backed securities: An example of securitization",
            time: "05:03",
          },
          {
            title:
              "Loan syndication \u2013 a preferred instrument for most banks nowadays",
            time: "02:13",
          },
          {
            title: "Project finance",
            time: "05:46",
          },
          {
            title: "Course challenge #2 - Debt offerings",
            time: "00:41",
          },
          {
            title: "Quiz #4",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Advisory services \u2013 Mergers and acquisitions",
        content_list: [
          {
            title: "Why acquire another company?",
            time: "05:12",
          },
          {
            title: "Describing the typical deal lifecycles and buyer companies",
            time: "03:57",
          },
          {
            title: "The three types of M&A processes",
            time: "03:54",
          },
          {
            title: "M&A private deals",
            time: "02:03",
          },
          {
            title: "M&A auctions",
            time: "04:12",
          },
          {
            title: "M&A of listed firms",
            time: "03:39",
          },
          {
            title: "Valuation of target companies",
            time: "04:09",
          },
          {
            title: "Payment options in M&A deals",
            time: "04:19",
          },
          {
            title: "Financial vs. Corporate buyers",
            time: "02:36",
          },
          {
            title: "Course challenge #3 - M&A",
            time: "00:47",
          },
          {
            title: "Quiz #5",
            string: "3 questions",
          },
        ],
      },
      {
        title: "Advisory services \u2013 Restructuring",
        content_list: [
          {
            title: "Restructuring services \u2013 why and when",
            time: "02:59",
          },
          {
            title: "Prioritization of restructuring efforts",
            time: "06:08",
          },
          {
            title: "Course Challenge #4 - Restructuring",
            time: "00:41",
          },
          {
            title: "Quiz #6",
            string: "2 questions",
          },
        ],
      },
      {
        title: "Trading and Brokerage",
        content_list: [
          {
            title: "The Trading and Brokerage division",
            time: "03:18",
          },
          {
            title: "Types of securities traded",
            time: "04:34",
          },
          {
            title: "Proprietary trading vs principal investments",
            time: "01:12",
          },
          {
            title: "The advent of algorithmic-driven trading",
            time: "03:16",
          },
          {
            title: "Quiz #7",
            string: "2 questions",
          },
        ],
      },
      {
        title: "Asset management",
        content_list: [
          {
            title: "Why hire Investment banks as asset managers?",
            time: "02:44",
          },
          {
            title: "A risk-return comparison of different investments",
            time: "03:12",
          },
          {
            title: "Private equity funds",
            time: "07:16",
          },
          {
            title: "Quiz #8",
            string: "1 question",
          },
        ],
      },
    ],
  },
  {
    id: 1021,
    subcategory_id: 303,
    title: "Finance for Non-Finance: Learn Quick and Easy",
    img: images.finance_for_non_finance_learn_quick_and_easy,
    instructor: "Anthony Jameson",
    price: 2790.0,
    description:
      "Obtain Suplemental Skills to Get a Raise, Better Job or Improve Your Own Business",
    ratings: {
      stars: 4.5,
      count: 14843,
    },
    students: 39173,
    lastUpdated: "Last updated 2/2016",
    what_you_will_learn: [
      "Identify problems in your company",
      "Improve performance of your business",
      "Understand the economic substance of projects you are engaged in",
      "Make well-informed economic decisions",
      "Able to weigh benefits against costs.",
      "Understand the numbers in the financial statements of any company",
      "Have more complete picture of your company and its competitors",
    ],
    course_content: [
      {
        title: "Course Introduction",
        content_list: [
          {
            title: "Course Introduction",
            time: "02:11",
          },
        ],
      },
      {
        title: "Introduction to Finance",
        content_list: [
          {
            title: "The Benefits of Financial Literacy",
            time: "02:10",
          },
          {
            title: "What is Finance",
            time: "01:37",
          },
        ],
      },
      {
        title: "Accounting and Financial Statements",
        content_list: [
          {
            title: "Every Business Has to Account for Its Operations",
            time: "03:46",
          },
          {
            title: "Financial Statements: the Balance Sheet",
            time: "03:35",
          },
          {
            title: "Business Start-Up",
            time: "02:25",
          },
          {
            title: "Practical Task 1",
            time: "1 page",
          },
          {
            title: "Practical Task 1: Explanation",
            time: "04:29",
          },
          {
            title: "Financial Statements: the Income Statement",
            time: "02:37",
          },
          {
            title: "Business Start-Up (continued)",
            time: "03:45",
          },
          {
            title: "Does Profit = Money?",
            time: "02:58",
          },
          {
            title: "Financial Statements: the Cash Flow",
            time: "04:32",
          },
          {
            title: "Business Start-Up (continued)",
            time: "02:43",
          },
          {
            title: "Practical Task 2",
            time: "1 page",
          },
          {
            title: "Practical Task 2: Explanation",
            time: "01:28",
          },
          {
            title: "Test 1: Accounting and Financial Statements",
            string: "14 questions",
          },
        ],
      },
      {
        title: "Financial Analysis (Ratios)",
        content_list: [
          {
            title: "Financial Ratios",
            time: "03:14",
          },
          {
            title: "Practical Task 3",
            time: "3 pages",
          },
          {
            title:
              "Practical Task 3: Explanation (+Business Start-Up continued)",
            time: "03:58",
          },
          {
            title: "Lender vs. Equity Investor: Risks and Rewards Rule",
            time: "01:46",
          },
          {
            title:
              "Analyze the Financial Statements of Apple, Facebook and Ford",
            time: "05:39",
          },
          {
            title: "More Financial Ratios",
            time: "01:48",
          },
          {
            title: "Stock Market Valuation Analysis (Apple, Facebook and Ford)",
            time: "03:10",
          },
          {
            title: "Test 2: Financial Analysis",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Budgeting",
        content_list: [
          {
            title: "Discovering Budget: Substance and Purpose",
            time: "03:31",
          },
          {
            title: "Budget Types: Incremental, Zero-Based, Rolling",
            time: "05:12",
          },
          {
            title: "Budgeting Process: From Goal to Budget Approval",
            time: "08:32",
          },
          {
            title:
              "Budgetary Control: What To Do After the Budget is Finalized",
            time: "01:47",
          },
          {
            title: "Cost Management: Direct vs. Overhead",
            time: "03:00",
          },
          {
            title: "Cost Management: Fixed vs. Variable",
            time: "03:08",
          },
          {
            title: "Test 3: Budgeting",
            string: "10 questions",
          },
          {
            title: "Summary",
            time: "00:27",
          },
          {
            title: "Take This Handout",
            time: "48 pages",
          },
        ],
      },
    ],
  },
  {
    id: 1022,
    subcategory_id: 401,
    title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
    img: images.ultimate_aws_certified_solutions_architect_associate_saa_c03,
    instructor:
      "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
    price: 3290.0,
    description:
      "Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!",
    ratings: {
      stars: 4.7,
      count: 209431,
    },
    students: 905684,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions Architect Associate Certification",
      "Full Practice Exam with Explanations included!",
      "All 800+ slides available as downloadable PDF",
      "Perform Real-World Solution Architecture on AWS",
      "Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)",
      "Learn the Serverless Fundamentals (Lambda, DynamoDB, Cognito, API Gateway)",
      "Analyze 10+ Solution Architectures (traditional & serverless)",
      "Understand the Well Architected Framework, Disaster Recovery",
      "Master all the differences of Databases on AWS",
      "Secure your entire AWS Cloud using KMS, IAM Policies & SSM",
    ],
    course_content: [
      {
        title: "Introduction - AWS Certified Solutions Architect Associate",
        content_list: [
          {
            title:
              "Course Introduction - AWS Certified Solutions Architect Associate",
            time: "03:50",
          },
          {
            title:
              "PLEASE READ: Lectures you can skip if you took a course from me before",
            time: "01:20",
          },
          {
            title: "Creating an AWS Account",
            time: "01:48",
          },
          {
            title: "AWS Account Activation Troubleshooting",
            time: "02:05",
          },
          {
            title: "Important Message",
            time: "00:59",
          },
          {
            title: "About your instructor",
            time: "02:45",
          },
        ],
      },
      {
        title: "Code & Slides Download",
        content_list: [
          {
            title: "Slides and Code Download",
            time: "00:15",
          },
        ],
      },
      {
        title: "Getting started with AWS",
        content_list: [
          {
            title: "AWS Cloud Overview - Regions & AZ",
            time: "08:08",
          },
          {
            title: "Tour of the AWS Console & Services in AWS",
            time: "03:52",
          },
          {
            title: "About the UI changes in the course",
            time: "01:50",
          },
        ],
      },
      {
        title: "IAM & AWS CLI",
        content_list: [
          {
            title: "IAM Introduction: Users, Groups, Policies",
            time: "03:22",
          },
          {
            title: "IAM Users & Groups Hands On",
            time: "06:23",
          },
          {
            title: "IAM Policies",
            time: "02:50",
          },
          {
            title: "IAM Policies Hands On",
            time: "08:01",
          },
          {
            title: "IAM MFA Overview",
            time: "04:18",
          },
          {
            title: "IAM MFA Hands On",
            time: "04:05",
          },
          {
            title: "AWS Access Keys, CLI and SDK",
            time: "04:03",
          },
          {
            title: "AWS CLI Setup on Windows",
            time: "01:45",
          },
          {
            title: "AWS CLI Setup on Mac OS X",
            time: "01:28",
          },
          {
            title: "AWS CLI Setup on Linux",
            time: "01:30",
          },
          {
            title: "AWS CLI Hands On",
            time: "03:50",
          },
          {
            title: "AWS CloudShell: Region Availability",
            time: "00:12",
          },
          {
            title: "AWS CloudShell",
            time: "03:53",
          },
          {
            title: "IAM Roles for AWS Services",
            time: "01:39",
          },
          {
            title: "IAM Roles Hands On",
            time: "02:05",
          },
          {
            title: "IAM Security Tools",
            time: "00:54",
          },
          {
            title: "IAM Security Tools Hands On",
            time: "02:23",
          },
          {
            title: "IAM Best Practices",
            time: "01:29",
          },
          {
            title: "IAM Summary",
            time: "01:05",
          },
          {
            title: "IAM & AWS CLI Quiz",
            string: "9 questions",
          },
        ],
      },
      {
        title: "EC2 Fundamentals",
        content_list: [
          {
            title: "AWS Budget Setup",
            time: "05:11",
          },
          {
            title: "EC2 Basics",
            time: "05:08",
          },
          {
            title:
              "Create an EC2 Instance with EC2 User Data to have a Website Hands On",
            time: "13:48",
          },
          {
            title: "EC2 Instance Types Basics",
            time: "05:51",
          },
          {
            title: "Security Groups & Classic Ports Overview",
            time: "07:26",
          },
          {
            title: "Security Groups Hands On",
            time: "04:45",
          },
          {
            title: "SSH Overview",
            time: "02:47",
          },
          {
            title: "How to SSH using Linux or Mac",
            time: "07:05",
          },
          {
            title: "How to SSH using Windows",
            time: "06:08",
          },
          {
            title: "How to SSH using Windows 10",
            time: "05:01",
          },
          {
            title: "SSH Troubleshooting",
            time: "01:23",
          },
          {
            title: "EC2 Instance Connect",
            time: "03:15",
          },
          {
            title: "EC2 Instance Roles Demo",
            time: "04:19",
          },
          {
            title: "EC2 Instance Purchasing Options",
            time: "09:48",
          },
          {
            title: "Spot Instances & Spot Fleet",
            time: "09:41",
          },
          {
            title: "EC2 Instances Launch Types Hands On",
            time: "08:52",
          },
          {
            title: "EC2 Fundamentals Quiz",
            string: "12 questions",
          },
        ],
      },
      {
        title: "EC2 - Solutions Architect Associate Level",
        content_list: [
          {
            title: "Private vs Public vs Elastic IP",
            time: "04:42",
          },
          {
            title: "Private vs Public vs Elastic IP Hands On",
            time: "05:19",
          },
          {
            title: "EC2 Placement Groups",
            time: "06:06",
          },
          {
            title: "EC2 Placement Groups - Hands On",
            time: "01:42",
          },
          {
            title: "Elastic Network Interfaces (ENI) - Overview",
            time: "02:15",
          },
          {
            title: "Elastic Network Interfaces (ENI) - Hands On",
            time: "05:23",
          },
          {
            title: "ENI - Extra Reading",
            time: "00:21",
          },
          {
            title: "EC2 Hibernate",
            time: "03:12",
          },
          {
            title: "EC2 Hibernate - Hands On",
            time: "04:07",
          },
          {
            title: "EC2 SAA Level Quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "EC2 Instance Storage",
        content_list: [
          {
            title: "EBS Overview",
            time: "04:57",
          },
          {
            title: "EBS Hands On",
            time: "05:34",
          },
          {
            title: "EBS Snapshots",
            time: "02:08",
          },
          {
            title: "EBS Snapshots - Hands On",
            time: "03:38",
          },
          {
            title: "AMI Overview",
            time: "02:45",
          },
          {
            title: "AMI Hands On",
            time: "04:59",
          },
          {
            title: "EC2 Instance Store",
            time: "02:47",
          },
          {
            title: "EBS Volume Types",
            time: "05:32",
          },
          {
            title: "EBS Multi-Attach",
            time: "01:45",
          },
          {
            title: "EBS Encryption",
            time: "03:47",
          },
          {
            title: "Amazon EFS",
            time: "05:12",
          },
          {
            title: "Amazon EFS - Hands On",
            time: "12:38",
          },
          {
            title: "EFS vs EBS",
            time: "02:11",
          },
          {
            title: "EBS & EFS - Section Cleanup",
            time: "01:31",
          },
          {
            title: "EC2 Data Management Quiz",
            string: "9 questions",
          },
        ],
      },
      {
        title: "High Availability and Scalability: ELB & ASG",
        content_list: [
          {
            title: "High Availability and Scalability",
            time: "05:05",
          },
          {
            title: "Elastic Load Balancing (ELB) Overview",
            time: "06:15",
          },
          {
            title: "Note: About the Classic Load Balancer (CLB)",
            time: "00:12",
          },
          {
            title: "Application Load Balancer (ALB)",
            time: "05:49",
          },
          {
            title: "Application Load Balancer (ALB) - Hands On - Part 1",
            time: "08:34",
          },
          {
            title: "Application Load Balancer (ALB) - Hands On - Part 2",
            time: "05:37",
          },
          {
            title: "Network Load Balancer (NLB)",
            time: "03:35",
          },
          {
            title: "Network Load Balancer (NLB) - Hands On",
            time: "06:03",
          },
          {
            title: "Gateway Load Balancer (GWLB)",
            time: "03:47",
          },
          {
            title: "Elastic Load Balancer - Sticky Sessions",
            time: "05:41",
          },
          {
            title: "Elastic Load Balancer - Cross Zone Load Balancing",
            time: "05:53",
          },
          {
            title: "Elastic Load Balancer - SSL Certificates",
            time: "06:04",
          },
          {
            title: "Elastic Load Balancer - SSL Certificates - Hands On",
            time: "01:59",
          },
          {
            title: "Elastic Load Balancer - Connection Draining",
            time: "02:22",
          },
          {
            title: "Auto Scaling Groups (ASG) Overview",
            time: "04:42",
          },
          {
            title: "Auto Scaling Groups Hands On",
            time: "09:10",
          },
          {
            title: "Auto Scaling Groups - Scaling Policies",
            time: "05:00",
          },
          {
            title: "Auto Scaling Groups - Scaling Policies Hands On",
            time: "09:15",
          },
          {
            title: "High Availability & Scalability Quiz",
            string: "21 questions",
          },
        ],
      },
      {
        title: "AWS Fundamentals: RDS + Aurora + ElastiCache",
        content_list: [
          {
            title: "Amazon RDS Overview",
            time: "03:46",
          },
          {
            title: "RDS Read Replicas vs Multi AZ",
            time: "07:22",
          },
          {
            title: "Amazon RDS Hands On",
            time: "10:30",
          },
          {
            title: "RDS Custom for Oracle and Microsoft SQL Server",
            time: "01:49",
          },
          {
            title: "Amazon Aurora",
            time: "06:29",
          },
          {
            title: "Amazon Aurora - Hands On",
            time: "08:22",
          },
          {
            title: "Amazon Aurora - Advanced Concepts",
            time: "05:42",
          },
          {
            title: "RDS & Aurora - Backup and Monitoring",
            time: "05:36",
          },
          {
            title: "RDS  Security",
            time: "02:32",
          },
          {
            title: "RDS Proxy",
            time: "04:32",
          },
          {
            title: "ElastiCache Overview",
            time: "04:21",
          },
          {
            title: "ElastiCache Hands On",
            time: "04:34",
          },
          {
            title: "ElastiCache for Solution Architects",
            time: "03:00",
          },
          {
            title: "List of Ports to be familiar with",
            time: "00:29",
          },
          {
            title: "RDS, Aurora, & ElastiCache Quiz",
            string: "25 questions",
          },
        ],
      },
      {
        title: "Route 53",
        content_list: [
          {
            title: "What is a DNS ?",
            time: "06:24",
          },
          {
            title: "Route 53 Overview",
            time: "06:18",
          },
          {
            title: "Route 53 - Registering a domain",
            time: "03:24",
          },
          {
            title: "Route 53 - Creating our first records",
            time: "03:56",
          },
          {
            title: "Route 53 - EC2 Setup",
            time: "05:40",
          },
          {
            title: "Route 53 - TTL",
            time: "05:28",
          },
          {
            title: "Route 53 CNAME vs Alias",
            time: "07:00",
          },
          {
            title: "Routing Policy - Simple",
            time: "04:05",
          },
          {
            title: "Routing Policy - Weighted",
            time: "05:02",
          },
          {
            title: "Routing Policy - Latency",
            time: "04:39",
          },
          {
            title: "Route 53 - Health Checks",
            time: "04:54",
          },
          {
            title: "Route 53 - Health Checks Hands On",
            time: "04:39",
          },
          {
            title: "Routing Policy - Failover",
            time: "04:12",
          },
          {
            title: "Routing Policy - Geolocation",
            time: "04:14",
          },
          {
            title: "Routing Policy - Geoproximity",
            time: "03:21",
          },
          {
            title: "Routing Policy - IP-based",
            time: "01:45",
          },
          {
            title: "Routing Policy - Multi Value",
            time: "03:42",
          },
          {
            title: "3rd Party Domains & Route 53",
            time: "02:24",
          },
          {
            title: "Route 53 - Section Cleanup",
            time: "01:21",
          },
          {
            title: "Route 53 Quiz",
            string: "7 questions",
          },
        ],
      },
    ],
  },
  {
    id: 1023,
    subcategory_id: 401,
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
    img: images.new_ultimate_aws_certified_cloud_practitioner_clf_c02,
    instructor:
      "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
    price: 3790.0,
    description:
      "Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!",
    ratings: {
      stars: 4.7,
      count: 186924,
    },
    students: 874096,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "FULLY UPDATED FOR CLF-C01 & CLF-C02: Pass the AWS Certified Cloud Practitioner Certification",
      "Full Practice Exam with Explanations included!",
      "Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)",
      "All 300+ slides available as downloadable PDF",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "Course Introduction",
            time: "04:42",
          },
          {
            title: "Creating an AWS Account",
            time: "01:48",
          },
          {
            title: "AWS Account Activation Troubleshooting",
            time: "02:05",
          },
          {
            title: "Important Message",
            time: "00:59",
          },
          {
            title: "About your instructor",
            time: "02:45",
          },
        ],
      },
      {
        title: "Code & Slides Download",
        content_list: [
          {
            title: "Code & Slides Download",
            time: "00:07",
          },
        ],
      },
      {
        title: "What is Cloud Computing?",
        content_list: [
          {
            title: "Traditional IT Overview",
            time: "06:29",
          },
          {
            title: "What is Cloud Computing?",
            time: "07:52",
          },
          {
            title: "The Different Types of Cloud Computing",
            time: "03:23",
          },
          {
            title: "AWS Cloud Overview",
            time: "08:08",
          },
          {
            title: "Tour of the Console & Services in AWS",
            time: "03:52",
          },
          {
            title: "About the UI changes in the course",
            time: "01:50",
          },
          {
            title: "Shared Responsibility Model & AWS Acceptable Policy",
            time: "01:36",
          },
          {
            title: "What is Cloud Computing Quiz",
            string: "13 questions",
          },
        ],
      },
      {
        title: "IAM - Identity and Access Management",
        content_list: [
          {
            title: "IAM Introduction: Users, Groups, Policies",
            time: "03:22",
          },
          {
            title: "IAM Users & Groups Hands On",
            time: "06:23",
          },
          {
            title: "IAM Policies",
            time: "02:50",
          },
          {
            title: "IAM Policies Hands On",
            time: "08:01",
          },
          {
            title: "IAM MFA Overview",
            time: "04:18",
          },
          {
            title: "IAM MFA Hands On",
            time: "04:05",
          },
          {
            title: "AWS Access Keys, CLI and SDK",
            time: "04:03",
          },
          {
            title: "AWS CLI Setup on Windows",
            time: "01:45",
          },
          {
            title: "AWS CLI Setup on Mac",
            time: "01:28",
          },
          {
            title: "AWS CLI Setup on Linux",
            time: "01:30",
          },
          {
            title: "AWS CLI Hands On",
            time: "03:50",
          },
          {
            title: "AWS CloudShell",
            time: "03:53",
          },
          {
            title: "IAM Roles for AWS Services",
            time: "01:39",
          },
          {
            title: "IAM Roles Hands On",
            time: "02:05",
          },
          {
            title: "IAM Security Tools",
            time: "00:54",
          },
          {
            title: "IAM Security Tools Hands On",
            time: "02:23",
          },
          {
            title: "IAM Best Practices",
            time: "01:29",
          },
          {
            title: "Shared Responsibility Model for IAM",
            time: "01:31",
          },
          {
            title: "IAM Summary",
            time: "01:05",
          },
          {
            title: "Identity and Access Management Quiz",
            string: "9 questions",
          },
        ],
      },
      {
        title: "EC2 - Elastic Compute Cloud",
        content_list: [
          {
            title: "AWS Budget Setup",
            time: "05:11",
          },
          {
            title: "EC2 Basics",
            time: "05:08",
          },
          {
            title:
              "Create an EC2 Instance with EC2 User Data to have a Website Hands On",
            time: "13:48",
          },
          {
            title: "EC2 Instance Types Basics",
            time: "05:51",
          },
          {
            title: "Security Groups & Classic Ports Overview",
            time: "07:26",
          },
          {
            title: "Security Groups Hands On",
            time: "04:45",
          },
          {
            title: "SSH Overview",
            time: "02:47",
          },
          {
            title: "How to SSH using Linux or Mac",
            time: "07:05",
          },
          {
            title: "How to SSH using Windows",
            time: "06:08",
          },
          {
            title: "How to SSH using Windows 10",
            time: "05:01",
          },
          {
            title: "SSH Troubleshooting",
            time: "01:23",
          },
          {
            title: "EC2 Instance Connect",
            time: "03:15",
          },
          {
            title: "EC2 Instance Roles Demo",
            time: "04:19",
          },
          {
            title: "EC2 Instance Purchasing Options",
            time: "09:48",
          },
          {
            title: "Shared Responsibility Model for EC2",
            time: "01:25",
          },
          {
            title: "EC2 Summary",
            time: "01:30",
          },
          {
            title: "EC2 Quiz",
            string: "7 questions",
          },
        ],
      },
      {
        title: "EC2 Instance Storage",
        content_list: [
          {
            title: "EBS Overview",
            time: "04:57",
          },
          {
            title: "About EBS Multi-Attach",
            time: "00:24",
          },
          {
            title: "EBS Hands On",
            time: "05:34",
          },
          {
            title: "EBS Snapshots Overview",
            time: "02:40",
          },
          {
            title: "EBS Snapshots Hands On",
            time: "03:38",
          },
          {
            title: "AMI Overview",
            time: "02:45",
          },
          {
            title: "AMI Hands On",
            time: "04:59",
          },
          {
            title: "EC2 Image Builder Overview",
            time: "02:37",
          },
          {
            title: "EC2 Instance Store",
            time: "02:47",
          },
          {
            title: "EFS Overview",
            time: "04:21",
          },
          {
            title: "Shared Responsibility Model for EC2 Storage",
            time: "01:44",
          },
          {
            title: "Amazon FSx Overview",
            time: "03:04",
          },
          {
            title: "EC2 Instance Storage Summary",
            time: "01:32",
          },
          {
            title: "Section Cleanup",
            time: "01:34",
          },
          {
            title: "EC2 Instance Storage Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "ELB & ASG - Elastic Load Balancing & Auto Scaling Groups",
        content_list: [
          {
            title: "High Availability, Scalability, Elasticity",
            time: "06:23",
          },
          {
            title: "Elastic Load Balancing (ELB) Overview",
            time: "06:31",
          },
          {
            title: "Application Load Balancer (ALB) Hands On",
            time: "08:34",
          },
          {
            title: "Auto Scaling Groups (ASG) Overview",
            time: "03:02",
          },
          {
            title: "Auto Scaling Groups (ASG) Hands On",
            time: "08:28",
          },
          {
            title: "Auto Scaling Groups (ASG) Strategies",
            time: "02:54",
          },
          {
            title: "Section Cleanup",
            time: "01:09",
          },
          {
            title: "ELB & ASG Summary",
            time: "01:57",
          },
          {
            title: "ELB & ASG Quiz",
            string: "9 questions",
          },
        ],
      },
      {
        title: "Amazon S3",
        content_list: [
          {
            title: "S3 Overview",
            time: "05:06",
          },
          {
            title: "S3 Hands On",
            time: "05:55",
          },
          {
            title: "S3 Security: Bucket Policy",
            time: "05:03",
          },
          {
            title: "S3 Security: Bucket Policy Hands On",
            time: "03:32",
          },
          {
            title: "S3 Website Overview",
            time: "01:07",
          },
          {
            title: "S3 Website Hands On",
            time: "01:58",
          },
          {
            title: "S3 Versioning Overview",
            time: "01:13",
          },
          {
            title: "S3 Versioning Hands On",
            time: "04:17",
          },
          {
            title: "S3 Replication Overview",
            time: "01:25",
          },
          {
            title: "S3 Replication Hands On",
            time: "04:52",
          },
          {
            title: "S3 Storage Classes Overview",
            time: "06:12",
          },
          {
            title: "S3 Storage Classes Hands On",
            time: "03:37",
          },
          {
            title: "S3 Encryption",
            time: "01:01",
          },
          {
            title: "IAM Access Analyzer for S3",
            time: "01:02",
          },
          {
            title: "Shared Responsibility Model for S3",
            time: "01:07",
          },
          {
            title: "AWS Snow Family Overview",
            time: "10:38",
          },
          {
            title: "AWS Snow Family Hands On",
            time: "02:54",
          },
          {
            title: "AWS Snowball Edge - Pricing",
            time: "01:39",
          },
          {
            title: "Storage Gateway Overview",
            time: "02:38",
          },
          {
            title: "S3 Summary",
            time: "02:01",
          },
          {
            title: "S3 Quiz",
            string: "10 questions",
          },
        ],
      },
      {
        title: "Databases & Analytics",
        content_list: [
          {
            title: "Databases Introduction",
            time: "05:43",
          },
          {
            title: "RDS & Aurora Overview",
            time: "05:01",
          },
          {
            title: "RDS Hands On",
            time: "06:51",
          },
          {
            title: "RDS Deployments Options",
            time: "03:41",
          },
          {
            title: "ElastiCache Overview",
            time: "02:03",
          },
          {
            title: "DynamoDB Overview",
            time: "03:01",
          },
          {
            title: "DynamoDB Hands On",
            time: "03:06",
          },
          {
            title: "DynamoDB Global Tables",
            time: "01:17",
          },
          {
            title: "Redshift Overview",
            time: "02:44",
          },
          {
            title: "EMR Overview",
            time: "01:21",
          },
          {
            title: "Athena Overview",
            time: "01:20",
          },
          {
            title: "QuickSight Overview",
            time: "00:56",
          },
          {
            title: "DocumentDB Overview",
            time: "01:15",
          },
          {
            title: "Neptune Overview",
            time: "01:23",
          },
          {
            title: "Timestream Overview",
            time: "01:11",
          },
          {
            title: "QLDB Overview",
            time: "02:03",
          },
          {
            title: "Managed Blockchain Overview",
            time: "00:49",
          },
          {
            title: "Glue Overview",
            time: "02:05",
          },
          {
            title: "DMS Overview",
            time: "01:18",
          },
          {
            title: "Databases & Analytics Summary",
            time: "02:38",
          },
          {
            title: "Databases & Analytics Quiz",
            string: "17 questions",
          },
        ],
      },
      {
        title: "Other Compute Services: ECS, Lambda, Batch, Lightsail",
        content_list: [
          {
            title: "What is Docker?",
            time: "03:27",
          },
          {
            title: "ECS, Fargate & ECR Overview",
            time: "03:01",
          },
          {
            title: "Serverless Introduction",
            time: "02:05",
          },
          {
            title: "Lambda Overview",
            time: "06:22",
          },
          {
            title: "Lambda Hands On",
            time: "09:55",
          },
          {
            title: "API Gateway Overview",
            time: "01:28",
          },
          {
            title: "Batch Overview",
            time: "03:08",
          },
          {
            title: "Lightsail Overview",
            time: "01:47",
          },
          {
            title: "Lightsail Hands On",
            time: "04:37",
          },
          {
            title: "Other Compute - Summary",
            time: "02:42",
          },
          {
            title: "Other Compute Services Quiz",
            string: "11 questions",
          },
        ],
      },
    ],
  },
  {
    id: 1024,
    subcategory_id: 401,
    title: "AZ-900: Microsoft Azure Fundamentals Exam Prep - OCT 2023",
    img: images.az_900_microsoft_azure_fundamentals_exam_prep_oct_2023,
    instructor: "Scott Duffy  \u2022 1.000.000+ Students",
    price: 3290.0,
    description:
      "Learn the fundamentals of Azure, and get certified, with this complete beginner's AZ-900 course, includes practice test!",
    ratings: {
      stars: 4.6,
      count: 97072,
    },
    students: 408120,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "Pass the Microsoft AZ-900 Azure Fundamentals test",
      "Earn the Microsoft Certified Azure Fundamentals badge",
      "Learn the main concepts of cloud computing",
      "Understand what services and solutions Azure offers",
      "Includes latest changes! Always up-to-date.",
    ],
    course_content: [
      {
        title: "AZ-900 Course",
        content_list: [
          {
            title: "Introduction",
            time: "06:14",
          },
          {
            title: "LIVE DEMO: A quick look into Azure",
            time: "09:28",
          },
          {
            title: "AZ-900 Exam Requirements",
            time: "04:02",
          },
          {
            title: "Udemy Video Player",
            time: "01:05",
          },
          {
            title: "FAQs",
            time: "01:00",
          },
        ],
      },
      {
        title: "AZ-900 - Describe Cloud Computing",
        content_list: [
          {
            title: "What is Cloud Computing?",
            time: "07:29",
          },
          {
            title: "Shared Responsibility Model",
            time: "05:43",
          },
          {
            title: "Public Cloud, Private Cloud, Hybrid Cloud",
            time: "04:26",
          },
          {
            title: "Cloud Pricing",
            time: "07:01",
          },
          {
            title: "LIVE DEMO: Pricing Calculator",
            time: "03:33",
          },
          {
            title: "Section 2 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Benefits of Cloud Computing",
        content_list: [
          {
            title: "High Availability Benefit of Cloud Computing",
            time: "12:10",
          },
          {
            title: "Scalability Benefit of Cloud Computing",
            time: "09:55",
          },
          {
            title: "Elasticity Benefit of Cloud Computing",
            time: "05:35",
          },
          {
            title: "Reliability Benefit of Cloud Computing",
            time: "04:21",
          },
          {
            title: "Predictability Benefit of Cloud Computing",
            time: "03:24",
          },
          {
            title: "Security Benefit of Cloud Computing",
            time: "06:07",
          },
          {
            title: "Governance Benefit of Cloud Computing",
            time: "04:29",
          },
          {
            title: "Managability Benefit of Cloud Computing",
            time: "04:22",
          },
          {
            title: "Section 3 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Cloud Service Types",
        content_list: [
          {
            title: "Cloud Service Types",
            time: "09:19",
          },
          {
            title: "Serverless",
            time: "06:28",
          },
          {
            title: "Section 4 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Core Architectural Components of Azure",
        content_list: [
          {
            title: "Regions, Region Pairs, Sovereign Regions",
            time: "15:56",
          },
          {
            title: "Availability Zones and Data Centers",
            time: "06:39",
          },
          {
            title: "Resources and Resource Groups",
            time: "05:02",
          },
          {
            title: "Subscriptions",
            time: "03:38",
          },
          {
            title: "Management Groups",
            time: "02:06",
          },
          {
            title: "Section 5 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Azure Compute and Networking Services",
        content_list: [
          {
            title: "Azure Compute services",
            time: "11:13",
          },
          {
            title: "Azure Functions",
            time: "04:15",
          },
          {
            title: "Azure Networking services",
            time: "05:23",
          },
          {
            title: "Network Peering",
            time: "06:20",
          },
          {
            title: "Public and Private Endpoints",
            time: "03:58",
          },
          {
            title: "Section 6 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Azure Compute Demo",
        content_list: [
          {
            title: "LIVE DEMO: Creating a Virtual Machine (VM)",
            time: "08:47",
          },
          {
            title: "LIVE DEMO: Connecting to a Virtual Machine",
            time: "07:20",
          },
          {
            title: "LIVE DEMO: Creating Azure App Services / Web Apps",
            time: "05:02",
          },
          {
            title: "LIVE DEMO: Azure App Services In Action",
            time: "06:48",
          },
          {
            title: "LIVE DEMO: Creating Azure Functions",
            time: "09:20",
          },
          {
            title: "LIVE DEMO: Kubernetes and Azure Container Instances",
            time: "06:21",
          },
          {
            title: "LIVE DEMO: Azure Container Apps",
            time: "04:27",
          },
          {
            title: "Reminder: How to Delete Azure Resources",
            time: "01:30",
          },
        ],
      },
      {
        title: "AZ-900 - Azure Storage",
        content_list: [
          {
            title: "Overview of Azure Storage",
            time: "05:46",
          },
          {
            title: "LIVE DEMO: Create an Unmanaged Storage Account",
            time: "09:46",
          },
          {
            title: "LIVE DEMO: Upload Files to a Storage Account",
            time: "07:09",
          },
          {
            title: "LIVE DEMO: Azure Storage Explorer & Storage Browser",
            time: "02:41",
          },
          {
            title: "AZCOPY",
            time: "07:31",
          },
          {
            title: "Azure File Sync",
            time: "04:03",
          },
          {
            title: "Azure Migrate",
            time: "02:22",
          },
          {
            title: "Azure Data Box",
            time: "04:47",
          },
          {
            title: "Section 8 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Identity, Access and Security",
        content_list: [
          {
            title: "Identity and Azure Active Directory",
            time: "09:42",
          },
          {
            title:
              "Benefits of Microsoft Entra ID (formerly Azure Active Directory (Azure AD))",
            time: "04:03",
          },
          {
            title: "Authenication vs Authorization",
            time: "02:47",
          },
          {
            title: "Azure AD Conditional Access",
            time: "03:39",
          },
          {
            title: "Multi-Factor Authentication (MFA or 2FA)",
            time: "03:58",
          },
          {
            title: "Passwordless",
            time: "04:46",
          },
          {
            title: "Role-Based Access Control (RBAC)",
            time: "06:12",
          },
          {
            title: "Zero-Trust Model of Security",
            time: "08:29",
          },
          {
            title: "Defense in Depth",
            time: "05:40",
          },
          {
            title: "Microsoft Defender for Cloud",
            time: "03:09",
          },
          {
            title: "Section 9 Quiz",
            string: "3 questions",
          },
        ],
      },
      {
        title: "AZ-900 - Cost Management in Azure",
        content_list: [
          {
            title: "Factors that Affect Cost",
            time: "06:50",
          },
          {
            title: "Azure Pricing Calculator",
            time: "05:18",
          },
          {
            title: "Total Cost of Ownership Calculator",
            time: "04:35",
          },
          {
            title: "Azure Cost Management",
            time: "02:47",
          },
          {
            title: "Resource Tags",
            time: "03:53",
          },
          {
            title: "Section 10 Quiz",
            string: "3 questions",
          },
        ],
      },
    ],
  },
  {
    id: 1025,
    subcategory_id: 402,
    title: "Learn Ethical Hacking From Scratch",
    img: images.learn_ethical_hacking_from_scratch,
    instructor: "Zaid Sabih",
    price: 4790.0,
    description:
      "Become an ethical hacker that can hack like black hat hackers and secure systems like cybersecurity experts",
    ratings: {
      stars: 4.6,
      count: 120732,
    },
    students: 590576,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "145+ videos (15+ hours) to teach you ethical hacking & cybersecurity from scratch.",
      "Use 30+ hacking tools such as Metasploit, Aircrack-ng, SQLmap, etc.",
      "85+ hands-on real-life hacking examples.",
      "No prior knowledge required",
      "Hack & secure WiFi & wired networks.",
      "Hack cloud servers.",
      "Create backdoors & Hack Windows.",
      "Start from 0 up to a high-intermediate level.",
      "Discover & exploit web application vulnerabilities to hack websites.",
      "Learn Network Hacking / Penetration Testing.",
      "Learn about the different hacking fields & hackers.",
      "Install a hacking lab & needed software (on Windows, OS X and Linux).",
      "Discover vulnerabilities & exploit them to hack into servers.",
      "Hack secure systems using client-side & social engineering.",
      "Secure systems from all the attacks shown.",
      "Install & use Kali Linux - a hacking operating system.",
      "Linux basics.",
      "Linux commands",
      "How to use the Linux terminal.",
      "Network basics & how devices interact inside a network.",
      "Run attacks on networks without knowing its key.",
      "Control Wi-Fi connections without knowing the password.",
      "Create a fake Wi-Fi network with internet connection & spy on clients.",
      "Gather detailed information about networks & connected clients like their OS, ports ...etc.",
      "Crack WEP/WPA/WPA2 encryptions.",
      "ARP Spoofing / ARP Poisoning.",
      "Launch various Man In The Middle attacks.",
      "Access any account accessed by any client on the network.",
      "Sniff network traffic & analyse it to extract important info such as: passwords, cookies, urls, videos, images ..etc.",
      "Intercept network traffic & modify it on the fly.",
      "Discover devices connected to the same network.",
      "Inject Javascript in pages loaded by clients connected to the same network.",
      "Redirect DNS requests to any destination (DNS spoofing).",
      "Secure networks from the discussed attacks.",
      "Edit router settings for maximum security.",
      "Discover suspicious activities in networks.",
      "How to prevent MITM attacks.",
      "Discover open ports, installed services and vulnerabilities on computer systems.",
      "Exploit buffer over flows & code execution vulnerabilities to gain control over systems.",
      "Hack systems using client side attacks.",
      "Hack Windows using fake updates.",
      "Backdoor normal programs.",
      "Backdoor any file type such as pictures, pdf's ...etc.",
      "Gather information about people, such as emails, social media accounts, emails and friends.",
      "Hack secure systems using social engineering.",
      "Send emails from ANY email account without knowing the password for that account.",
      "Analyse malware.",
      "Manually detect undetectable malware.",
      "Read, write download, upload and execute files on compromised systems.",
      "Capture keystrikes on a compromised system.",
      "Use a compromised computer as a pivot to hack other systems.",
      "Understand how websites & web applications work.",
      "Understand how browsers communicate with websites.",
      "Gather sensitive information about websites.",
      "Discover servers, technologies & services used on target website.",
      "Discover emails & sensitive data associated with a specific website.",
      "Discover subdomains associated with a website.",
      "Discover unpublished directories & files associated with a target website.",
      "Discover websites hosted on the same server as the target website.",
      "Exploit file upload vulnerabilities to gain control over target website.",
      "Discover, exploit and fix code execution vulnerabilities.",
      "Discover, exploit & fix local file inclusion vulnerabilities.",
      "Discover, exploit & fix SQL injection vulnerabilities.",
      "Bypass login forms and login as admin using SQL injections.",
      "Exploit SQL injections to find databases, tables & sensitive data such as usernames, passwords...etc",
      "Read / Write files to the server using SQL injections.",
      "Learn the right way to write SQL queries to prevent SQL injections.",
      "Discover reflected XSS vulnerabilities.",
      "Discover Stored XSS vulnerabilities.",
      "Hook victims to BeEF using XSS vulnerabilities.",
      "Fix XSS vulnerabilities & protect yourself from them as a user.",
      "Discover MITM & ARP Spoofing attacks.",
    ],
    course_content: [
      {
        title: "Course Introduction",
        content_list: [
          {
            title: "Teaser - Hacking Windows 11 & Accessing the Webcam",
            time: "07:20",
          },
          {
            title: "Course Introduction & Overview",
            time: "02:53",
          },
          {
            title: "What Is Hacking & Why Learn It ?",
            time: "03:09",
          },
        ],
      },
      {
        title: "Setting up a Hacking Lab",
        content_list: [
          {
            title: "Lab Overview",
            time: "05:54",
          },
          {
            title: "Initial Preparation",
            time: "09:28",
          },
          {
            title: "Installing Kali Linux as a VM on Windows",
            time: "08:55",
          },
          {
            title:
              "Installing Kali Linux as a VM on Apple Computers (Intel & Apple Silicon)",
            time: "11:10",
          },
          {
            title: "Installing Kali Linux as a VM on Linux",
            time: "10:46",
          },
        ],
      },
      {
        title: "Linux Basics",
        content_list: [
          {
            title: "Basic Overview of Kali Linux",
            time: "05:10",
          },
          {
            title: "The Terminal & Linux Commands",
            time: "13:05",
          },
        ],
      },
      {
        title: "Network Hacking",
        content_list: [
          {
            title: "Introduction to Network Hacking / Penetration Testing",
            time: "02:21",
          },
          {
            title: "Networks Basics",
            time: "04:28",
          },
          {
            title: "Connecting a Wireless Adapter To Kali",
            time: "06:51",
          },
          {
            title: "What is MAC Address & How To Change It",
            time: "08:20",
          },
          {
            title: "Wireless Modes (Managed & Monitor)",
            time: "06:57",
          },
        ],
      },
      {
        title: "Network Hacking - Pre Connection Attacks",
        content_list: [
          {
            title: "Packet Sniffing Basics",
            time: "06:40",
          },
          {
            title: "WiFi Bands - 2.4Ghz & 5Ghz Frequencies",
            time: "07:54",
          },
          {
            title: "Targeted Packet Sniffing",
            time: "10:30",
          },
          {
            title:
              "Deauthentication Attack (Disconnecting Devices From Networks)",
            time: "08:09",
          },
        ],
      },
      {
        title: "Network Hacking - Gaining Access - WEP Cracking",
        content_list: [
          {
            title: "Gaining Access Introduction",
            time: "01:09",
          },
          {
            title: "Theory Behind Cracking WEP Encryption",
            time: "05:47",
          },
          {
            title: "WEP Cracking Basics",
            time: "06:17",
          },
          {
            title: "Fake Authentication Attack",
            time: "06:45",
          },
          {
            title: "ARP Request Replay Attack",
            time: "06:09",
          },
        ],
      },
      {
        title: "Network Hacking - Gaining Access - WPA / WPA2 Cracking",
        content_list: [
          {
            title: "Introduction to WPA and WPA2 Cracking",
            time: "03:42",
          },
          {
            title: "Hacking WPA & WPA2 Without a Wordlist",
            time: "08:16",
          },
          {
            title: "Capturing The Handshake",
            time: "06:49",
          },
          {
            title: "Creating a Wordlist",
            time: "07:33",
          },
          {
            title: "Cracking WPA & WPA2 Using a Wordlist Attack",
            time: "06:26",
          },
        ],
      },
      {
        title: "Network Hacking - Gaining Access - Security",
        content_list: [
          {
            title: "Securing Your Network From Hackers",
            time: "02:03",
          },
          {
            title: "Configuring Wireless Settings for Maximum Security",
            time: "08:05",
          },
        ],
      },
      {
        title: "Network Hacking - Post Connection Attacks",
        content_list: [
          {
            title: "Introduction to Post-Connection Attacks",
            time: "02:10",
          },
        ],
      },
      {
        title:
          "Network Hacking - Post-Connection Attacks - Information Gathering",
        content_list: [
          {
            title: "Installing Windows As a Virtual Machine",
            time: "05:43",
          },
          {
            title: "Installing Windows as a Virtual Machine on Apple Silicon",
            time: "04:53",
          },
          {
            title: "Discovering Devices Connected to the Same Network",
            time: "08:04",
          },
          {
            title:
              "Gathering Sensitive Info About Connected Devices (Device Name, Ports, etc.)",
            time: "06:45",
          },
          {
            title:
              "Gathering More Sensitive Info (Running Services, Operating System, etc.)",
            time: "08:08",
          },
        ],
      },
    ],
  },
  {
    id: 1026,
    subcategory_id: 402,
    title: "The Complete Cyber Security Course : Hackers Exposed!",
    img: images.the_complete_cyber_security_course_hackers_exposed,
    instructor: "Nathan House",
    price: 4790.0,
    description:
      "Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking,  Learn IT Security &  INFOSEC",
    ratings: {
      stars: 4.5,
      count: 50918,
    },
    students: 279532,
    lastUpdated: "Last updated 12/2021",
    what_you_will_learn: [
      "An advanced practical skillset in defeating all online threats - advanced hackers, trackers, malware and all Internet nastiness including mitigating government spying and mass surveillance.",
      "Start a career in cyber security. Become a cyber security specialist.",
      "The very latest up-to-date information and methods.",
      "We cover operating system security, privacy, and patching - On Windows 7, Windows 8, Windows 10, MacOS and Linux.",
      "Explore the threat landscape - Darknets, dark markets, zero day vulnerabilities, exploit kits, malware, phishing and much more.",
      "You will master encryption in an easy to follow crash course.",
      "Go in-depth into security through physical and virtual isolation and compartmentalization. Covering sandboxes, application isolation, virtual machines, Whonix and Qubes OS.",
      "You will learn about nation state secret tracking and hacking infrastructure.",
      "A certificate of completion is available signed by the instructor Nathan House so CPE credits can be claimed. An off-site sign-up is required to provide your details for this optional certificate.",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "Welcome and Introduction to the Instructor!",
            time: "02:06",
          },
          {
            title: "Security Quick Win!",
            time: "11:59",
          },
          {
            title: "Goals and Learning Objectives - Volume 1",
            time: "02:30",
          },
          {
            title: "Target Audience",
            time: "01:54",
          },
          {
            title: "Study Recommendations",
            time: "05:16",
          },
          {
            title: "Course updates",
            time: "00:40",
          },
          {
            title: "Cyber Security and Ethical Hacking Careers",
            time: "03:45",
          },
        ],
      },
      {
        title: "know Yourself - The Threat and Vulnerability Landscape",
        content_list: [
          {
            title: "Theory and Practical",
            time: "01:08",
          },
          {
            title: "Goals and Learning Objectives",
            time: "00:41",
          },
          {
            title: "Protect What You Value",
            time: "04:36",
          },
          {
            title: "What is Privacy, Anonymity and Pseudonymity",
            time: "04:35",
          },
          {
            title: "Security, Vulnerabilities, Threats and Adversaries",
            time: "04:37",
          },
          {
            title: "Asset Selection",
            time: "03:21",
          },
          {
            title: "Threat Modeling and Risk Assessments",
            time: "07:51",
          },
          {
            title: "Security vs Privacy vs Anonymity  - Can we have it all?",
            time: "01:56",
          },
          {
            title:
              "Confidentiality, Integrity and Availability - (Security Attributes)",
            time: "09:22",
          },
          {
            title: "Defense In Depth",
            time: "01:36",
          },
          {
            title: "The Zero Trust Model",
            time: "03:40",
          },
        ],
      },
      {
        title:
          "Know Your Enemy  - The Current Threat and Vulnerability Landscape",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:43",
          },
          {
            title: "Why You Need Security \u2013 The Value Of A Hack",
            time: "05:14",
          },
          {
            title: "The Top 3 Things You Need To Stay Safe Online",
            time: "01:23",
          },
          {
            title:
              "Security Bugs and Vulnerabilities - The Vulnerability Landscape",
            time: "09:35",
          },
          {
            title: "Hackers, crackers and cyber criminals",
            time: "02:32",
          },
          {
            title: "Malware, viruses, rootkits and RATs",
            time: "06:52",
          },
          {
            title: "Spyware, Adware, Scareware, PUPs & Browser hijacking",
            time: "04:44",
          },
          {
            title: "What is Phishing, Vishing and SMShing",
            time: "15:06",
          },
          {
            title: "Spamming & Doxing",
            time: "03:15",
          },
          {
            title: "Social engineering - Scams, cons, tricks and fraud",
            time: "05:31",
          },
          {
            title: "CPU Hijackers - Crypto Mining Malware and Cryptojackers",
            time: "08:42",
          },
          {
            title: "Darknets, Dark Markets and Exploit kits",
            time: "08:01",
          },
          {
            title: "Governments, spies and secret stuff part I",
            time: "05:13",
          },
          {
            title: "Governments, spies and secret stuff part II",
            time: "10:35",
          },
          {
            title:
              "Regulating encryption, mandating insecurity & legalizing spying",
            time: "14:37",
          },
          {
            title: "Trust & Backdoors",
            time: "10:14",
          },
          {
            title: "Censorship",
            time: "02:24",
          },
          {
            title: "Cyber Threat Intelligence \u2013 Stay Informed",
            time: "01:12",
          },
        ],
      },
      {
        title: "Encryption Crash Course",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:24",
          },
          {
            title: "Symmetric Encryption",
            time: "09:54",
          },
          {
            title: "Asymmetric Encryption",
            time: "10:17",
          },
          {
            title: "Hash Functions",
            time: "06:32",
          },
          {
            title: "Digital Signatures",
            time: "04:45",
          },
          {
            title:
              "Secure Sockets Layer (SSL) and Transport layer security (TLS)",
            time: "13:26",
          },
          {
            title: "SSL Stripping",
            time: "12:02",
          },
          {
            title: "HTTPS (HTTP Secure)",
            time: "06:59",
          },
          {
            title: "Digital Certificates",
            time: "06:20",
          },
          {
            title: "Certificate Authorities and HTTPS",
            time: "14:07",
          },
          {
            title: "End-to-End Encryption (E2EE)",
            time: "01:57",
          },
          {
            title: "Steganography",
            time: "08:12",
          },
          {
            title: "How Security and Encryption is Really Attacked",
            time: "02:42",
          },
        ],
      },
      {
        title: "Setting up a Testing Environment Using Virtual Machines (Lab)",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:27",
          },
          {
            title:
              "Introduction to Setting up a Testing Environment Using Virtual Machines",
            time: "10:01",
          },
          {
            title: "Vmware",
            time: "10:55",
          },
          {
            title: "Virtual box",
            time: "12:09",
          },
          {
            title: "Kali Linux 2018",
            time: "04:11",
          },
        ],
      },
      {
        title:
          "Operating System Security & Privacy (Windows vs Mac OS X vs Linux)",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:37",
          },
          {
            title: "Security Features and Functionality",
            time: "05:56",
          },
          {
            title: "Security Bugs and Vulnerabilities",
            time: "05:31",
          },
          {
            title: "Usage Share",
            time: "05:01",
          },
          {
            title: "Windows 10 - Privacy & Tracking",
            time: "06:08",
          },
          {
            title: "Windows 10 - Disable tracking automatically",
            time: "04:42",
          },
          {
            title: "Windows 10  - Tool : Disable Windows 10 Tracking",
            time: "08:14",
          },
          {
            title: "Windows 10 \u2013 Cortana",
            time: "02:59",
          },
          {
            title: "Windows 10 \u2013 Privacy Settings",
            time: "09:40",
          },
          {
            title: "Windows 10 - WiFi Sense",
            time: "04:16",
          },
          {
            title: "Windows 7, 8 and 8.1 - Privacy & Tracking",
            time: "07:19",
          },
          {
            title: "Mac - Privacy & Tracking",
            time: "04:28",
          },
          {
            title: "Linux and Unix \u201clike\u201d Operating systems",
            time: "03:30",
          },
          {
            title: "General Use Operating Systems (Windows, MacOS and Linux)",
            time: "04:09",
          },
          {
            title:
              "General Use Operating Systems With a Security and Privacy Focus (Debian, Arch)",
            time: "05:04",
          },
          {
            title:
              "Pure Security Focused Operating Systems (QubesOS, Subgraph OS, Trisquel OS)",
            time: "02:55",
          },
          {
            title: "Anonymity Focused Operating Systems (Tails and Whonix OS)",
            time: "02:56",
          },
          {
            title:
              "Penetration Testing and Ethical Hacking Focused Operating Systems",
            time: "00:49",
          },
          {
            title:
              "Mobile Operating Systems with Security & Privacy Focus (LineageOS, Sailfish)",
            time: "02:31",
          },
          {
            title:
              "Linux - Debian 8 Jessie - Virtual box guest additions Issue",
            time: "06:26",
          },
        ],
      },
      {
        title: "Security Bugs and Vulnerabilities",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:25",
          },
          {
            title: "The Importance of Patching",
            time: "03:47",
          },
          {
            title: "Windows 7 - Auto Update",
            time: "01:15",
          },
          {
            title: "Windows 8 & 8.1 - Auto Update",
            time: "01:24",
          },
          {
            title: "Windows 10 - Auto Update",
            time: "01:25",
          },
          {
            title: "Windows - Criticality and Patch Tuesday",
            time: "03:46",
          },
          {
            title:
              "Windows 7, 8, 8.1 & 10 - Automate the pain away from patching",
            time: "08:34",
          },
          {
            title: "Linux - Debian - Patching",
            time: "10:58",
          },
          {
            title: "Mac - Patching",
            time: "06:58",
          },
          {
            title: "Firefox - Browser and extension updates",
            time: "04:23",
          },
          {
            title: "Chrome - Browser and extension updates",
            time: "01:13",
          },
          {
            title: "IE and Edge - Browser and extention updates",
            time: "00:46",
          },
          {
            title: "Auto updates - The Impact to privacy and anonymity",
            time: "01:41",
          },
        ],
      },
      {
        title: "Reducing Threat Privilege",
        content_list: [
          {
            title: "Goals and Learning Objectives - Removing Privilege",
            time: "02:53",
          },
          {
            title: "Windows 7 - Not using admin",
            time: "03:32",
          },
          {
            title: "Windows 8 and 8.1 - Not using admin",
            time: "04:14",
          },
          {
            title: "Windows 10 - Not using admin",
            time: "03:25",
          },
        ],
      },
      {
        title: "Social Engineering and Social Media Offence and Defence",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:26",
          },
          {
            title:
              "Information Disclosure and Identity Strategies for Social Media",
            time: "12:34",
          },
          {
            title: "Identify Verification and Registration",
            time: "05:05",
          },
          {
            title:
              "Behavioural Security Controls Against Social Threats (Phishing, Spam) Part 1",
            time: "07:50",
          },
          {
            title:
              "Behavioural Security Controls Against Social Threats (Phishing, Spam) Part 2",
            time: "10:22",
          },
          {
            title:
              "Technical Security Controls Against Social Threats (Phishing, Spam, Scam & Cons)",
            time: "05:02",
          },
        ],
      },
      {
        title: "Security Domains",
        content_list: [
          {
            title: "Goals and Learning Objectives",
            time: "00:20",
          },
          {
            title: "Security Domains",
            time: "10:00",
          },
        ],
      },
    ],
  },
  {
    id: 1027,
    subcategory_id: 403,
    title: "Microcontroller Embedded C Programming: Absolute Beginners",
    img: images.microcontroller_embedded_c_programming_absolute_beginners,
    instructor: "FastBit Embedded Brain Academy",
    price: 3290.0,
    description:
      "Foundation course on Embedded C programming  using STM32 Microcontroller.",
    ratings: {
      stars: 4.6,
      count: 10351,
    },
    students: 45452,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "'C' programming from scratch",
      "Data types,variables, declarations,",
      'Importance of Bit-Wise operators in "Embedded" programming',
      "Bit manipulation techniques using bit-wise operators and examples",
      "Bit extraction and working with memory mapped peripheral registers",
      "Other operators of 'C' (arithmatic, logical, relation, assignment )",
      "Functions in 'C'",
      "Implicit and explicit casting and its importance",
      "Pointers and casting",
      "Pointers arithmetic and importance of pointer datatypes",
      "Accessing memory mapped peripheral registers using pointers",
      "Structures and unions",
      "Importance of structures in peripheral register access",
      "Structure and bit fields",
      "Configuring peripheral register addresses using bit fields",
      "Structures and pointers",
      "interfacing LEDs, Keypad",
      "Const and volatile type qualifiers",
      "importance of volatile during compiler optimization",
      "const data, const pointer, cont volatile explanation with examples",
      "Importance of const",
      "Loops : for, while, do while",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "About the instructor",
            time: "00:17",
          },
          {
            title: "Programming languages for Embedded Systems",
            time: "02:40",
          },
          {
            title: "History of 'C' and standardization",
            time: "02:43",
          },
          {
            title: "Course repository",
            time: "00:02",
          },
          {
            title: "Important Note",
            time: "00:42",
          },
        ],
      },
      {
        title: "IDE installation",
        content_list: [
          {
            title: "Downloading IDE",
            time: "01:39",
          },
          {
            title: "Downloading IDE",
            time: "02:28",
          },
          {
            title: "Key features of the STM32CubeIDE",
            time: "02:08",
          },
          {
            title: "Installing STM32CubeIDE",
            time: "00:43",
          },
          {
            title: "Installing STM32CubeIDE on Linux",
            time: "02:01",
          },
          {
            title: "Installing compiler (GCC) for host",
            time: "01:43",
          },
          {
            title: "Installing compiler (GCC) for host (WINDOWS)",
            time: "03:04",
          },
          {
            title: "Installing compiler (GCC) for host (LINUX)",
            time: "01:26",
          },
          {
            title: "Installing compiler (GCC) for host (MAC)",
            time: "01:09",
          },
          {
            title: "Importing course projects in to workspace",
            time: "11:46",
          },
          {
            title: "Creating a project for the HOST",
            time: "03:41",
          },
          {
            title: "Creating a project for the Target",
            time: "04:26",
          },
          {
            title: "FPU warning fix",
            time: "00:33",
          },
          {
            title: "Hardware/Software Requirements",
            time: "00:05",
          },
          {
            title: "Meet the embedded target of this course",
            time: "03:27",
          },
        ],
      },
      {
        title: "Your first 'C' program",
        content_list: [
          {
            title: "OnlineGDB web tool",
            time: "00:57",
          },
          {
            title: "Printf and Hello World",
            time: "11:57",
          },
          {
            title: "Printf exercise solution",
            time: "03:44",
          },
          {
            title: "Escape sequences in 'C'",
            time: "03:48",
          },
          {
            title: "Printf exercise solution",
            time: "04:10",
          },
          {
            title: "Printf exercise solution",
            time: "03:31",
          },
          {
            title: "Commenting in 'C'",
            time: "03:39",
          },
        ],
      },
      {
        title: "Data types and variables",
        content_list: [
          {
            title: "Data types in 'C'",
            time: "05:09",
          },
          {
            title: "'C' Integer data types and value ranges",
            time: "05:20",
          },
          {
            title: "Char data type and variable definition",
            time: "05:39",
          },
          {
            title: "Variable definition exercise",
            time: "08:29",
          },
          {
            title: "Range calculation for 'char' data type",
            time: "07:35",
          },
          {
            title: "Integer data type 'short int' and value range",
            time: "03:05",
          },
          {
            title: "Integer data type 'int' and 'long'",
            time: "01:17",
          },
          {
            title: "Sizeof",
            time: "06:06",
          },
          {
            title: "Variables naming rules and  definition vs declaration",
            time: "09:10",
          },
          {
            title: "Declaration vs definition : An illustration",
            time: "02:49",
          },
          {
            title: "Variables scope and illustration",
            time: "09:01",
          },
          {
            title: "Variables scope and illustration contd",
            time: "04:03",
          },
          {
            title: "Summary of local and global variables",
            time: "01:03",
          },
        ],
      },
      {
        title: "Address of variable",
        content_list: [
          {
            title: "Address of variables",
            time: "04:37",
          },
          {
            title: "Address of variables contd.",
            time: "08:16",
          },
        ],
      },
      {
        title: "Storage classes",
        content_list: [
          {
            title: "Storage class specifiers in 'C'",
            time: "06:55",
          },
          {
            title: "Use cases of 'static' with variables",
            time: "06:16",
          },
          {
            title: "Use cases of 'static' with functions",
            time: "03:52",
          },
          {
            title: "'Extern' storage class specifier",
            time: "01:18",
          },
          {
            title: "ASCII codes",
            time: "06:26",
          },
        ],
      },
      {
        title: "functions",
        content_list: [
          {
            title: "Introduction to functions in 'C'",
            time: "09:51",
          },
          {
            title: "Function prototypes",
            time: "03:08",
          },
          {
            title: "Returning data from a function",
            time: "02:13",
          },
          {
            title: "Function exercise",
            time: "12:37",
          },
          {
            title: "Typecasting in 'C'",
            time: "07:45",
          },
          {
            title: "Typecasting in 'C' contd",
            time: "01:39",
          },
        ],
      },
      {
        title: "Microcontroller and Hello World",
        content_list: [
          {
            title: "Embedded - 'Hello World'",
            time: "14:06",
          },
          {
            title: "Testing printf over ARM Cortex M4  ITM+SWO line",
            time: "08:12",
          },
          {
            title: "Issues with IDE",
            time: "03:52",
          },
          {
            title: "Testing printf over OpenOCD semihosting",
            time: "05:59",
          },
          {
            title: "Run Sizeof on Embedded Target",
            time: "01:19",
          },
          {
            title: "Sizeof testing",
            time: "04:38",
          },
          {
            title: "Compiler settings on STM32CubeIDE",
            time: "04:46",
          },
        ],
      },
      {
        title: "Build process",
        content_list: [
          {
            title: "Embedded project build process",
            time: "08:38",
          },
        ],
      },
      {
        title: "Analyzing Embedded C code",
        content_list: [
          {
            title: "What is a Microcontroller ?",
            time: "13:38",
          },
          {
            title: "Code memory of the microcontroller",
            time: "04:02",
          },
          {
            title: "Code and Data of the program using memory browser",
            time: "09:32",
          },
          {
            title: "Analyzing ELF file using GNU tools",
            time: "12:08",
          },
          {
            title: "Disassembly",
            time: "09:22",
          },
          {
            title: "IDE option for Instruction level debugging",
            time: "01:00",
          },
        ],
      },
    ],
  },
  {
    id: 1028,
    subcategory_id: 403,
    title: "Arduino Step by Step: Getting Started",
    img: images.arduino_step_by_step_getting_started,
    instructor: "Dr. Peter Dalmaris",
    price: 3290.0,
    description:
      "The original comprehensive course designed for new Arduino Makers",
    ratings: {
      stars: 4.6,
      count: 7625,
    },
    students: 39359,
    lastUpdated: "Last updated 4/2023",
    what_you_will_learn: [
      "Build simple circuits around the Arduino Uno, that implement simple functions.",
      "Write simple Arduino sketches that can get sensor reading, make LEDs blink, write text on an LCD screen, read the position of a potentiometer, and much more.",
      "Understand what is the Arduino.",
      "Understand what is prototyping.",
      "Understand analog and digital inputs and outputs",
      "Understand the ways by which the Arduino can communicate with other devices",
      "Use the multimeter to measure voltage, current, resistance and continuity",
      "Use protoboards to make projects permanent",
      "be productive with the Arduino IDE, write, compile and upload sketches, install libraries",
      "Understand what is Arduino programming, it's basic concepts, structures, and keywords",
      "Detect and measure visible light, color, and ultraviolet light",
      "Measure temperature, humidity and acceleration",
      "Measure the distance between the sensor and an object in front of it",
      "Detect a person entering a room",
      "Detect a noise",
      "Make noise and play music",
      "Display text on a liquid crystal display",
      "Learn about the Arduino IDE 2.0 and the Arduino Web Editor",
    ],
    course_content: [
      {
        title: "Introduction to the course",
        content_list: [
          {
            title: "What is this course about?",
            time: "06:42",
          },
          {
            title: "Parts you will need",
            time: "18:02",
          },
          {
            title: "Tools you will need",
            time: "09:52",
          },
          {
            title: "How to get the most out of this course",
            time: "03:39",
          },
          {
            title: "Update 2022 brief",
            time: "03:03",
          },
        ],
      },
      {
        title: "Know your Arduino",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:40",
          },
          {
            title: "The Arduino Uno over the years",
            time: "13:11",
          },
          {
            title: "Getting to know the Arduino Uno: Atmega328P, USB, Shields",
            time: "11:00",
          },
          {
            title: "Getting to know the Arduino Uno: Pins, power, clock",
            time: "10:18",
          },
          {
            title: "Using the digital output pins",
            time: "13:13",
          },
          {
            title: "Using the digital input pins",
            time: "10:18",
          },
          {
            title: "Using the analog output pins",
            time: "08:15",
          },
          {
            title: "Using the analog input pins",
            time: "08:02",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Introduction to communications",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:49",
          },
          {
            title: "Serial (UART) communications",
            time: "07:43",
          },
          {
            title: "I\u00b2C (TWI) communications",
            time: "08:24",
          },
          {
            title: "SPI communications",
            time: "07:33",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Arduino boards",
        content_list: [
          {
            title: "Introduction to this section",
            time: "01:01",
          },
          {
            title: "Arduinos past and present",
            time: "12:46",
          },
          {
            title: "Classic Arduinos",
            time: "01:23",
          },
          {
            title: "Meet some members of the Arduino family",
            time: "05:10",
          },
          {
            title: "Introducing the Arduino Mega 2560",
            time: "05:14",
          },
          {
            title: "Introducing the Arduino Due",
            time: "06:53",
          },
          {
            title: "Introducing the Arduino Zero",
            time: "05:17",
          },
          {
            title: "Introducing the Arduino Pro Mini",
            time: "04:56",
          },
          {
            title: "Introducing Arduino-compatible boards",
            time: "10:42",
          },
          {
            title: "Modern Arduinos",
            time: "10:16",
          },
          {
            title: "Arduino MKR",
            time: "06:10",
          },
          {
            title: "Arduino Nano",
            time: "05:25",
          },
          {
            title: "Kits",
            time: "02:05",
          },
          {
            title: "Arduino Student Kit",
            time: "05:21",
          },
          {
            title: "Arduino Explore IoT Kit",
            time: "08:15",
          },
          {
            title: "Seeed Studio Arduino Sensor kit",
            time: "05:19",
          },
          {
            title: "DFRobot Beginner Kit for Arduino",
            time: "08:41",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Prototyping basics",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:32",
          },
          {
            title: "Using the breadboard",
            time: "13:56",
          },
          {
            title: "Using jumper wires",
            time: "07:10",
          },
          {
            title: "The absolutely essential tools",
            time: "08:01",
          },
          {
            title: "Powering your Arduino with power supplies",
            time: "04:01",
          },
          {
            title: "Using the multimeter to measure voltage",
            time: "07:26",
          },
          {
            title: "Using the multimeter to measure current",
            time: "05:28",
          },
          {
            title: "The multimeter - Resistance and continuity",
            time: "06:35",
          },
          {
            title: "The Arduino Student Kit multimeter",
            time: "23:39",
          },
          {
            title: "Introduction to soldering - the soldering iron",
            time: "11:24",
          },
          {
            title: "Soldering - preparation and using holders",
            time: "05:16",
          },
          {
            title: "Soldering - using wire cutters and fume extractor",
            time: "02:22",
          },
          {
            title: "Soldering - Simple maintenance tips for your solder iron",
            time: "03:07",
          },
          {
            title:
              "A demonstration of soldering a header onto a breakout board",
            time: "13:46",
          },
          {
            title: "An introduction to protoboards",
            time: "15:20",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "The Arduino IDE",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:46",
          },
          {
            title: "Arduino IDE 1.8",
            time: "05:24",
          },
          {
            title: "Arduino IDE 2.0",
            time: "10:24",
          },
          {
            title: "An introduction to the Arduino IDE",
            time: "08:00",
          },
          {
            title: "Getting and installing the Arduino IDE",
            time: "07:45",
          },
          {
            title: "The Arduino IDE - Understanding the Preferences pane",
            time: "18:13",
          },
          {
            title: "The Arduino IDE - Understanding the Menu items",
            time: "12:49",
          },
          {
            title: "How to upload a sketch to your Arduino",
            time: "09:36",
          },
          {
            title: "How to upload a sketch to your Arduino - For Windows users",
            time: "09:13",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Arduino programming",
        content_list: [
          {
            title: "Introduction to this section",
            time: "01:02",
          },
          {
            title: "An introduction to Arduino programming",
            time: "05:10",
          },
          {
            title: "Understand the basic parts of an Arduino sketch",
            time: "14:33",
          },
          {
            title: "Getting started with custom functions",
            time: "15:30",
          },
          {
            title: "Creating custom functions and the return keyword",
            time: "06:03",
          },
          {
            title: "Using variables",
            time: "12:26",
          },
          {
            title: "Understanding variable scope",
            time: "07:04",
          },
          {
            title: "Understanding constants",
            time: "03:33",
          },
          {
            title: 'Introduction to control structures: The "if" statement',
            time: "05:21",
          },
          {
            title: 'Introduction to control structures: The "while" statement',
            time: "03:53",
          },
          {
            title: 'Introduction to control structures: The "For" statement',
            time: "04:14",
          },
          {
            title: 'Introduction to control structures: The "Switch" statement',
            time: "04:18",
          },
          {
            title: "Digital output - how to control an LED",
            time: "14:44",
          },
          {
            title: "Digital input - how to read the state of a button",
            time: "13:50",
          },
          {
            title: "Analog input - how to read the state of a potentiometer",
            time: "09:02",
          },
          {
            title: "Analog output - how to create a fading LED",
            time: "15:06",
          },
          {
            title: "Introduction to the RGB (color) LED",
            time: "08:53",
          },
          {
            title: "Wiring the RGB LED",
            time: "13:47",
          },
          {
            title: "RGB LED: creating colors",
            time: "02:29",
          },
          {
            title: "Using a library to control an RGB LED with PWM",
            time: "16:29",
          },
          {
            title: "Learning more with the Arduino language documentation",
            time: "05:01",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Arduino programming: Arrays",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:43",
          },
          {
            title: "Introduction to Arrays",
            time: "11:07",
          },
          {
            title: "Arrays, Example 1",
            time: "12:19",
          },
          {
            title: "Arrays, Example 2",
            time: "14:07",
          },
          {
            title: "Arrays, Example 3",
            time: "05:59",
          },
          {
            title: "Arrays, Example 4",
            time: "06:47",
          },
        ],
      },
      {
        title: "Measuring light and color",
        content_list: [
          {
            title: "Introduction to this section",
            time: "00:46",
          },
          {
            title: "What is a photoresistor and how to wire it",
            time: "13:00",
          },
          {
            title:
              "How to select the appropriate fixed resistor for a photoresistor",
            time: "08:48",
          },
          {
            title: "Using the Ultra-Violet light sensor",
            time: "13:21",
          },
          {
            title: "An introduction to the RGB Color sensor",
            time: "05:47",
          },
          {
            title: "Wiring the RGB Color sensor",
            time: "12:53",
          },
          {
            title:
              "Mini project: copy a color to an RGB LED using an RGB Color sensor",
            time: "10:52",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
      {
        title: "Measuring temperature, humidity and pressure",
        content_list: [
          {
            title: "Introduction to environment sensors",
            time: "00:36",
          },
          {
            title: "Using a DHT22 sensor to measure temperature and humidity",
            time: "14:42",
          },
          {
            title: "An introduction to the Thermistor",
            time: "06:50",
          },
          {
            title: "Wiring the Thermistor",
            time: "05:59",
          },
          {
            title:
              "How to calculate the temperature from the thermistor resistance",
            time: "05:28",
          },
          {
            title: "Thermistor: getting a temperature using a library",
            time: "05:33",
          },
          {
            title:
              "Thermistor: improving the accuracy of analog readings with AREF",
            time: "04:30",
          },
          {
            title: "An introduction to measuring temperature with the TMP36",
            time: "06:28",
          },
          {
            title: "Wiring the TMP36 and a demonstration sketch",
            time: "08:20",
          },
          {
            title: "An alternate wiring of the TMP36",
            time: "07:11",
          },
          {
            title:
              "An introduction to the MCP9808 for very accurate temperature readings",
            time: "11:45",
          },
          {
            title: "MCP9808: Wiring",
            time: "02:17",
          },
          {
            title: "Using the MCP9808, demo and sketch walkthrough",
            time: "03:54",
          },
          {
            title: "MCP9808: A closer look at I2C addressing",
            time: "06:45",
          },
          {
            title:
              "An introduction to measuring barometric pressure with the BMP180",
            time: "06:28",
          },
          {
            title: "Wiring the BMP180 and first sketch walkthrough",
            time: "05:51",
          },
          {
            title: "A first demo sketch for the BMP180",
            time: "09:45",
          },
          {
            title: "A second demo sketch for the BMP180",
            time: "07:51",
          },
          {
            title: "End of section quiz",
            string: "5 questions",
          },
        ],
      },
    ],
  },
  {
    id: 1029,
    subcategory_id: 403,
    title: "PLC Fundamentals (Level I)",
    img: images.plc_fundamentals_level_i,
    instructor: "Paul Lynn",
    price: 3790.0,
    description:
      "This course will give a person with no prior experience the basic tools necessary to create a PLC program from scratch.",
    ratings: {
      stars: 4.6,
      count: 20244,
    },
    students: 65056,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "By the end of this course, you will be able to create a PLC program from scratch.",
      "The primary and overall objective of this course is to give a novice an understanding of PLC programming, ladder logic, and the inner workings of a standard HMI (Human-Machine Interface).",
      "Students will learn the difference between digital and analog signals and how to bring them into a PLC, process them, and send them back out.",

      "Students will be familiarized enough with a sufficient variety of ladder logic instructions to create a complete PLC program from scratch.",
      "Students will explore basic, standard controls techniques for things like HOA control, level control, pump control, and (on at least an introductory level) PID control loops.",
      "Students will develop an understanding of alarm and notification programming, and the relevant considerations to safety and operator usability.",
      "Students will be introduced to HMI development and given a general understanding of how an HMI program works.",
    ],
    course_content: [
      {
        title: "Introduction",
        content_list: [
          {
            title: "Course Intro: Curriculum / Objectives",
            time: "04:39",
          },
          {
            title: "Software and Course Notes",
            time: "13:53",
          },
          {
            title: "Contacting Your Instructor",
            time: "02:33",
          },
        ],
      },
      {
        title: "PLC Programming Overview",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "PLC Automation",
            time: "03:54",
          },
          {
            title: "RSLogix 500 Environment",
            time: "07:11",
          },
          {
            title:
              "Basic Functionality of a Program (Inputs, Outputs, Conversion)",
            time: "05:18",
          },
          {
            title: "PLC Programming Overview Quiz",
            string: "4 questions",
          },
          {
            title: "Section Wrap-up",
            time: "02:51",
          },
        ],
      },
      {
        title: "IO (Inputs and Outputs)",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "IO Overview",
            time: "02:05",
          },
          {
            title: "Digital IO",
            time: "02:38",
          },
          {
            title: "Analog IO",
            time: "01:49",
          },
          {
            title: "IO Modules",
            time: "02:34",
          },
          {
            title: "IO (Inputs and Outputs) Quiz",
            string: "4 questions",
          },
          {
            title: "Section Wrap-up",
            time: "01:42",
          },
        ],
      },
      {
        title: "Programming Fundamentals",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "Data Management",
            time: "07:20",
          },
          {
            title: "A Bit More on Addresses",
            time: "01:41",
          },
          {
            title: "Rungs and Branches",
            time: "04:43",
          },
          {
            title: "Conditions and Outputs (Left to Right)",
            time: "09:03",
          },
          {
            title: "XIO, XIC, OTE",
            time: "12:06",
          },
          {
            title: "OTL, OTU",
            time: "09:18",
          },
          {
            title: "ONS, OSR, OSF",
            time: "12:53",
          },
          {
            title: "TON, TOF, RTO",
            time: "14:19",
          },
          {
            title: "CTU, RES",
            time: "05:23",
          },
          {
            title: "Comparators",
            time: "08:37",
          },
          {
            title: "Mathematical Operators, CPT",
            time: "04:07",
          },
          {
            title: "SCP",
            time: "05:04",
          },
          {
            title: "A Bit More on Analog Scaling",
            time: "02:16",
          },
          {
            title: "MOV",
            time: "04:38",
          },
          {
            title: "JMP, LBL",
            time: "04:29",
          },
          {
            title: "PID (Proportional Integral Derivative) Control Loops",
            time: "09:15",
          },
          {
            title: "Programming Fundamentals Quiz",
            string: "10 questions",
          },
          {
            title: "Section Wrap-up",
            time: "03:29",
          },
        ],
      },
      {
        title: "Program Setup",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "Setup Program / Processor",
            time: "05:32",
          },
          {
            title: "Module Configurations",
            time: "10:23",
          },
          {
            title: "Scaling / Resolution",
            time: "08:32",
          },
          {
            title: "Function Files",
            time: "06:15",
          },
          {
            title: "Program Files",
            time: "05:13",
          },
          {
            title: "Program Setup Quiz",
            string: "7 questions",
          },
          {
            title: "Section Wrap-up",
            time: "01:54",
          },
        ],
      },
      {
        title: "Intermission",
        content_list: [
          {
            title: "Relax and Unwind a Little - Clear Your Head",
            time: "00:27",
          },
        ],
      },
      {
        title: "IO Programming",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "Programming Digital IO",
            time: "17:47",
          },
          {
            title: "A Bit More on Digital Control Logic",
            time: "00:53",
          },
          {
            title: "Programming Analog IO",
            time: "18:15",
          },
          {
            title: "Analog Process Control (LL, L, H, HH)",
            time: "06:53",
          },
          {
            title: "IO Programming Quiz",
            string: "5 questions",
          },
          {
            title: "Section Wrap-up",
            time: "02:20",
          },
        ],
      },
      {
        title: "Process Logic",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "Process Programming Overview",
            time: "04:22",
          },
          {
            title: "Blower HOA (Hand / Off / Auto) Control",
            time: "21:11",
          },
          {
            title: "A Bit More on HOA Controls",
            time: "00:42",
          },
          {
            title: "Digital Tank / Pump Control",
            time: "21:43",
          },
          {
            title: "Analog Tank / Pump Control",
            time: "07:39",
          },
          {
            title: "PID Heater Control",
            time: "31:09",
          },
          {
            title: "Process Logic Quiz",
            string: "4 questions",
          },
          {
            title: "Section Wrap-up",
            time: "02:14",
          },
        ],
      },
      {
        title: "Alarms and Notifications",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "Alarms Overview",
            time: "02:00",
          },
          {
            title: "Considerations",
            time: "05:39",
          },
          {
            title: "Dual-bit Alarm / Notification Programming",
            time: "42:36",
          },
          {
            title: "When Alarms SUCK!",
            time: "00:02",
          },
          {
            title: "Setpoints",
            time: "07:32",
          },
          {
            title: "Alarms and Notifications Quiz",
            string: "7 questions",
          },
          {
            title: "Section Wrap-up",
            time: "03:15",
          },
        ],
      },
      {
        title: "HMI (Human Machine Interface)",
        content_list: [
          {
            title: "Section Objectives",
            time: "1 page",
          },
          {
            title: "HMI Overview",
            time: "03:40",
          },
          {
            title: "HMI Alternatives",
            time: "03:24",
          },
          {
            title: "Basic Flow of an HMI Program",
            time: "22:32",
          },
          {
            title: "Setting Up a Screen",
            time: "18:10",
          },
          {
            title: "Alarms / Events / Notifications",
            time: "04:41",
          },
          {
            title: "Permissions",
            time: "08:43",
          },
          {
            title: "HMI (Human Machine Interface) Quiz",
            string: "6 questions",
          },
          {
            title: "Section Wrap-up",
            time: "04:29",
          },
        ],
      },
    ],
  },
  {
    id: 1030,
    subcategory_id: 101,
    title: "Angular - The Complete Guide (2024 Edition)",
    img: images.angular_the_complete_guide_2024_edition,
    instructor: "Maximilian Schwarzm\u00fcller",
    price: 4490.0,
    description:
      'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    ratings: {
      stars: 4.6,
      count: 196322,
    },
    students: 734123,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Develop modern, complex, responsive and scalable web applications with Angular",
      "Fully understand the architecture behind an Angular application and how to use it",
      "Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer",
      "Create single-page applications with one of the most modern JavaScript frameworks out there",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Course Introduction",
            time: "00:57",
          },
          {
            title: "What is Angular?",
            time: "01:59",
          },
          {
            title: "Join our Online Learning Community",
            time: "00:25",
          },
          {
            title: "Angular vs Angular 2 vs Latest Angular Version",
            time: "02:55",
          },
          {
            title: "CLI Deep Dive & Troubleshooting",
            time: "01:13",
          },
          {
            title: "Project Setup and First App",
            time: "08:08",
          },
          {
            title: "Editing the First App",
            time: "10:05",
          },
          {
            title: "The Course Structure",
            time: "04:00",
          },
          {
            title: "How to get the Most out of the Course",
            time: "02:25",
          },
          {
            title: "What is TypeScript?",
            time: "02:09",
          },
          {
            title: "Optional: TypeScript Quick Introduction",
            time: "00:18",
          },
          {
            title: "A Basic Project Setup using Bootstrap for Styling",
            time: "04:27",
          },
          {
            title: "About the Course Code / Code Snapshots",
            time: "01:06",
          },
        ],
      },
      {
        title: "The Basics",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:56",
          },
          {
            title: "How an Angular App gets Loaded and Started",
            time: "07:11",
          },
          {
            title: "Components are Important!",
            time: "03:08",
          },
          {
            title: "Creating a New Component",
            time: "06:51",
          },
          {
            title:
              "Understanding the Role of AppModule and Component Declaration",
            time: "05:15",
          },
          {
            title: "Working with Standalone Components",
            time: "01:11",
          },
          {
            title: "Using Custom Components",
            time: "01:12",
          },
          {
            title: "Creating Components with the CLI & Nesting Components",
            time: "03:51",
          },
          {
            title: "Working with Component Templates",
            time: "03:08",
          },
          {
            title: "Working with Component Styles",
            time: "04:02",
          },
          {
            title: "Fully Understanding the Component Selector",
            time: "03:50",
          },
          {
            title: "Practicing Components",
            string: "1 question",
          },
          {
            title: "[OPTIONAL] Assignment Solution",
            time: "06:42",
          },
          {
            title: "What is Databinding?",
            time: "02:49",
          },
          {
            title: "String Interpolation",
            time: "05:19",
          },
          {
            title: "Property Binding",
            time: "06:34",
          },
          {
            title: "Property Binding vs String Interpolation",
            time: "03:07",
          },
          {
            title: "Event Binding",
            time: "04:09",
          },
          {
            title: "Bindable Properties and Events",
            time: "00:21",
          },
          {
            title: "Passing and Using Data with Event Binding",
            time: "04:37",
          },
          {
            title: "Important: FormsModule is Required for Two-Way-Binding!",
            time: "00:12",
          },
          {
            title: "Two-Way-Databinding",
            time: "02:47",
          },
          {
            title: "Combining all Forms of Databinding",
            time: "01:46",
          },
          {
            title: "Practicing Databinding",
            string: "1 question",
          },
          {
            title: "[OPTIONAL] Assignment Solution",
            time: "05:12",
          },
          {
            title: "Understanding Directives",
            time: "02:17",
          },
          {
            title: "Using ngIf to Output Data Conditionally",
            time: "03:53",
          },
          {
            title: "Enhancing ngIf with an Else Condition",
            time: "02:46",
          },
          {
            title: 'Angular 17: Alternative "if" Syntax',
            time: "00:36",
          },
          {
            title: "Styling Elements Dynamically with ngStyle",
            time: "05:01",
          },
          {
            title: "Applying CSS Classes Dynamically with ngClass",
            time: "02:53",
          },
          {
            title: "Outputting Lists with ngFor",
            time: "03:43",
          },
          {
            title: 'Angular 17: Alternative "for" Syntax',
            time: "00:42",
          },
          {
            title: "Practicing Directives",
            string: "1 question",
          },
          {
            title: "[OPTIONAL] Assignment Solution",
            time: "07:06",
          },
          {
            title: "Getting the Index when using ngFor",
            time: "02:52",
          },
        ],
      },
      {
        title: "Course Project - The Basics",
        content_list: [
          {
            title: "Project Introduction",
            time: "01:04",
          },
          {
            title: "Planning the App",
            time: "05:33",
          },
          {
            title: "Creating a New App Correctly",
            time: "00:46",
          },
          {
            title: "Setting up the Application",
            time: "04:31",
          },
          {
            title: "Creating the Components",
            time: "09:32",
          },
          {
            title: "Using the Components",
            time: "03:15",
          },
          {
            title: "Adding a Navigation Bar",
            time: "05:09",
          },
          {
            title: "Alternative Non-Collapsable Navigation Bar",
            time: "00:27",
          },
          {
            title: 'Creating a "Recipe" Model',
            time: "04:33",
          },
          {
            title: "Adding Content to the Recipes Components",
            time: "07:41",
          },
          {
            title: "Outputting a List of Recipes with ngFor",
            time: "04:37",
          },
          {
            title: "Displaying Recipe Details",
            time: "05:52",
          },
          {
            title: "Working on the ShoppingListComponent",
            time: "01:49",
          },
          {
            title: 'Creating an "Ingredient" Model',
            time: "02:35",
          },
          {
            title: "Creating and Outputting the Shopping List",
            time: "02:27",
          },
          {
            title: "Adding a Shopping List Edit Section",
            time: "03:28",
          },
          {
            title: "Wrap Up & Next Steps",
            time: "00:54",
          },
        ],
      },
      {
        title: "Debugging",
        content_list: [
          {
            title: "Understanding Angular Error Messages",
            time: "04:36",
          },
          {
            title: "Debugging Code in the Browser Using Sourcemaps",
            time: "05:32",
          },
        ],
      },
      {
        title: "Components & Databinding Deep Dive",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:36",
          },
          {
            title: "Splitting Apps into Components",
            time: "05:56",
          },
          {
            title: "Property & Event Binding Overview",
            time: "01:44",
          },
          {
            title: "Binding to Custom Properties",
            time: "05:43",
          },
          {
            title: "Assigning an Alias to Custom Properties",
            time: "01:59",
          },
          {
            title: "Binding to Custom Events",
            time: "09:05",
          },
          {
            title: "Assigning an Alias to Custom Events",
            time: "00:57",
          },
          {
            title: "Custom Property and Event Binding Summary",
            time: "02:02",
          },
          {
            title: "Understanding View Encapsulation",
            time: "04:59",
          },
          {
            title: "More on View Encapsulation",
            time: "02:43",
          },
          {
            title: "Using Local References in Templates",
            time: "04:36",
          },
          {
            title: "@ViewChild() in Angular 8+",
            time: "00:24",
          },
          {
            title: "Getting Access to the Template & DOM with @ViewChild",
            time: "05:02",
          },
          {
            title: "Projecting Content into Components with ng-content",
            time: "03:22",
          },
          {
            title: "Understanding the Component Lifecycle",
            time: "04:54",
          },
          {
            title: "Seeing Lifecycle Hooks in Action",
            time: "11:55",
          },
          {
            title: "Lifecycle Hooks and Template Access",
            time: "02:33",
          },
          {
            title: "@ContentChild() in Angular 8+",
            time: "00:02",
          },
          {
            title: "Getting Access to ng-content with @ContentChild",
            time: "03:00",
          },
          {
            title: "Wrap Up",
            time: "00:49",
          },
          {
            title: "Practicing Property & Event Binding and View Encapsulation",
            string: "1 question",
          },
          {
            title: "[OPTIONAL] Assignment Solution",
            time: "12:21",
          },
        ],
      },
      {
        title: "Course Project - Components & Databinding",
        content_list: [
          {
            title: "Introduction",
            time: "00:50",
          },
          {
            title: "Adding Navigation with Event Binding and ngIf",
            time: "07:31",
          },
          {
            title: "Passing Recipe Data with Property Binding",
            time: "04:43",
          },
          {
            title: "Passing Data with Event and Property Binding (Combined)",
            time: "10:31",
          },
          {
            title: "Make sure you have FormsModule added!",
            time: "00:09",
          },
          {
            title: "Allowing the User to Add Ingredients to the Shopping List",
            time: "07:22",
          },
        ],
      },
      {
        title: "Directives Deep Dive",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:23",
          },
          {
            title: "ngFor and ngIf Recap",
            time: "03:36",
          },
          {
            title: "ngClass and ngStyle Recap",
            time: "02:57",
          },
          {
            title: "Creating a Basic Attribute Directive",
            time: "06:42",
          },
          {
            title: "Using the Renderer to build a Better Attribute Directive",
            time: "07:04",
          },
          {
            title: "More about the Renderer",
            time: "00:13",
          },
          {
            title: "Using HostListener to Listen to Host Events",
            time: "03:00",
          },
          {
            title: "Using HostBinding to Bind to Host Properties",
            time: "03:17",
          },
          {
            title: "Binding to Directive Properties",
            time: "06:43",
          },
          {
            title: "What Happens behind the Scenes on Structural Directives",
            time: "03:04",
          },
          {
            title: "Building a Structural Directive",
            time: "06:13",
          },
          {
            title: "Understanding ngSwitch",
            time: "02:49",
          },
        ],
      },
      {
        title: "Course Project - Directives",
        content_list: [
          {
            title: "Building and Using a Dropdown Directive",
            time: "06:25",
          },
          {
            title: "Closing the Dropdown From Anywhere",
            time: "00:18",
          },
        ],
      },
      {
        title: "Using Services & Dependency Injection",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:39",
          },
          {
            title: "Why would you Need Services?",
            time: "02:04",
          },
          {
            title: "Creating a Logging Service",
            time: "03:32",
          },
          {
            title: "Injecting the Logging Service into Components",
            time: "06:21",
          },
          {
            title: "Alternative Injection Syntax",
            time: "00:34",
          },
          {
            title: "Creating a Data Service",
            time: "06:41",
          },
          {
            title: "Understanding the Hierarchical Injector",
            time: "02:40",
          },
          {
            title: "How many Instances of Service Should It Be?",
            time: "02:12",
          },
          {
            title: "Injecting Services into Services",
            time: "05:13",
          },
          {
            title: "Using Services for Cross-Component Communication",
            time: "04:06",
          },
          {
            title: "A Different Way Of Injecting Services",
            time: "00:31",
          },
          {
            title: "Practicing Services",
            string: "1 question",
          },
          {
            title: "[OPTIONAL] Assignment Solution",
            time: "09:37",
          },
        ],
      },
      {
        title: "Course Project - Services & Dependency Injection",
        content_list: [
          {
            title: "Introduction",
            time: "01:23",
          },
          {
            title: "Setting up the Services",
            time: "01:15",
          },
          {
            title: "Managing Recipes in a Recipe Service",
            time: "04:07",
          },
          {
            title: "Using a Service for Cross-Component Communication",
            time: "05:07",
          },
          {
            title: "Adding the Shopping List Service",
            time: "05:04",
          },
          {
            title: "Using Services for Pushing Data from A to B",
            time: "03:08",
          },
          {
            title: "Adding Ingredients to Recipes",
            time: "03:41",
          },
          {
            title:
              "Passing Ingredients from Recipes to the Shopping List (via a Service)",
            time: "07:03",
          },
        ],
      },
    ],
  },
  {
    id: 1031,
    subcategory_id: 101,
    title: "Build Responsive Real-World Websites with HTML and CSS",
    img: images.build_responsive_real_world_websites_with_html_and_css,
    instructor: "Jonas Schmedtmann",
    price: 4490.0,
    description:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
    ratings: {
      stars: 4.7,
      count: 103162,
    },
    students: 408678,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "Become a modern and confident HTML and CSS developer, no prior knowledge needed!",
      "Design and build a stunning real-world project for your portfolio from scratch",
      "Modern, semantic and accessible HTML5",
      "Modern CSS (previous CSS3), including flexbox and CSS Grid for layout",
      "Important CSS concepts such as the box model, positioning schemes, inheritance, solving selector conflicts, etc.",
      "A web design framework with easy-to-use rules and guidelines to design eye-catching websites",
      "How to plan, sketch, design, build, test, and optimize a professional website",
      "How to make websites work on every possible mobile device (responsive design)",
      "How to use common components and layout patterns for professional website design and development",
      "Developer skills such as reading documentation, debugging, and using professional tools",
      "How to find and use free design assets such as images, fonts, and icons",
      "Practice your skills with 10+ challenges (solutions included)",
    ],
    course_content: [
      {
        title: "Welcome and First Steps",
        content_list: [
          {
            title: "Course Structure and Projects",
            time: "05:34",
          },
          {
            title: "Read Before You Start!",
            time: "00:51",
          },
          {
            title: "A High-Level Overview of Web Development",
            time: "11:01",
          },
          {
            title: "Setting Up Our Code Editor",
            time: "08:52",
          },
          {
            title: "Your Very First Webpage!",
            time: "09:55",
          },
          {
            title: "Downloading Course Material",
            time: "04:21",
          },
          {
            title: "Watch Before You Start!",
            time: "05:44",
          },
        ],
      },
      {
        title: "HTML Fundamentals",
        content_list: [
          {
            title: "Section Intro",
            time: "00:40",
          },
          {
            title: "Introduction to HTML",
            time: "04:18",
          },
          {
            title: "HTML Document Structure",
            time: "11:46",
          },
          {
            title: "Text Elements",
            time: "16:19",
          },
          {
            title: "More Text Elements: Lists",
            time: "10:59",
          },
          {
            title: "Images and Attributes",
            time: "12:45",
          },
          {
            title: "Hyperlinks",
            time: "14:49",
          },
          {
            title: "Structuring our Page",
            time: "10:56",
          },
          {
            title: "A Note on Semantic HTML",
            time: "06:27",
          },
          {
            title: "Installing Additional VS Code Extensions",
            time: "07:14",
          },
          {
            title: "CHALLENGE #1",
            time: "11:50",
          },
          {
            title: "CHALLENGE #2",
            time: "17:11",
          },
        ],
      },
      {
        title: "CSS Fundamentals",
        content_list: [
          {
            title: "Section Intro",
            time: "00:56",
          },
          {
            title: "Introduction to CSS",
            time: "04:06",
          },
          {
            title: "Inline, Internal and External CSS",
            time: "12:12",
          },
          {
            title: "Styling Text",
            time: "15:31",
          },
          {
            title: "Combining Selectors",
            time: "09:12",
          },
          {
            title: "Class and ID Selectors",
            time: "15:23",
          },
          {
            title: "Working With Colors",
            time: "24:07",
          },
          {
            title: "Pseudo-classes",
            time: "10:00",
          },
          {
            title: "Styling Hyperlinks",
            time: "09:43",
          },
          {
            title: "Using Chrome DevTools",
            time: "08:04",
          },
          {
            title: "CSS Theory #1: Conflicts Between Selectors",
            time: "17:23",
          },
          {
            title: "CSS Theory #2: Inheritance and the Universal Selector",
            time: "14:36",
          },
          {
            title: "CHALLENGE #1",
            time: "17:40",
          },
          {
            title: "CSS Theory #3: The CSS Box Model",
            time: "08:05",
          },
          {
            title: "Using Margins and Paddings",
            time: "22:07",
          },
          {
            title: "Adding Dimensions",
            time: "08:03",
          },
          {
            title: "Centering our Page",
            time: "07:56",
          },
          {
            title: "CHALLENGE #2",
            time: "10:59",
          },
          {
            title: "CSS Theory #4: Types of Boxes",
            time: "22:19",
          },
          {
            title: "CSS Theory #5: Absolute Positioning",
            time: "16:04",
          },
          {
            title: "Pseudo-elements",
            time: "16:51",
          },
          {
            title: "Developer Skill #1: Googling and Reading Documentation",
            time: "12:15",
          },
          {
            title: "Developer Skill #2: Debugging and Asking Questions",
            time: "22:16",
          },
          {
            title: "CHALLENGE #3",
            time: "19:37",
          },
        ],
      },
      {
        title: "Layouts: Floats, Flexbox, and CSS Grid Fundamentals",
        content_list: [
          {
            title: "Section Intro",
            time: "01:18",
          },
          {
            title: "The 3 Ways of Building Layouts",
            time: "05:18",
          },
          {
            title: "Using Floats",
            time: "17:22",
          },
          {
            title: "Clearing Floats",
            time: "07:22",
          },
          {
            title: "Building a Simple Float Layout",
            time: "08:46",
          },
          {
            title: "box-sizing: border-box",
            time: "11:12",
          },
          {
            title: "CHALLENGE #1",
            time: "20:14",
          },
          {
            title: "Introduction to Flexbox",
            time: "09:43",
          },
          {
            title: "A Flexbox Overview",
            time: "07:35",
          },
          {
            title: "Spacing and Aligning Flex Items",
            time: "10:51",
          },
          {
            title: "The flex Property",
            time: "11:34",
          },
          {
            title: "Adding Flexbox to Our Project",
            time: "19:57",
          },
          {
            title: "Building a Simple Flexbox Layout",
            time: "12:15",
          },
          {
            title: "CHALLENGE #2",
            time: "14:13",
          },
          {
            title: "Introduction to CSS Grid",
            time: "10:57",
          },
          {
            title: "A CSS Grid Overview",
            time: "09:39",
          },
          {
            title: "Sizing Grid Columns and Rows",
            time: "13:54",
          },
          {
            title: "Placing and Spanning Grid Items",
            time: "13:00",
          },
          {
            title: "Aligning Grid Items and Tracks",
            time: "13:46",
          },
          {
            title: "Building a Simple CSS Grid Layout",
            time: "15:46",
          },
          {
            title: "CHALLENGE #3",
            time: "07:47",
          },
        ],
      },
      {
        title: "Web Design Rules and Framework",
        content_list: [
          {
            title: "Section Intro",
            time: "02:18",
          },
          {
            title: "Project Overview",
            time: "06:13",
          },
          {
            title: "Overview of Web Design and Website Personalities",
            time: "12:36",
          },
          {
            title: "Web Design Rules #1: Typography",
            time: "16:17",
          },
          {
            title: "Implementing Typography",
            time: "23:23",
          },
          {
            title: "Web Design Rules #2: Colors",
            time: "13:40",
          },
          {
            title: "Implementing Colors",
            time: "18:12",
          },
          {
            title: "Web Design Rules #3: Images and Illustrations",
            time: "14:57",
          },
          {
            title: "Web Design Rules #4: Icons",
            time: "12:59",
          },
          {
            title: "Implementing Icons",
            time: "21:33",
          },
          {
            title: "Web Design Rules #5: Shadows",
            time: "13:04",
          },
          {
            title: "Implementing Shadows",
            time: "12:08",
          },
          {
            title: "Web Design Rules #6: Border-radius",
            time: "04:54",
          },
          {
            title: "Implementing Border-radius",
            time: "06:40",
          },
          {
            title: "Web Design Rules #7: Whitespace",
            time: "13:10",
          },
          {
            title: "Web Design Rules #8: Visual Hierarchy",
            time: "22:58",
          },
          {
            title: "Implementing Whitespace and Visual Hierarchy",
            time: "15:43",
          },
          {
            title: "Web Design Rules #9: User Experience (UX)",
            time: "20:37",
          },
          {
            title: "The Website-Personalities-Framework",
            time: "30:59",
          },
          {
            title: "The Missing Piece: Steal Like An Artist!",
            time: "10:26",
          },
        ],
      },
      {
        title: "Components and Layout Patterns",
        content_list: [
          {
            title: "Section Intro",
            time: "01:00",
          },
          {
            title: "Web Design Rules #10 - Part 1: Elements and Components",
            time: "27:48",
          },
          {
            title: "Building an Accordion Component - Part 1",
            time: "25:30",
          },
          {
            title: "Building an Accordion Component - Part 2",
            time: "19:24",
          },
          {
            title: "Building a Carousel Component - Part 1",
            time: "21:25",
          },
          {
            title: "Building a Carousel Component - Part 2",
            time: "29:41",
          },
          {
            title: "Building a Table Component - Part 1",
            time: "10:04",
          },
          {
            title: "Building a Table Component - Part 2",
            time: "13:16",
          },
          {
            title: "CHALLENGE #1: Building a Pagination Component",
            time: "24:19",
          },
          {
            title: "Web Design Rules #10 - Part 2: Layout Patterns",
            time: "21:52",
          },
          {
            title: "Building a Hero Section - Part 1",
            time: "22:11",
          },
          {
            title: "Building a Hero Section - Part 2",
            time: "21:21",
          },
          {
            title: "Building a Web Application Layout - Part 1",
            time: "15:12",
          },
          {
            title: "Building a Web Application Layout - Part 2",
            time: "15:56",
          },
        ],
      },
      {
        title: "Omnifood Project \u2013 Setup and Desktop Version",
        content_list: [
          {
            title: "Section Intro",
            time: "01:02",
          },
          {
            title: "The 7 Steps to a Great Website",
            time: "20:29",
          },
          {
            title: "Defining and Planning the Project (Steps 1 and 2)",
            time: "24:36",
          },
          {
            title: "Sketching Initial Layout Ideas (Step 3)",
            time: "07:36",
          },
          {
            title: "First Design and Development Steps (Step 4)",
            time: "15:21",
          },
          {
            title: "Responsive Design Principles",
            time: "08:37",
          },
          {
            title: "How rem and max-width Work",
            time: "16:06",
          },
          {
            title: "Building the Hero - Part 1",
            time: "16:11",
          },
          {
            title: "Building the Hero - Part 2",
            time: "29:26",
          },
          {
            title: "Building the Hero - Part 3",
            time: "23:57",
          },
          {
            title: "Building the Header",
            time: "15:15",
          },
          {
            title: "Building the Navigation",
            time: "15:55",
          },
          {
            title: "Setting Up a Reusable Grid",
            time: "21:23",
          },
          {
            title: "Building the How-It-Works Section - Part 1",
            time: "29:16",
          },
          {
            title: "Building the How-It-Works Section - Part 2",
            time: "35:12",
          },
          {
            title: "Building the Featured-In Section",
            time: "19:45",
          },
          {
            title: "Building the Meals Section - Part 1",
            time: "26:35",
          },
          {
            title: "Building the Meals Section - Part 2",
            time: "21:01",
          },
          {
            title: "Building the Meals Section - Part 3",
            time: "29:42",
          },
          {
            title: "Building the Testimonials Section - Part 1",
            time: "18:14",
          },
          {
            title: "Building the Testimonials Section - Part 2",
            time: "24:38",
          },
          {
            title: "Building the Pricing Section - Part 1",
            time: "24:00",
          },
          {
            title: "Building the Pricing Section - Part 2",
            time: "25:57",
          },
          {
            title: "Building the Features Part",
            time: "19:06",
          },
          {
            title: "Building the Call-To-Action Section - Part 1",
            time: "26:12",
          },
          {
            title: "Building the Call-To-Action Section - Part 2",
            time: "24:45",
          },
          {
            title: "Building the Call-To-Action Section - Part 3",
            time: "29:09",
          },
          {
            title: "Building the Footer - Part 1",
            time: "19:15",
          },
          {
            title: "Building the Footer - Part 2",
            time: "27:58",
          },
        ],
      },
      {
        title: "Omnifood Project \u2013 Responsive Web Design",
        content_list: [
          {
            title: "Section Intro",
            time: "00:47",
          },
          {
            title: "How Media Queries Work",
            time: "14:23",
          },
          {
            title: "How to Select Breakpoints",
            time: "04:47",
          },
          {
            title: "Responding to Small Laptops",
            time: "15:33",
          },
          {
            title: "Responding to Landscape Tablets",
            time: "19:24",
          },
          {
            title: "Responding to Tablets",
            time: "25:24",
          },
          {
            title: "Building the Mobile Navigation",
            time: "37:58",
          },
          {
            title: "Responding to Smaller Tablets",
            time: "18:56",
          },
          {
            title: "Responding to Phones",
            time: "26:42",
          },
        ],
      },
      {
        title: "Omnifood Project \u2013 Effects, Optimizations and Deployment",
        content_list: [
          {
            title: "Section Intro",
            time: "00:50",
          },
          {
            title: "A Short Introduction to JavaScript",
            time: "18:48",
          },
          {
            title: "Making the Mobile Navigation Work",
            time: "08:32",
          },
          {
            title: "Implementing Smooth Scrolling",
            time: "29:24",
          },
          {
            title: "Implementing a Sticky Navigation Bar",
            time: "28:02",
          },
          {
            title: "Browser Support and Fixing Flexbox Gap in Safari",
            time: "19:06",
          },
          {
            title: "Testing Performance With Lighthouse",
            time: "08:45",
          },
          {
            title: "Adding Favicon and Meta Description",
            time: "12:24",
          },
          {
            title: "Image Optimizations",
            time: "18:26",
          },
          {
            title: "Deployment to Netlify",
            time: "08:20",
          },
          {
            title: "Making the Form Work With Netlify Forms",
            time: "07:49",
          },
        ],
      },
      {
        title: "The End!",
        content_list: [
          {
            title: "Where to Go from Here",
            time: "04:32",
          },
          {
            title: "My Other Courses + Updates",
            time: "01:03",
          },
        ],
      },
    ],
  },
  {
    id: 1032,
    subcategory_id: 101,
    title: "Modern React with Redux [2024 Update]",
    img: images.modern_react_with_redux_2024_update,
    instructor: "Stephen Grider",
    price: 4790.0,
    description:
      "Master React and Redux Toolkit.  Includes RTK Query, Routing, Immer, tons of custom hooks, and more!",
    ratings: {
      stars: 4.7,
      count: 85511,
    },
    students: 312685,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Create dynamic web apps using the latest in web technology",
      "Acquire the programming skills needed to obtain a software engineering job",
      "Practice your skills with many large projects, exercises, and quizzes",
      "Master the fundamentals concepts behind React and Redux",
      "Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
      "Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well",
      "Realize the power of building reusable components",
    ],
    course_content: [
      {
        title: "Let's Dive In!",
        content_list: [
          {
            title: "How to Get Help",
            time: "01:01",
          },
          {
            title: "Join Our Community!",
            time: "00:07",
          },
          {
            title: "Course Resources",
            time: "00:52",
          },
          {
            title: "Let's Build an App!",
            time: "07:56",
          },
          {
            title: "Critical Questions",
            time: "05:49",
          },
          {
            title: "Core Concepts",
            string: "4 questions",
          },
          {
            title: "A Few More Critical Questions",
            time: "07:44",
          },
          {
            title: "Node Setup",
            time: "01:58",
          },
          {
            title: "Creating a React Project",
            time: "02:38",
          },
          {
            title: "What is Create React App?",
            time: "05:50",
          },
        ],
      },
      {
        title: "Creating Content with JSX",
        content_list: [
          {
            title: "Showing Basic Content",
            time: "06:41",
          },
          {
            title: "What is JSX?",
            time: "05:48",
          },
          {
            title: "Printing JavaScript Variables in JSX",
            time: "04:29",
          },
          {
            title: "Shorthand JS Expressions",
            time: "01:51",
          },
          {
            title: "Showing Javascript Values in JSX",
            string: "3 questions",
          },
          {
            title: "Exercise Overview",
            time: "00:42",
          },
          {
            title: "Quick Practice with JSX",
            string: "1 question",
          },
          {
            title: "Exercise Solution",
            time: "00:35",
          },
          {
            title: "Typical Component Layouts",
            time: "01:58",
          },
          {
            title: "Customizing Elements with Props",
            time: "07:36",
          },
          {
            title: "Converting HTML to JSX",
            time: "05:07",
          },
          {
            title: "Applying Styling in JSX",
            time: "06:13",
          },
          {
            title: "More on JSX",
            string: "3 questions",
          },
          {
            title: "Practice JSX Conversion",
            string: "1 question",
          },
          {
            title: "Exercise Solution",
            time: "02:05",
          },
          {
            title: "Extracting Components",
            time: "04:26",
          },
          {
            title: "Module Systems Overview",
            time: "16:05",
          },
          {
            title: "Imports and Exports",
            string: "2 questions",
          },
          {
            title: "Cheatsheet for JSX",
            time: "00:05",
          },
        ],
      },
      {
        title: "Building with Reusable Components",
        content_list: [
          {
            title: "Project Overview",
            time: "05:37",
          },
          {
            title: "Creating Core Components",
            time: "05:00",
          },
          {
            title: "Introducing the Props System",
            time: "04:51",
          },
          {
            title: "Picturing the Movement of Data",
            time: "06:06",
          },
          {
            title: "Adding Props",
            time: "03:04",
          },
          {
            title: "Using Argument Destructuring",
            time: "04:57",
          },
          {
            title: "Practice with Props",
            string: "1 question",
          },
          {
            title: "Exercise Solution",
            time: "01:30",
          },
          {
            title: "The React Developer Tools",
            time: "02:37",
          },
          {
            title: "The Most Common Props Mistake",
            time: "04:42",
          },
          {
            title: "Communicating With Props",
            string: "3 questions",
          },
          {
            title: "Images for the App",
            time: "00:06",
          },
          {
            title: "Including Images",
            time: "08:09",
          },
          {
            title: "Handling Image Accessibility",
            time: "06:39",
          },
          {
            title: "Review on how CSS Works",
            time: "06:10",
          },
          {
            title: "Adding CSS Libraries with NPM",
            time: "05:57",
          },
          {
            title: "A Big Pile of HTML!",
            time: "09:38",
          },
          {
            title: "Last Bit of Styling",
            time: "05:45",
          },
        ],
      },
      {
        title: "State: How to Change Your App",
        content_list: [
          {
            title: "App Overview",
            time: "02:52",
          },
          {
            title: "Initial App Setup",
            time: "05:09",
          },
          {
            title: "Introducing the Event System",
            time: "03:14",
          },
          {
            title: "Events in Detail",
            time: "08:11",
          },
          {
            title: "Variations on Event Handlers",
            time: "06:42",
          },
          {
            title: "Quiz on Events",
            string: "2 questions",
          },
          {
            title: "Exercise with Events",
            string: "1 question",
          },
          {
            title: "Exercise Solution",
            time: "01:15",
          },
          {
            title: "Introducing the State System",
            time: "03:43",
          },
          {
            title: "More on State",
            time: "08:43",
          },
          {
            title: "Understanding the Re-Rendering Process",
            time: "08:10",
          },
          {
            title: "Got These Five Points?",
            string: "4 questions",
          },
          {
            title: "Why Array Destructuring?",
            time: "08:41",
          },
          {
            title: "Back to the App",
            time: "03:33",
          },
          {
            title: "Picking a Random Element",
            time: "07:11",
          },
          {
            title: "List Building in React",
            time: "09:46",
          },
          {
            title: "Images for the App",
            time: "00:06",
          },
          {
            title: "Loading and Showing SVGs",
            time: "05:50",
          },
          {
            title: "Increasing Image Size",
            time: "05:51",
          },
          {
            title: "Adding Custom CSS",
            time: "06:21",
          },
          {
            title: "Finalizing Styling",
            time: "05:58",
          },
          {
            title: "App Wrapup and Review",
            time: "08:52",
          },
        ],
      },
      {
        title: "Using an API with React",
        content_list: [
          {
            title: "App Overview",
            time: "02:24",
          },
          {
            title: "Project Setup",
            time: "05:53",
          },
          {
            title: "The Path Forward",
            time: "04:06",
          },
          {
            title: "Overview of HTTP Requests",
            time: "11:15",
          },
          {
            title: "Understanding the API",
            time: "06:07",
          },
          {
            title: "Making an HTTP Request",
            time: "10:36",
          },
          {
            title: "[Optional] Using Async:Await",
            time: "02:38",
          },
          {
            title: "Data Fetching Cleanup",
            time: "03:20",
          },
          {
            title: "Thinking About Data Flow",
            time: "08:42",
          },
          {
            title: "Child to Parent Communication",
            time: "06:07",
          },
          {
            title: "Implementing Child to Parent Communication",
            time: "07:29",
          },
          {
            title: "Upward Communication",
            string: "1 question",
          },
          {
            title: "Handling Form Submission",
            time: "11:32",
          },
          {
            title: "Handling Input Elements",
            time: "09:21",
          },
          {
            title: "[Optional]  OK But Why?",
            time: "14:21",
          },
          {
            title: "Creating a Controlled Input",
            string: "1 question",
          },
          {
            title: "Exercise Solution",
            time: "02:35",
          },
          {
            title: "Running the Search",
            time: "04:06",
          },
          {
            title: "Reminder on Async:Await",
            time: "03:00",
          },
          {
            title: "Communicating the List of Images Down",
            time: "12:31",
          },
          {
            title: "Building a List of Images",
            time: "05:03",
          },
          {
            title: "Handling List Updates",
            time: "09:10",
          },
          {
            title: "Notes on Keys",
            time: "09:22",
          },
          {
            title: "Displaying Images",
            time: "01:48",
          },
          {
            title: "A Touch of Styling",
            time: "04:26",
          },
          {
            title: "App Wrapup",
            time: "03:41",
          },
        ],
      },
      {
        title: "How to Handle Forms",
        content_list: [
          {
            title: "App Overview",
            time: "03:20",
          },
          {
            title: "Initial Setup",
            time: "05:56",
          },
          {
            title: "State Location",
            time: "05:14",
          },
          {
            title: "Reminder on Event Handlers",
            time: "04:51",
          },
          {
            title: "Extra CSS",
            time: "00:06",
          },
          {
            title: "Receiving New Titles",
            time: "08:54",
          },
          {
            title: "Adding Styling",
            time: "02:12",
          },
          {
            title: "Updating State",
            time: "10:24",
          },
          {
            title: "Don't Mutate That State!",
            time: "04:26",
          },
          {
            title: "State Updates - Cheat Sheet",
            time: "00:17",
          },
          {
            title: "[Optional] Adding Elements to the Start or End",
            time: "01:24",
          },
          {
            title: "Adding Elements",
            string: "1 question",
          },
          {
            title: "[Optional] Exercise Solution",
            time: "01:12",
          },
          {
            title: "[Optional] Inserting Elements",
            time: "04:43",
          },
          {
            title: "Inserting Elements",
            string: "1 question",
          },
          {
            title: "[Optional] Exercise Solution",
            time: "02:00",
          },
          {
            title: "[Optional] Removing Elements",
            time: "07:04",
          },
          {
            title: "Removing Elements",
            string: "1 question",
          },
          {
            title: "[Optional] Exercise Solution",
            time: "02:09",
          },
          {
            title: "[Optional] Modifying Elements",
            time: "06:05",
          },
          {
            title: "[Super Optional] Why the Special Syntax?",
            time: "07:10",
          },
          {
            title: "Modifying Elements",
            string: "1 question",
          },
          {
            title: "[Optional] Exercise Solution",
            time: "02:26",
          },
          {
            title: "[Optional] Adding, Changing, or Removing Object Properties",
            time: "03:58",
          },
          {
            title: "Cheatsheet for State Changes",
            time: "00:05",
          },
          {
            title: "Adding a Book, For Real!",
            time: "01:49",
          },
          {
            title: "Generating Random ID's",
            time: "02:05",
          },
          {
            title: "Displaying the List",
            time: "05:35",
          },
          {
            title: "Deleting Records",
            time: "06:36",
          },
          {
            title: "Toggling Form Display",
            time: "06:31",
          },
          {
            title: "Default Form Values",
            time: "07:06",
          },
          {
            title: "Updating the Title",
            time: "08:44",
          },
          {
            title: "Closing the Form on Submit",
            time: "05:06",
          },
          {
            title: "A Better Solution!",
            time: "04:30",
          },
          {
            title: "Collapsing Two Handlers into One",
            time: "03:18",
          },
          {
            title: "Adding Images",
            time: "07:58",
          },
        ],
      },
      {
        title: "Data Persistence with API Requests",
        content_list: [
          {
            title: "Adding Data Persistence",
            time: "07:48",
          },
          {
            title: "Server Setup",
            time: "03:44",
          },
          {
            title: "What Just Happened?",
            time: "04:36",
          },
          {
            title: "How the API Works",
            time: "05:20",
          },
          {
            title: "Introducing the REST Client",
            time: "05:05",
          },
          {
            title: "ECONNREFUSED 127.0.0.1:3001 Errors in VSCode",
            time: "00:23",
          },
          {
            title: "Using the REST Client",
            time: "06:58",
          },
          {
            title: "Creating a New Record",
            time: "06:56",
          },
          {
            title: "Fetching a List of Records",
            time: "04:25",
          },
          {
            title: "Introducing useEffect",
            time: "02:51",
          },
          {
            title: "useEffect in Action",
            time: "06:24",
          },
          {
            title: "More on useEffect",
            time: "09:52",
          },
          {
            title: "When Does it Run?",
            string: "3 questions",
          },
          {
            title: "Updating a Record",
            time: "03:18",
          },
          {
            title: "Thinking About Updates",
            time: "05:27",
          },
          {
            title: "Deleting a Record",
            time: "01:18",
          },
        ],
      },
      {
        title: "Communication Using the Context System",
        content_list: [
          {
            title: "Introducing Context",
            time: "09:12",
          },
          {
            title: "Context in Action",
            time: "06:15",
          },
          {
            title: "Changing Context Values",
            time: "06:51",
          },
          {
            title: "More on Changing Context",
            time: "08:46",
          },
          {
            title: "Application vs Component State",
            time: "11:50",
          },
          {
            title: "Refactoring to Use Context",
            time: "04:38",
          },
          {
            title: "Refactoring the App",
            time: "05:32",
          },
          {
            title: "Quick Note",
            time: "00:11",
          },
          {
            title: "Reminder on Sharing with Context",
            time: "06:12",
          },
          {
            title: "Props and Context Together",
            time: "03:08",
          },
          {
            title: "Last Bit of Refactoring",
            time: "05:55",
          },
          {
            title: "A Small Taste of Reusable Hooks",
            time: "09:53",
          },
        ],
      },
      {
        title: "Deeper Dive into Hooks!",
        content_list: [
          {
            title: "Return to useEffect",
            time: "08:06",
          },
          {
            title: "Quick Note",
            time: "00:16",
          },
          {
            title: "Understanding the Issue",
            time: "07:17",
          },
          {
            title: "Applying the Fix",
            time: "06:23",
          },
          {
            title: "ESLint is Good, but be Careful!",
            time: "10:57",
          },
          {
            title: "Stable References with useCallback",
            time: "13:08",
          },
          {
            title: "Fixing Bugs with useCallback",
            time: "02:08",
          },
          {
            title: "Fixing UseEffect Bugs",
            string: "5 questions",
          },
          {
            title: "useEffect Cleanup Functions",
            time: "05:33",
          },
          {
            title: "The Purpose of Cleanup Functions",
            time: "05:37",
          },
        ],
      },
      {
        title: "Custom Navigation and Routing Systems",
        content_list: [
          {
            title: "Important Info About the Following Sections and Lectures",
            time: "00:22",
          },
          {
            title: "Project Overview",
            time: "04:25",
          },
          {
            title: "Project Setup",
            time: "01:54",
          },
          {
            title: "Some Button Theory",
            time: "08:19",
          },
          {
            title: "Underlying Elements",
            time: "03:48",
          },
          {
            title: "The Children Prop",
            time: "04:21",
          },
          {
            title: "Props Design",
            time: "06:21",
          },
          {
            title: "Validating Props with PropTypes",
            time: "08:29",
          },
          {
            title: "PropTypes in Action",
            time: "06:52",
          },
          {
            title: "Introducing TailwindCSS",
            time: "06:37",
          },
          {
            title: "Updated Guidance for Installing and Configuring Tailwind",
            time: "00:24",
          },
          {
            title: "Installing Tailwind",
            time: "04:50",
          },
          {
            title: "How to use Tailwind",
            time: "06:35",
          },
          {
            title: "Review on Styling",
            time: "10:22",
          },
          {
            title: "The ClassNames Library",
            time: "11:28",
          },
          {
            title: "Building Some Variations",
            time: "05:55",
          },
          {
            title: "text-white Overriding Other Colors",
            time: "00:28",
          },
          {
            title: "Finalizing the Variations",
            time: "06:07",
          },
          {
            title: "Using Icons in React Projects",
            time: "09:55",
          },
          {
            title: "Issues with Event Handlers",
            time: "07:16",
          },
          {
            title: "Passing Props Through",
            time: "06:07",
          },
          {
            title: "Handling the Special ClassName Case",
            time: "05:16",
          },
          {
            title: "Exclusive Props with TypeScript instead of PropTypes",
            time: "01:02",
          },
        ],
      },
    ],
  },
  {
    id: 1033,
    subcategory_id: 101,
    title: "The Complete Web Developer Course 3.0",
    img: images.the_complete_web_developer_course_3_0,
    instructor: "Rob Percival",
    price: 4790.0,
    description:
      "Learn Web Development in 2023! Build apps, website, projects using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
    ratings: {
      stars: 4.6,
      count: 71880,
    },
    students: 312965,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Build websites and webapps",
      "Build HTML-based mobile apps",
      "Get a job as a junior web developer",
      "Bid for projects on freelance websites",
      "Start your own online business",
      "Be a comfortable front-end developer",
      "Be proficient with databases and server-side languages",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Introduction To Getting Started Section",
            time: "00:40",
          },
          {
            title: "How to Get All the Free Stuff",
            time: "02:34",
          },
          {
            title: "Do this now, for later! - CCA Access Code",
            time: "00:34",
          },
          {
            title: "Getting Started",
            time: "03:27",
          },
          {
            title: "How To Ask Great Questions",
            time: "04:38",
          },
          {
            title: "Frequently Asked Questions",
            time: "01:32",
          },
        ],
      },
      {
        title: "HTML 5",
        content_list: [
          {
            title: "Introduction To HTML 5 Section",
            time: "00:51",
          },
          {
            title: "Your First Webpage",
            time: "04:16",
          },
          {
            title: "The Structure Of A Webpage",
            time: "08:16",
          },
          {
            title: "Creating A Full Webpage",
            time: "06:09",
          },
          {
            title: "Creating A Full Webpage - Files",
            time: "00:04",
          },
          {
            title: "Header Tags",
            time: "03:58",
          },
          {
            title: "Header Tags - Files",
            time: "00:04",
          },
          {
            title: "Paragraph Tags",
            time: "03:56",
          },
          {
            title: "Paragraph Tags - Files",
            time: "00:04",
          },
          {
            title: "Formatting Text",
            time: "05:41",
          },
          {
            title: "Formatting Text - Files",
            time: "00:04",
          },
          {
            title: "Unordered Lists",
            time: "02:46",
          },
          {
            title: "Unordered Lists - Files",
            time: "00:04",
          },
          {
            title: "Ordered Lists",
            time: "02:39",
          },
          {
            title: "Ordered Lists - Files",
            time: "00:04",
          },
          {
            title: "Images",
            time: "05:43",
          },
          {
            title: "Images - Files",
            time: "00:04",
          },
          {
            title: "Forms",
            time: "09:24",
          },
          {
            title: "Forms - Files",
            time: "00:04",
          },
          {
            title: "Tables",
            time: "04:21",
          },
          {
            title: "Tables - Files",
            time: "00:04",
          },
          {
            title: "Links",
            time: "08:33",
          },
          {
            title: "Links - Files",
            time: "00:04",
          },
          {
            title: "HTML Entities",
            time: "03:18",
          },
          {
            title: "HTML Entities - Files",
            time: "00:04",
          },
          {
            title: "Audio & Video",
            time: "05:09",
          },
          {
            title: "Audio & Video",
            time: "00:02",
          },
          {
            title: "Putting It All Together",
            time: "22:35",
          },
          {
            title: "Putting It All Together - Files",
            time: "00:02",
          },
          {
            title: "Setting Up Your Free Hosting",
            time: "06:19",
          },
          {
            title: "Setting Up FTP",
            time: "08:47",
          },
          {
            title: "Further Reading - HTML",
            time: "00:02",
          },
          {
            title: "Reference 1 - HTML Tag Reference",
            time: "00:02",
          },
          {
            title: "HTML Quiz",
            string: "8 questions",
          },
        ],
      },
      {
        title: "CSS 3",
        content_list: [
          {
            title: "Introduction To CSS 3 Section",
            time: "00:59",
          },
          {
            title: "What Is CSS?",
            time: "02:48",
          },
          {
            title: "Inline CSS",
            time: "06:43",
          },
          {
            title: "Internal CSS",
            time: "04:50",
          },
          {
            title: "Classes And IDs",
            time: "06:58",
          },
          {
            title: "Divs",
            time: "05:20",
          },
          {
            title: "Colors",
            time: "04:34",
          },
          {
            title: "Floating",
            time: "05:15",
          },
          {
            title: "Positioning",
            time: "12:14",
          },
          {
            title: "Margins",
            time: "06:55",
          },
          {
            title: "Padding",
            time: "05:45",
          },
          {
            title: "Borders",
            time: "12:45",
          },
          {
            title: "Fonts",
            time: "07:06",
          },
          {
            title: "Styling Text",
            time: "08:29",
          },
          {
            title: "Aligning Text",
            time: "06:50",
          },
          {
            title: "Styling Links",
            time: "05:38",
          },
          {
            title: "Advanced Selectors",
            time: "09:47",
          },
          {
            title: "Pseudo Classes",
            time: "11:44",
          },
          {
            title: "Gradients",
            time: "04:04",
          },
          {
            title: "Shadow Effect",
            time: "05:20",
          },
          {
            title: "Transformations and Animations",
            time: "09:15",
          },
          {
            title: "Flexbox",
            time: "05:10",
          },
          {
            title: "CSS Reset",
            time: "05:05",
          },
          {
            title: "Project: Portfolio Website",
            time: "20:10",
          },
          {
            title: "Project: Portfolio Website Pt2",
            time: "17:55",
          },
          {
            title: "Project: Portfolio Website Pt3",
            time: "16:31",
          },
          {
            title: "External CSS",
            time: "03:27",
          },
          {
            title: "Putting your portfolio site online",
            string: "2 questions",
          },
          {
            title: "BBC Project Notes",
            time: "00:10",
          },
          {
            title: "CSS Project BBC News Website (1)",
            time: "41:29",
          },
          {
            title: "CSS Project BBC News Website (2)",
            time: "31:59",
          },
          {
            title: "CSS Project BBC News Website (3)",
            time: "27:46",
          },
          {
            title: "CSS Project BBC News Website (4)",
            time: "21:31",
          },
          {
            title: "CSS Project BBC News Website - Files",
            time: "00:04",
          },
          {
            title: "Further Reading - CSS",
            time: "00:02",
          },
          {
            title: "Reference 2 - CSS",
            time: "00:01",
          },
          {
            title: "Further Reading - HTML 5 & CSS 3",
            time: "00:02",
          },
          {
            title: "CSS - Quiz",
            string: "8 questions",
          },
        ],
      },
      {
        title: "Javascript",
        content_list: [
          {
            title: "Introduction to JavaScript Section",
            time: "00:53",
          },
          {
            title: "What is JavaScript",
            time: "05:59",
          },
          {
            title: "Internal JavaScript",
            time: "05:44",
          },
          {
            title: "Accessing Elements",
            time: "06:49",
          },
          {
            title: "Reponding To A Click",
            time: "07:10",
          },
          {
            title: "Changing Website Content",
            time: "10:41",
          },
          {
            title: "Manipulating Styles With JavaScript",
            time: "03:32",
          },
          {
            title: "Challenge - Disappearing Circles",
            time: "06:59",
          },
          {
            title: "Variables",
            time: "08:56",
          },
          {
            title: "Arrays",
            time: "12:31",
          },
          {
            title: "If Statements",
            time: "09:30",
          },
          {
            title: "Game - How Many Fingers Projects",
            time: "13:20",
          },
          {
            title: "For Loops",
            time: "12:27",
          },
          {
            title: "While Loops",
            time: "14:11",
          },
          {
            title: "Functions",
            time: "10:16",
          },
          {
            title: "Let And Const Variables",
            time: "06:04",
          },
          {
            title: "Project: Reaction Tester",
            time: "33:35",
          },
          {
            title: "External JavaScript",
            time: "04:28",
          },
          {
            title: "Further Reading - Javascript",
            time: "00:02",
          },
          {
            title: "Reference 3 - Javascript",
            time: "00:01",
          },
          {
            title: "Javascript - Quiz",
            string: "8 questions",
          },
          {
            title: "Track the Best Time",
            string: "2 questions",
          },
          {
            title: "Add Additional Project to Portfolio Site",
            string: "2 questions",
          },
        ],
      },
      {
        title: "jQuery",
        content_list: [
          {
            title: "Introduction To jQuery Section",
            time: "00:58",
          },
          {
            title: "What is jQuery",
            time: "03:10",
          },
          {
            title: "Using jQuery in Your Webpages",
            time: "08:26",
          },
          {
            title: "Detecting a Click",
            time: "07:38",
          },
          {
            title: "Changing Website Content",
            time: "03:43",
          },
          {
            title: "Changing Website Styles",
            time: "10:39",
          },
          {
            title: "Fading Content Effect",
            time: "15:57",
          },
          {
            title: "Animating Content",
            time: "07:23",
          },
          {
            title: "Regular Expressions",
            time: "04:36",
          },
          {
            title: "Introducing jQuery UI",
            time: "07:33",
          },
          {
            title: "Draggables",
            time: "06:05",
          },
          {
            title: "Resizables",
            time: "08:45",
          },
          {
            title: "Droppables",
            time: "08:14",
          },
          {
            title: "Accordions and Sortables",
            time: "07:30",
          },
          {
            title: "Further Reading - jQuery",
            time: "00:02",
          },
          {
            title: "Bonus - Legacy 2.0 Projects",
            time: "00:26",
          },
          {
            title: "JQuery - Quiz",
            string: "8 questions",
          },
        ],
      },
      {
        title: "Bootstrap 5",
        content_list: [
          {
            title: "Introduction to 'Bootstrap' Section",
            time: "00:52",
          },
          {
            title: "What is Bootstrap?",
            time: "02:04",
          },
          {
            title: "Your First Bootstrap Site",
            time: "02:58",
          },
          {
            title: "The Grid System",
            time: "18:36",
          },
          {
            title: "Introducing Navbars",
            time: "10:48",
          },
          {
            title: "Forms & Tables",
            time: "13:00",
          },
          {
            title: "Bootstrap Components",
            time: "13:16",
          },
          {
            title: "Modals, Popovers & Tooltips",
            time: "17:20",
          },
          {
            title: "ScrollSpy",
            time: "05:56",
          },
          {
            title: "Project - Landing Page",
            time: "15:17",
          },
          {
            title: "Further Reading - Bootstrap",
            time: "00:02",
          },
        ],
      },
      {
        title: "WordPress",
        content_list: [
          {
            title: "Introduction to 'WordPress' Section",
            time: "01:01",
          },
          {
            title: "What is WordPress?",
            time: "04:05",
          },
          {
            title: "Installing WordPress",
            time: "07:34",
          },
          {
            title: "wp-admin",
            time: "04:48",
          },
          {
            title: "Themes",
            time: "05:59",
          },
          {
            title: "Theme Customiser",
            time: "07:37",
          },
          {
            title: "Posts",
            time: "04:24",
          },
          {
            title: "Pages",
            time: "04:33",
          },
          {
            title: "Blocks",
            time: "14:12",
          },
          {
            title: "Menus",
            time: "07:05",
          },
          {
            title: "Plugins",
            time: "04:38",
          },
          {
            title: "Contact Form 7",
            time: "09:02",
          },
          {
            title: "Further Reading - Wordpress",
            time: "00:02",
          },
        ],
      },
      {
        title: "PHP",
        content_list: [
          {
            title: "Introduction to 'PHP' Section",
            time: "00:49",
          },
          {
            title: "Introduction to PHP",
            time: "05:38",
          },
          {
            title: "Hello World with PHP",
            time: "15:56",
          },
          {
            title: "Variables",
            time: "12:54",
          },
          {
            title: "Arrays",
            time: "12:31",
          },
          {
            title: "If Statements",
            time: "12:45",
          },
          {
            title: "For and For Each Loops",
            time: "08:49",
          },
          {
            title: "While Loops",
            time: "06:40",
          },
          {
            title: "GET Variables",
            time: "21:40",
          },
          {
            title: "POST Variables",
            time: "10:00",
          },
          {
            title: "Sending an Email With PHP",
            time: "08:09",
          },
          {
            title: "Mini Project - A Contact Form",
            time: "37:44",
          },
          {
            title: "Portfolio Contact Form",
            string: "3 questions",
          },
          {
            title: "Getting Contents of Other Scripts",
            time: "05:39",
          },
          {
            title: "Project - Weather Scraper",
            time: "46:43",
          },
        ],
      },
      {
        title: "MySQL",
        content_list: [
          {
            title: "Introduction to 'MySQL' Section",
            time: "00:39",
          },
          {
            title: "Introduction to MySQL",
            time: "10:40",
          },
          {
            title: "Connecting to a Database",
            time: "10:28",
          },
          {
            title: "Retrieving Data From a Database",
            time: "12:04",
          },
          {
            title: "Inserting and Updating Data",
            time: "11:40",
          },
          {
            title: "Looping Through Data",
            time: "32:52",
          },
          {
            title: "Session Variables",
            time: "10:38",
          },
          {
            title: "Cookies",
            time: "08:29",
          },
          {
            title: "Storing Passwords Securely",
            time: "07:01",
          },
          {
            title: "Project - Secret Diary (Part 1)",
            time: "01:03:02",
          },
          {
            title: "Project - Secret Diary (Part 2)",
            time: "01:10:42",
          },
        ],
      },
      {
        title: "APIs",
        content_list: [
          {
            title: "Introduction to 'APIs' Section",
            time: "00:42",
          },
          {
            title: "What is an API?",
            time: "02:20",
          },
          {
            title: "Fruityvice API using PHP",
            time: "19:37",
          },
          {
            title: "Getting Wikipedia Page Views with JS Fetch",
            time: "24:18",
          },
          {
            title: "Cat API with an API Key",
            time: "17:42",
          },
          {
            title: "Mini Project \u2013 Enhanced Cat App",
            time: "11:35",
          },
          {
            title: "X (Twitter) API - Legacy Lecture",
            time: "00:24",
          },
          {
            title: "X (Twitter) API - Legacy Lecture",
            time: "16:38",
          },
          {
            title:
              "Project \u2013 Build an X (Twitter) Client - Legacy Lecture",
            time: "11:00",
          },
        ],
      },
    ],
  },
  {
    id: 1034,
    subcategory_id: 101,
    title: "Vue - The Complete Guide (incl. Router & Composition API)",
    img: images.vue_the_complete_guide_incl_router_composition_api,
    instructor: "Maximilian Schwarzm\u00fcller",
    price: 4790.0,
    description:
      "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
    ratings: {
      stars: 4.8,
      count: 61865,
    },
    students: 233694,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Build amazing Vue.js Applications - all the Way from Small and Simple Ones up to Large Enterprise-level Ones",
      "Understand the Theory behind Vue.js and use it in Real Projects",
      "Leverage Vue.js in both Multi- and Single-Page-Applications (MPAs and SPAs)",
      "Learn the latest version of Vue (Vue 3), including the brand-new Composition API",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Welcome to the Course!",
            time: "01:39",
          },
          {
            title: 'What is "Vue.js"?',
            time: "07:51",
          },
          {
            title: "Different Ways of Using Vue",
            time: "02:35",
          },
          {
            title: "Exploring Vue Alternatives",
            time: "03:11",
          },
          {
            title: "Building A First App With Just JavaScript",
            time: "07:26",
          },
          {
            title: "Join our Online Learning Community",
            time: "00:25",
          },
          {
            title: "Re-building the App with Vue",
            time: "11:39",
          },
          {
            title: 'Vue vs "Vanilla JavaScript" (just JavaScript)',
            time: "01:10",
          },
          {
            title: "Setting Up the Course Development Environment",
            time: "02:04",
          },
          {
            title: "Course Outline & What's In The Course",
            time: "02:58",
          },
          {
            title: "How To Get The Most Out Of This Course",
            time: "03:23",
          },
          {
            title: "Module Resources",
            time: "00:09",
          },
        ],
      },
      {
        title: "Basics & Core Concepts - DOM Interaction with Vue",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:48",
          },
          {
            title: "Important: Changed Vue Script Import Path",
            time: "00:10",
          },
          {
            title: "Creating and Connecting Vue App Instances",
            time: "08:40",
          },
          {
            title: "Interpolation and Data Binding",
            time: "03:35",
          },
          {
            title: 'Binding Attributes with the "v-bind" Directive',
            time: "05:37",
          },
          {
            title: 'Understanding "methods" in Vue Apps',
            time: "05:47",
          },
          {
            title: "Working with Data inside of a Vue App",
            time: "03:23",
          },
          {
            title: "Outputting Raw HTML Content with v-html",
            time: "03:31",
          },
          {
            title: "A First Summary",
            time: "04:12",
          },
          {
            title: "Time to Practice: Data Binding",
            string: "1 question",
          },
          {
            title: "Understanding Event Binding",
            time: "07:17",
          },
          {
            title: "Events & Methods",
            time: "06:12",
          },
          {
            title: "Working with Event Arguments",
            time: "02:59",
          },
          {
            title: "Using the Native Event Object",
            time: "08:59",
          },
          {
            title: "Exploring Event Modifiers",
            time: "09:53",
          },
          {
            title: "Locking Content with v-once",
            time: "02:08",
          },
          {
            title: "Time to Practice: Event Binding",
            string: "1 question",
          },
          {
            title: "Data Binding + Event Binding = Two-Way Binding",
            time: "06:32",
          },
          {
            title: "Methods used for Data Binding: How It Works",
            time: "06:46",
          },
          {
            title: "Introducing Computed Properties",
            time: "05:58",
          },
          {
            title: "Working with Watchers",
            time: "10:49",
          },
          {
            title: "Methods vs Computed Properties vs Watchers",
            time: "02:27",
          },
          {
            title: "v-bind and v-on Shorthands",
            time: "01:53",
          },
          {
            title: "Time to Practice: Reactivity",
            string: "1 question",
          },
          {
            title: "Dynamic Styling with Inline Styles",
            time: "07:19",
          },
          {
            title: "Adding CSS Classes Dynamically",
            time: "06:31",
          },
          {
            title: "Classes & Computed Properties",
            time: "01:57",
          },
          {
            title: "Dynamic Classes: Array Syntax",
            time: "01:22",
          },
          {
            title: "Time to Practice: Dynamic Styling",
            string: "1 question",
          },
          {
            title: "Module Summary",
            time: "04:27",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Rendering Conditional Content & Lists",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:35",
          },
          {
            title: "Understanding the Problem",
            time: "03:16",
          },
          {
            title: "Rendering Content Conditionally",
            time: "05:09",
          },
          {
            title: "v-if, v-else and v-else-if",
            time: "04:18",
          },
          {
            title: "Using v-show Instead Of v-if",
            time: "02:25",
          },
          {
            title: "Rendering Lists of Data",
            time: "06:20",
          },
          {
            title: "Diving Deeper Into v-for",
            time: "05:12",
          },
          {
            title: "Removing List Items",
            time: "03:59",
          },
          {
            title: "Lists & Keys",
            time: "08:26",
          },
          {
            title: "Time to Practice: Conditional Content & Lists",
            string: "1 question",
          },
          {
            title: "Module Summary",
            time: "02:15",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Course Project: The Monster Slayer Game",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:18",
          },
          {
            title: "Project Setup & First Methods",
            time: "12:27",
          },
          {
            title: "Updating the Health Bars",
            time: "07:07",
          },
          {
            title: 'Adding a "Special Attack"',
            time: "06:23",
          },
          {
            title: 'Adding a "Heal" Functionality',
            time: "04:46",
          },
          {
            title: 'Adding a "Game Over" Screen',
            time: "09:37",
          },
          {
            title: "Finishing the Core Functionality",
            time: "06:08",
          },
          {
            title: "Adding a Battle Log",
            time: "14:11",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Vue: Behind the Scenes",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:31",
          },
          {
            title: "An Introduction to Vue's Reactivity",
            time: "04:26",
          },
          {
            title: "Vue Reactivity: A Deep Dive",
            time: "08:10",
          },
          {
            title: "One App vs Multiple Apps",
            time: "03:53",
          },
          {
            title: "Understanding Templates",
            time: "03:56",
          },
          {
            title: "Working with Refs",
            time: "05:21",
          },
          {
            title: "How Vue Updates the DOM",
            time: "06:26",
          },
          {
            title: "Vue App Lifecycle - Theory",
            time: "04:46",
          },
          {
            title: "Vue App Lifecycle - Practice",
            time: "09:48",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Introducing Components",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:30",
          },
          {
            title: "Understanding the Problem",
            time: "08:39",
          },
          {
            title: "Introducing Components",
            time: "10:54",
          },
          {
            title: "The Why: Building Complex User Interfaces With Components",
            time: "01:00",
          },
          {
            title: "Multiple Vue Apps vs Multiple Components",
            time: "00:57",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title:
          "Moving to a Better Development Setup & Workflow with the Vue CLI",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:35",
          },
          {
            title: "Why We Need A Development Server",
            time: "03:29",
          },
          {
            title: "Why We Want A Better Developer Experience",
            time: "05:50",
          },
          {
            title: "Fixing npm run serve (Vue CLI)",
            time: "00:30",
          },
          {
            title: "Installing & Using the Vue CLI",
            time: "08:26",
          },
          {
            title: "Inspecting the Created Project",
            time: "05:59",
          },
          {
            title: 'Inspecting the Vue Code & ".vue" Files',
            time: "06:04",
          },
          {
            title: 'Adding the "Vetur" Extension to VS Code',
            time: "01:15",
          },
          {
            title: 'More on ".vue" Files',
            time: "01:40",
          },
          {
            title: "A New Vue Project",
            time: "05:05",
          },
          {
            title: "Creating a Basic Vue App",
            time: "09:32",
          },
          {
            title: "Adding a Component",
            time: "08:14",
          },
          {
            title: "Adding Styling",
            time: "02:16",
          },
          {
            title: "A Small Addition",
            time: "00:13",
          },
          {
            title: 'An Alternative Setup - using "npm init" & Volar',
            time: "00:45",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Component Communication",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:41",
          },
          {
            title: 'Introducing "Props" (Parent => Child Communication)',
            time: "10:03",
          },
          {
            title: "Prop Behavior & Changing Props",
            time: "06:30",
          },
          {
            title: "Validating Props",
            time: "07:14",
          },
          {
            title: "Supported Prop Values",
            time: "00:09",
          },
          {
            title: "Working with Dynamic Prop Values",
            time: "05:37",
          },
          {
            title: "Emitting Custom Events (Child => Parent Communication)",
            time: "11:15",
          },
          {
            title: "Defining & Validating Custom Events",
            time: "04:05",
          },
          {
            title: "Prop / Event Fallthrough & Binding All Props",
            time: "01:19",
          },
          {
            title: "Demo: Adding Components & Connecting Them",
            time: "13:15",
          },
          {
            title: "Demo: Adding More Component Communication",
            time: "06:24",
          },
          {
            title: "Time to Practice: Props & Custom Events",
            string: "1 question",
          },
          {
            title: "A Potential Problem",
            time: "06:26",
          },
          {
            title: "Provide + Inject To The Rescue",
            time: "08:16",
          },
          {
            title: "Provide + Inject for Functions / Methods",
            time: "03:59",
          },
          {
            title: "Provide + Inject vs Props & Custom Events",
            time: "02:06",
          },
          {
            title: "Module Summary",
            time: "04:44",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Diving Deeper Into Components",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:38",
          },
          {
            title: "Project Setup",
            time: "02:38",
          },
          {
            title: "Global vs Local Components",
            time: "09:22",
          },
          {
            title: "Scoped Styles",
            time: "05:15",
          },
          {
            title: "Introducing Slots",
            time: "06:23",
          },
          {
            title: "Named Slots",
            time: "05:35",
          },
          {
            title: "Slot Styles & Compilation",
            time: "02:26",
          },
          {
            title: "More on Slots",
            time: "07:19",
          },
          {
            title: "Scoped Slots",
            time: "09:34",
          },
          {
            title: "Dynamic Components",
            time: "07:06",
          },
          {
            title: "Keeping Dynamic Components Alive",
            time: "02:44",
          },
          {
            title: "Applying What We Know & A Problem",
            time: "09:24",
          },
          {
            title: "Teleporting Elements",
            time: "03:50",
          },
          {
            title: "Working with Fragments",
            time: "01:23",
          },
          {
            title: "The Vue Style Guide",
            time: "03:02",
          },
          {
            title: "Moving to a Different Folder Structure",
            time: "02:56",
          },
          {
            title: "Module Summary",
            time: "03:38",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
      {
        title: "Course Project: The Learning Resources App",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:37",
          },
          {
            title: "Setup & First Steps",
            time: "05:24",
          },
          {
            title: "First Components & Props",
            time: "10:46",
          },
          {
            title: "Styling and More Components",
            time: "07:19",
          },
          {
            title: "Header & BaseCard Components",
            time: "07:00",
          },
          {
            title: "Adding a Base Button",
            time: "05:19",
          },
          {
            title: "Dynamic Components & Attribute Fallthrough",
            time: "08:37",
          },
          {
            title: "Adding & Styling Tabs",
            time: "04:58",
          },
          {
            title: "Adding a Form",
            time: "04:12",
          },
          {
            title: "Fetching User Input",
            time: "08:27",
          },
          {
            title: "Adding a Modal Dialog",
            time: "12:19",
          },
          {
            title: "Deleting Items",
            time: "06:42",
          },
          {
            title: 'Adding "Teleport"',
            time: "01:28",
          },
          {
            title: "Module Resources",
            time: "00:06",
          },
        ],
      },
    ],
  },
  {
    id: 1035,
    subcategory_id: 101,
    title: "Python and Django Full Stack Web Developer Bootcamp",
    img: images.python_and_django_full_stack_web_developer_bootcamp,
    instructor: "Jose Portilla",
    price: 4790.0,
    description:
      "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",
    ratings: {
      stars: 4.5,
      count: 49199,
    },
    students: 206433,
    lastUpdated: "Last updated 9/2019",
    what_you_will_learn: [
      "Create a fully functional web site using the Full-Stack with Django 1.11",
      "Learn how to use HTML to create website content",
      "Use CSS to create beautifully styled sites",
      "Learn how to take advantage of Bootstrap to quickly style sites",
      "Use Javascript to interact with sites on the Front-End",
      "Learn how to use jQuery to quickly work with the DOM",
      "Understand HTTP requests",
      "Create fantastic landing pages",
      "Learn the power of Python to code out your web applications",
      "Use Django as a back end for the websites",
      "Implement a full Models-Views-Templates structure for your site",
    ],
    course_content: [
      {
        title: "Course Introduction",
        content_list: [
          {
            title: "Introduction",
            time: "02:03",
          },
          {
            title: "Course Overview Don't Skip this Lecture!",
            time: "08:00",
          },
          {
            title: "FAQ - Frequently Asked Questions",
            time: "00:26",
          },
          {
            title: "Course Set-Up and Installation",
            time: "05:42",
          },
          {
            title: "Notes on Updates Versions of Django",
            time: "01:17",
          },
        ],
      },
      {
        title: "Front-End Introduction",
        content_list: [
          {
            title: "What is the Web?",
            time: "06:43",
          },
        ],
      },
      {
        title: "HTML Level One - Basics",
        content_list: [
          {
            title: "HTML Level One Introduction",
            time: "01:26",
          },
          {
            title: "HTML Part One Basics",
            time: "06:20",
          },
          {
            title: "HTML Level One - Part Two -Basic Tagging",
            time: "12:53",
          },
          {
            title: "HTML Level One -Part Three - Lists",
            time: "05:26",
          },
          {
            title: "HTML Level One -Part Four - Divs and Spans",
            time: "04:34",
          },
          {
            title: "HTML Level One - Part Five - Attributes",
            time: "09:30",
          },
          {
            title: "HTML Level One Assessment - Overview",
            time: "03:12",
          },
          {
            title: "HTML Level One Assessment Solutions",
            time: "06:40",
          },
        ],
      },
      {
        title: "HTML Level Two - Advanced",
        content_list: [
          {
            title: "HTML Level Two Introduction",
            time: "01:00",
          },
          {
            title: "HTML Level Two - Part One - Tables",
            time: "06:52",
          },
          {
            title: "HTML Level Two - Part Two Tables Quiz",
            time: "02:28",
          },
          {
            title: "HTML Level Two - Part Three Table Quiz Solutions",
            time: "05:57",
          },
          {
            title: "HTML Level Two Part Four - Forms Basics",
            time: "12:14",
          },
          {
            title: "HTML Level Two - Part Five Forms and Labels",
            time: "14:27",
          },
          {
            title: "HTML Level Two - Part Six Forms and Selections",
            time: "11:37",
          },
          {
            title: "HTML Level Two - Assessment",
            time: "02:08",
          },
          {
            title: "HTML Level Two - Assessment Solutions",
            time: "12:03",
          },
        ],
      },
      {
        title: "CSS Level One - Basics",
        content_list: [
          {
            title: "CSS Level One Intro",
            time: "04:00",
          },
          {
            title: "CSS Level One Part One",
            time: "14:42",
          },
          {
            title: "CSS Level One Part Two",
            time: "10:30",
          },
          {
            title: "Quick Note about next lecture",
            time: "00:22",
          },
          {
            title: "CSS Level One Part Three",
            time: "12:36",
          },
          {
            title: "CSS Level One Part Four",
            time: "04:11",
          },
          {
            title: "CSS Level One Part Five",
            time: "04:44",
          },
          {
            title: "CSS Level One Assessment",
            time: "04:13",
          },
          {
            title: "CSS Level One Assessment Solutions",
            time: "07:13",
          },
        ],
      },
      {
        title: "CSS Level Two - Advanced",
        content_list: [
          {
            title: "CSS Level Two Introduction",
            time: "00:26",
          },
          {
            title: "CSS Level Two - Part One Fonts",
            time: "12:00",
          },
          {
            title: "CSS Level Two - Part One (Fonts) Continued",
            time: "07:57",
          },
          {
            title: "CSS Level Two - Part Two Box Model",
            time: "08:38",
          },
          {
            title: "CSS Level Two Spectrum Project Overview",
            time: "04:27",
          },
          {
            title: "CSS Level Two Spectrum Project Solutions",
            time: "08:39",
          },
        ],
      },
      {
        title: "Capstone Project One",
        content_list: [
          {
            title: "Capstone Project One Overview",
            time: "03:16",
          },
          {
            title: "Capstone Project One Solutions",
            time: "09:22",
          },
          {
            title: "Capstone Project One Solutions (Continued)",
            time: "07:40",
          },
        ],
      },
      {
        title: "Bootstrap Overview",
        content_list: [
          {
            title: "Bootstrap Introduction",
            time: "08:45",
          },
          {
            title: "Bootstrap Part One - Buttons",
            time: "11:45",
          },
          {
            title: "Bootstrap Part Two Forms",
            time: "13:15",
          },
          {
            title: "Bootstrap Part Three Navbars",
            time: "18:04",
          },
          {
            title: "Bootstrap Part Four - Grids",
            time: "18:19",
          },
          {
            title: "Bootstrap Project",
            time: "04:31",
          },
          {
            title: "Bootstrap Project Solutions",
            time: "17:21",
          },
        ],
      },
      {
        title: "Javascript Level One - Basics",
        content_list: [
          {
            title: "JS Level One Introduction",
            time: "01:23",
          },
          {
            title: "JS Level One - Part One Basics",
            time: "18:19",
          },
          {
            title: "JS Level One - Part Two Connecting Javascript",
            time: "04:23",
          },
          {
            title: "JS Level One - Part Three Exercise",
            time: "02:53",
          },
          {
            title: "JS Level One - Part Three Solutions",
            time: "02:06",
          },
          {
            title: "JS Level One - Part Four - Operators",
            time: "12:00",
          },
          {
            title: "JS Level One - Part Five - Control Flow",
            time: "13:47",
          },
          {
            title: "JS Level One - Part Six While Loops",
            time: "08:56",
          },
          {
            title: "JS Level One - Part Seven For Loops",
            time: "07:58",
          },
          {
            title: "JS Level One Part Eight Loop Exercises",
            time: "00:41",
          },
          {
            title: "JS Level One - Part Eight Solutions",
            time: "04:16",
          },
          {
            title: "JS Level One - Project Overview",
            time: "05:06",
          },
          {
            title: "JS Level One - Part Nine Project Solutions",
            time: "09:20",
          },
        ],
      },
      {
        title: "Javascript Level Two",
        content_list: [
          {
            title: "JS Level Two - Introduction",
            time: "00:52",
          },
          {
            title: "JS Level Two - Part One - Functions",
            time: "19:58",
          },
          {
            title: "JS Level Two - Part Two Function Exercises",
            time: "02:08",
          },
          {
            title: "JS Level Two - Part Two Function Solutions",
            time: "14:05",
          },
          {
            title: "JS Level Two - Part Three Arrays",
            time: "16:16",
          },
          {
            title: "JS Level Two - Part  Four Array Exercise Overview",
            time: "05:03",
          },
          {
            title: "JS Level Two - Part Four Array Solutions",
            time: "07:27",
          },
          {
            title: "JS Level Two Part Five Objects",
            time: "11:14",
          },
          {
            title: "JS Level Two Part Five Objects Continued",
            time: "08:12",
          },
          {
            title: "JS Level Two Part Six Object Exercises",
            time: "01:33",
          },
          {
            title: "JS Level Two Part Six Object Exercise Solutions",
            time: "04:04",
          },
        ],
      },
    ],
  },
  {
    id: 1036,
    subcategory_id: 101,
    title: "Understanding TypeScript",
    img: images.understanding_typescript,
    instructor: "Maximilian Schwarzm\u00fcller",
    price: 3290.0,
    description:
      "Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!",
    ratings: {
      stars: 4.7,
      count: 48021,
    },
    students: 229652,
    lastUpdated: "Last updated 1/2024",
    what_you_will_learn: [
      "Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and much more in any of their Projects",
      "Understand what TypeScript really is about and how it works",
      "Why TypeScript offers a real advantage over vanilla JavaScript",
      "Learn TypeScript both in theory as well as applied to real use-cases and projects",
      "Learn how to combine TypeScript with ReactJS or NodeJS / Express",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Welcome to the Course!",
            time: "01:55",
          },
          {
            title: "What Is TypeScript & Why Should You Use It?",
            time: "04:33",
          },
          {
            title: "Join Our Learning Community",
            time: "00:25",
          },
          {
            title: "Installing & Using TypeScript",
            time: "13:22",
          },
          {
            title: "TypeScript Advantages - Overview",
            time: "03:05",
          },
          {
            title: "Course Outline",
            time: "04:17",
          },
          {
            title: "How To Get The Most Out Of The Course",
            time: "03:13",
          },
          {
            title: "Setting Up A Code Editor / IDE",
            time: "03:06",
          },
          {
            title: "The Course Project Setup",
            time: "07:20",
          },
        ],
      },
      {
        title: "TypeScript Basics & Basic Types",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:26",
          },
          {
            title: "Using Types",
            time: "10:20",
          },
          {
            title: "TypeScript Types vs JavaScript Types",
            time: "04:53",
          },
          {
            title: "Important: Type Casing",
            time: "00:08",
          },
          {
            title: "Working with Numbers, Strings & Booleans",
            time: "05:43",
          },
          {
            title: "Type Assignment & Type Inference",
            time: "05:38",
          },
          {
            title: "Understanding Types",
            string: "4 questions",
          },
          {
            title: "Object Types",
            time: "07:32",
          },
          {
            title: "Nested Objects & Types",
            time: "00:17",
          },
          {
            title: "Arrays Types",
            time: "05:29",
          },
          {
            title: "Working with Tuples",
            time: "06:19",
          },
          {
            title: "Working with Enums",
            time: "07:05",
          },
          {
            title: 'The "any" Type',
            time: "02:04",
          },
          {
            title: "Union Types",
            time: "06:30",
          },
          {
            title: "Literal Types",
            time: "07:54",
          },
          {
            title: "Type Aliases / Custom Types",
            time: "02:59",
          },
          {
            title: "Type Aliases & Object Types",
            time: "00:25",
          },
          {
            title: "Core Types & Concepts",
            string: "4 questions",
          },
          {
            title: 'Function Return Types & "void"',
            time: "07:25",
          },
          {
            title: "Functions as Types",
            time: "05:34",
          },
          {
            title: "Function Types & Callbacks",
            time: "04:23",
          },
          {
            title: "Functions & Types",
            string: "3 questions",
          },
          {
            title: 'The "unknown" Type',
            time: "03:43",
          },
          {
            title: 'The "never" Type',
            time: "04:10",
          },
          {
            title: "Wrap Up",
            time: "01:51",
          },
          {
            title: "Useful Resources & Links",
            time: "00:08",
          },
        ],
      },
      {
        title: "The TypeScript Compiler (and its Configuration)",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:46",
          },
          {
            title: 'Using "Watch Mode"',
            time: "02:05",
          },
          {
            title: "Compiling the Entire Project / Multiple Files",
            time: "03:46",
          },
          {
            title: "Including & Excluding Files",
            time: "06:13",
          },
          {
            title: "Setting a Compilation Target",
            time: "04:04",
          },
          {
            title: "Understanding TypeScript Core Libs",
            time: "05:31",
          },
          {
            title: "More Configuration & Compilation Options",
            time: "01:41",
          },
          {
            title: "Working with Source Maps",
            time: "01:59",
          },
          {
            title: "rootDir and outDir",
            time: "05:31",
          },
          {
            title: "Stop Emitting Files on Compilation Errors",
            time: "02:51",
          },
          {
            title: "Strict Compilation",
            time: "11:04",
          },
          {
            title: "Code Quality Options",
            time: "04:22",
          },
          {
            title: "Debugging with Visual Studio Code",
            time: "04:20",
          },
          {
            title: "Wrap Up",
            time: "01:08",
          },
          {
            title: "Useful Resources & Links",
            time: "00:08",
          },
        ],
      },
      {
        title: "Next-generation JavaScript & TypeScript",
        content_list: [
          {
            title: "Module Introduction",
            time: "02:21",
          },
          {
            title: '"let" and "const"',
            time: "06:33",
          },
          {
            title: "Arrow Functions",
            time: "04:50",
          },
          {
            title: "Default Function Parameters",
            time: "02:09",
          },
          {
            title: "The Spread Operator (...)",
            time: "04:32",
          },
          {
            title: "Rest Parameters",
            time: "05:04",
          },
          {
            title: "Array & Object Destructuring",
            time: "05:17",
          },
          {
            title: "How Code Gets Compiled & Wrap Up",
            time: "01:37",
          },
          {
            title: "Useful Resources & Links",
            time: "00:05",
          },
        ],
      },
      {
        title: "Classes & Interfaces",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:54",
          },
          {
            title: "What are Classes?",
            time: "04:48",
          },
          {
            title: "Creating a First Class",
            time: "05:52",
          },
          {
            title: "Compiling to JavaScript",
            time: "03:02",
          },
          {
            title: 'Constructor Functions & The "this" Keyword',
            time: "07:34",
          },
          {
            title: '"private" and "public" Access Modifiers',
            time: "05:52",
          },
          {
            title: "Shorthand Initialization",
            time: "02:57",
          },
          {
            title: '"readonly" Properties',
            time: "02:45",
          },
          {
            title: "Class Basics",
            string: "4 questions",
          },
          {
            title: "Inheritance",
            time: "08:07",
          },
          {
            title: 'Overriding Properties & The "protected" Modifier',
            time: "02:43",
          },
          {
            title: "Getters & Setters",
            time: "06:42",
          },
          {
            title: "Static Methods & Properties",
            time: "05:08",
          },
          {
            title: "Abstract Classes",
            time: "05:25",
          },
          {
            title: "Singletons & Private Constructors",
            time: "05:07",
          },
          {
            title: "Classes - A Summary",
            time: "01:43",
          },
          {
            title: "Classes",
            string: "4 questions",
          },
          {
            title: "A First Interface",
            time: "04:26",
          },
          {
            title: "Using Interfaces with Classes",
            time: "06:10",
          },
          {
            title: "Why Interfaces?",
            time: "01:34",
          },
          {
            title: "Readonly Interface Properties",
            time: "01:35",
          },
          {
            title: "Extending Interfaces",
            time: "02:34",
          },
          {
            title: "Interfaces as Function Types",
            time: "02:41",
          },
          {
            title: "Optional Parameters & Properties",
            time: "04:11",
          },
          {
            title: "Compiling Interfaces to JavaScript",
            time: "01:58",
          },
          {
            title: "Interfaces",
            string: "2 questions",
          },
          {
            title: "Wrap Up",
            time: "01:54",
          },
          {
            title: "Useful Resources & Links",
            time: "00:08",
          },
        ],
      },
      {
        title: "Advanced Types",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:58",
          },
          {
            title: "Intersection Types",
            time: "04:58",
          },
          {
            title: "More on Type Guards",
            time: "10:34",
          },
          {
            title: "Discriminated Unions",
            time: "06:11",
          },
          {
            title: "Type Casting",
            time: "07:45",
          },
          {
            title: "Index Properties",
            time: "06:35",
          },
          {
            title: "Function Overloads",
            time: "06:18",
          },
          {
            title: "Optional Chaining",
            time: "04:21",
          },
          {
            title: "Nullish Coalescing",
            time: "02:44",
          },
          {
            title: "Advanced Types",
            string: "3 questions",
          },
          {
            title: "Wrap Up",
            time: "01:20",
          },
          {
            title: "Useful Resources & Links",
            time: "00:07",
          },
        ],
      },
      {
        title: "Generics",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:04",
          },
          {
            title: "Built-in Generics & What are Generics?",
            time: "08:44",
          },
          {
            title: "Creating a Generic Function",
            time: "08:33",
          },
          {
            title: "Working with Constraints",
            time: "03:39",
          },
          {
            title: "Another Generic Function",
            time: "05:35",
          },
          {
            title: 'The "keyof" Constraint',
            time: "03:06",
          },
          {
            title: "Generic Classes",
            time: "08:54",
          },
          {
            title: "A First Summary",
            time: "01:22",
          },
          {
            title: "Generic Utility Types",
            time: "07:19",
          },
          {
            title: "Generic Types vs Union Types",
            time: "03:41",
          },
          {
            title: "Generics",
            string: "3 questions",
          },
          {
            title: "Useful Resources & Links",
            time: "00:07",
          },
        ],
      },
      {
        title: "Decorators",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:34",
          },
          {
            title: "A First Class Decorator",
            time: "05:21",
          },
          {
            title: "Working with Decorator Factories",
            time: "02:02",
          },
          {
            title: "Building More Useful Decorators",
            time: "05:59",
          },
          {
            title: "Adding Multiple Decorators",
            time: "02:52",
          },
          {
            title: "Diving into Property Decorators",
            time: "05:00",
          },
          {
            title: "Accessor & Parameter Decorators",
            time: "05:36",
          },
          {
            title: "When Do Decorators Execute?",
            time: "03:11",
          },
          {
            title: "Returning (and changing) a Class in a Class Decorator",
            time: "08:37",
          },
          {
            title: "Other Decorator Return Types",
            time: "03:44",
          },
          {
            title: 'Example: Creating an "Autobind" Decorator',
            time: "09:04",
          },
          {
            title: "Validation with Decorators - First Steps",
            time: "07:28",
          },
          {
            title: "Validation with Decorators - Finished",
            time: "12:14",
          },
          {
            title: "Fixing a Validator Bug",
            time: "00:26",
          },
          {
            title: "Wrap Up",
            time: "03:21",
          },
          {
            title: "Useful Resources & Links",
            time: "00:07",
          },
        ],
      },
      {
        title: "Practice Time! Let's build a Drag & Drop Project",
        content_list: [
          {
            title: "Module Introduction",
            time: "00:54",
          },
          {
            title: "Getting Started",
            time: "05:20",
          },
          {
            title: "DOM Element Selection & OOP Rendering",
            time: "11:43",
          },
          {
            title: "Interacting with DOM Elements",
            time: "08:03",
          },
          {
            title: 'Creating & Using an "Autobind" Decorator',
            time: "04:44",
          },
          {
            title: "Fetching User Input",
            time: "09:14",
          },
          {
            title: "Creating a Re-Usable Validation Functionality",
            time: "14:10",
          },
          {
            title: "Rendering Project Lists",
            time: "11:18",
          },
          {
            title: "Managing Application State with Singletons",
            time: "15:32",
          },
          {
            title: "More Classes & Custom Types",
            time: "07:11",
          },
          {
            title: "Filtering Projects with Enums",
            time: "05:59",
          },
          {
            title: "Adding Inheritance & Generics",
            time: "18:40",
          },
          {
            title: "Rendering Project Items with a Class",
            time: "11:58",
          },
          {
            title: "Using a Getter",
            time: "03:33",
          },
          {
            title: "Utilizing Interfaces to Implement Drag & Drop",
            time: "10:24",
          },
          {
            title: "Drag Events & Reflecting the Current State in the UI",
            time: "05:58",
          },
          {
            title: "Adding a Droppable Area",
            time: "08:08",
          },
          {
            title: "Finishing Drag & Drop",
            time: "06:44",
          },
          {
            title: "Wrap Up",
            time: "01:22",
          },
          {
            title: "Useful Resources & Links",
            time: "00:07",
          },
        ],
      },
      {
        title: "Modules & Namespaces",
        content_list: [
          {
            title: "Module Introduction",
            time: "01:11",
          },
          {
            title: "Writing Module Code - Your Options",
            time: "03:50",
          },
          {
            title: "Working with Namespaces",
            time: "10:50",
          },
          {
            title: "Organizing Files & Folders",
            time: "08:41",
          },
          {
            title: "A Problem with Namespace Imports",
            time: "02:52",
          },
          {
            title: "Important: Use Chrome or Firefox",
            time: "00:11",
          },
          {
            title: "Using ES Modules",
            time: "12:20",
          },
          {
            title: "Understanding various Import & Export Syntaxes",
            time: "04:57",
          },
          {
            title: "How Does Code In Modules Execute?",
            time: "01:43",
          },
          {
            title: "Wrap Up",
            time: "03:14",
          },
          {
            title: "Useful Resources & Links",
            time: "00:08",
          },
        ],
      },
    ],
  },
  {
    id: 1037,
    subcategory_id: 101,
    title: "JavaScript: Understanding the Weird Parts",
    img: images.javascript_understanding_the_weird_parts,
    instructor: "Anthony Alicea",
    price: 3290.0,
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
    ratings: {
      stars: 4.8,
      count: 47682,
    },
    students: 189604,
    lastUpdated: "Last updated 11/2022",
    what_you_will_learn: [
      "Grasp how Javascript works and it's fundamental concepts",
      "Write solid, good Javascript code",
      "Understand advanced concepts such as closures, prototypal inheritance, IIFEs, and much more.",
      "Drastically improve your ability to debug problems in Javascript.",
      "Avoid common pitfalls and mistakes other Javascript coders make",
      "Understand the source code of popular Javascript frameworks",
      "Build your own Javascript framework or library",
    ],
    course_content: [
      {
        title: "Getting Started",
        content_list: [
          {
            title: "Introduction and The Goal of This Course",
            time: "04:56",
          },
          {
            title: "Setup",
            time: "03:27",
          },
          {
            title: "Setup (Visual Studio Code)",
            time: "00:25",
          },
          {
            title: "Big Words and Javascript",
            time: "01:25",
          },
          {
            title: "Watching this Course in High Definition",
            time: "00:50",
          },
          {
            title: "Understanding, Frameworks, and The Weird Parts",
            time: "04:17",
          },
        ],
      },
      {
        title: "Execution Contexts and Lexical Environments",
        content_list: [
          {
            title:
              "Conceptual Aside: Syntax Parsers, Execution Contexts, and Lexical Environments",
            time: "07:35",
          },
          {
            title: "Conceptual Aside: Name/Value Pairs and Objects",
            time: "04:08",
          },
          {
            title: "Downloading Source Code for This Course",
            time: "00:38",
          },
          {
            title: "The Global Environment and The Global Object",
            time: "10:58",
          },
          {
            title: "The Execution Context - Creation and Hoisting",
            time: "09:43",
          },
          {
            title: "Conceptual Aside: Javascript and 'undefined'",
            time: "08:04",
          },
          {
            title: "The Execution Context - Code Execution",
            time: "02:54",
          },
          {
            title: "Conceptual Aside: Single Threaded, Synchronous Execution",
            time: "02:16",
          },
          {
            title: "Function Invocation and the Execution Stack",
            time: "08:06",
          },
          {
            title: "Functions, Context, and Variable Environments",
            time: "07:56",
          },
          {
            title: "The Scope Chain",
            time: "17:25",
          },
          {
            title: "Scope, ES6, and let",
            time: "04:18",
          },
          {
            title: "What About Asynchronous Callbacks?",
            time: "10:26",
          },
        ],
      },
      {
        title: "Types and Operators",
        content_list: [
          {
            title: "Conceptual Aside: Types and Javascript",
            time: "02:50",
          },
          {
            title: "Primitive Types",
            time: "05:17",
          },
          {
            title: "Conceptual Aside: Operators",
            time: "06:32",
          },
          {
            title: "Operator Precedence and Associativity",
            time: "14:14",
          },
          {
            title: "Operator Precedence and Associativity Table",
            time: "00:18",
          },
          {
            title: "Conceptual Aside: Coercion",
            time: "06:14",
          },
          {
            title: "Comparison Operators",
            time: "19:42",
          },
          {
            title: "Equality Comparisons Table",
            time: "00:18",
          },
          {
            title: "Existence and Booleans",
            time: "07:24",
          },
          {
            title: "Default Values",
            time: "07:51",
          },
          {
            title: "Framework Aside: Default Values",
            time: "07:11",
          },
        ],
      },
      {
        title: "Objects and Functions",
        content_list: [
          {
            title: "Objects and the Dot",
            time: "15:23",
          },
          {
            title: "Objects and Object Literals",
            time: "10:32",
          },
          {
            title: "Framework Aside: Faking Namespaces",
            time: "08:07",
          },
          {
            title: "JSON and Object Literals",
            time: "07:17",
          },
          {
            title: "Functions are Objects",
            time: "08:02",
          },
          {
            title: "Function Statements and Function Expressions",
            time: "20:32",
          },
          {
            title: "Conceptual Aside: By Value vs By Reference",
            time: "16:09",
          },
          {
            title: "Objects, Functions, and 'this'",
            time: "21:26",
          },
          {
            title: "Conceptual Aside: Arrays - Collections of Anything",
            time: "05:39",
          },
          {
            title: "'arguments' and spread",
            time: "12:00",
          },
          {
            title: "Framework Aside: Function Overloading",
            time: "04:43",
          },
          {
            title: "Conceptual Aside: Syntax Parsers",
            time: "02:25",
          },
          {
            title: "Dangerous Aside: Automatic Semicolon Insertion",
            time: "05:46",
          },
          {
            title: "Framework Aside: Whitespace",
            time: "04:25",
          },
          {
            title: "Immediately Invoked Functions Expressions (IIFEs)",
            time: "17:07",
          },
          {
            title: "Framework Aside: IIFEs and Safe Code",
            time: "08:05",
          },
          {
            title: "Understanding Closures",
            time: "11:09",
          },
          {
            title: "Understanding Closures - Part 2",
            time: "19:20",
          },
          {
            title: "Framework Aside: Function Factories",
            time: "12:24",
          },
          {
            title: "Closures and Callbacks",
            time: "08:26",
          },
          {
            title: "call(), apply(), and bind()",
            time: "20:54",
          },
          {
            title: "Functional Programming",
            time: "20:17",
          },
          {
            title: "Functional Programming - Part 2",
            time: "08:05",
          },
        ],
      },
      {
        title: "Object-Oriented Javascript and Prototypal Inheritance",
        content_list: [
          {
            title: "Conceptual Aside: Classical vs Prototypal Inheritance",
            time: "05:11",
          },
          {
            title: "Understanding the Prototype",
            time: "14:02",
          },
          {
            title: "Everything is an Object (or a primitive)",
            time: "05:46",
          },
          {
            title: "Reflection and Extend",
            time: "14:59",
          },
        ],
      },
      {
        title: "Building Objects",
        content_list: [
          {
            title:
              "Function Constructors, 'new', and the History of Javascript",
            time: "15:53",
          },
          {
            title: "Function Constructors and '.prototype'",
            time: "10:24",
          },
          {
            title: "Dangerous Aside: 'new' and functions",
            time: "04:16",
          },
          {
            title: "Conceptual Aside: Built-In Function Constructors",
            time: "10:32",
          },
          {
            title: "Dangerous Aside: Built-In Function Constructors",
            time: "03:57",
          },
          {
            title: "Dangerous Aside: Arrays and for..in",
            time: "03:16",
          },
          {
            title: "Object.create and Pure Prototypal Inheritance",
            time: "12:37",
          },
          {
            title: "ES6 and Classes",
            time: "06:27",
          },
        ],
      },
      {
        title: "Odds and Ends",
        content_list: [
          {
            title: "Initialization",
            time: "05:41",
          },
          {
            title:
              "'typeof' , 'instanceof', and Figuring Out What Something Is",
            time: "06:41",
          },
          {
            title: "Strict Mode",
            time: "05:51",
          },
          {
            title: "Strict Mode Reference",
            time: "00:21",
          },
        ],
      },
      {
        title: "Examining Famous Frameworks and Libraries",
        content_list: [
          {
            title: "Learning From Other's Good Code",
            time: "03:51",
          },
          {
            title: "Deep Dive into Source Code: jQuery - Part 1",
            time: "21:31",
          },
          {
            title: "Deep Dive into Source Code: jQuery - Part 2",
            time: "15:38",
          },
          {
            title: "Deep Dive into Source Code: jQuery - Part 3",
            time: "11:22",
          },
        ],
      },
      {
        title: "Let's Build a Framework / Library!",
        content_list: [
          {
            title: "Requirements",
            time: "02:57",
          },
          {
            title: "Structuring Safe Code",
            time: "03:07",
          },
          {
            title: "Our Object and Its Prototype",
            time: "09:17",
          },
          {
            title: "Properties and Chainable Methods",
            time: "16:58",
          },
          {
            title: "Adding jQuery Support",
            time: "05:22",
          },
          {
            title: "Good Commenting",
            time: "02:21",
          },
          {
            title: "Let's Use Our Framework",
            time: "08:11",
          },
          {
            title: "A Side Note",
            time: "00:32",
          },
        ],
      },
      {
        title: "EXTRA: TypeScript, ES6, and Transpiled Languages",
        content_list: [
          {
            title: "TypeScript, ES6, and Transpiled Languages",
            time: "04:33",
          },
          {
            title: "Transpiled Languages References",
            time: "00:38",
          },
        ],
      },
    ],
  },
  {
    id: 1038,
    subcategory_id: 101,
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    img: images.advanced_css_and_sass_flexbox_grid_animations_and_more,
    instructor: "Jonas Schmedtmann",
    price: 3790.0,
    description:
      "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    ratings: {
      stars: 4.7,
      count: 42991,
    },
    students: 205554,
    lastUpdated: "Last updated 11/2023",
    what_you_will_learn: [
      "Tons of modern CSS techniques to create stunning designs and effects",
      "Advanced CSS animations with @keyframes, animation and transition",
      "How CSS works behind the scenes: the cascade, specificity, inheritance, etc.",
      "CSS architecture: component-based design, BEM, writing reusable code, etc.",
      "Flexbox layouts: build a huge real-world project with flexbox",
      "CSS Grid layouts: build a huge real-world project with CSS Grid",
      "Using Sass in real-world projects: global variables, architecting CSS, managing media queries, etc.",
      "Advanced responsive design: media queries, mobile-first vs desktop-first, em vs rem units, etc.",
      "Responsive images in HTML and CSS for faster pageloads",
      "SVG images and videos in HTML and CSS: build a background video effect",
      "The NPM ecosystem: development workflows and building processes",
      "Get friendly and fast support in the course Q&A",
      "Downloadable lectures, code and design assets for all projects",
    ],
    course_content: [
      {
        title: "Welcome, Welcome, Welcome!",
        content_list: [
          {
            title: "Welcome to the Most Advanced CSS Course Ever!",
            time: "03:54",
          },
          {
            title: "READ BEFORE YOU START!",
            time: "00:34",
          },
          {
            title: "Setting up Our Tools",
            time: "02:52",
          },
        ],
      },
      {
        title: "Natours Project \u2014 Setup and First Steps (Part 1)",
        content_list: [
          {
            title: "Section Intro",
            time: "00:44",
          },
          {
            title: "Project Overview",
            time: "05:42",
          },
          {
            title: "Building the Header - Part 1",
            time: "24:23",
          },
          {
            title: "Building the Header - Part 2",
            time: "17:06",
          },
          {
            title: "Creating Cool CSS Animations",
            time: "19:19",
          },
          {
            title: "Building a Complex Animated Button - Part 1",
            time: "15:56",
          },
          {
            title: "Building a Complex Animated Button - Part 2",
            time: "12:51",
          },
        ],
      },
      {
        title: "How CSS Works: A Look Behind the Scenes",
        content_list: [
          {
            title: "Section Intro",
            time: "01:38",
          },
          {
            title:
              "Three Pillars of Writing Good HTML and CSS (Never Forget Them!)",
            time: "04:21",
          },
          {
            title: "How CSS Works Behind the Scenes: An Overview",
            time: "04:32",
          },
          {
            title: "How CSS is Parsed, Part 1: The Cascade and Specificity",
            time: "12:33",
          },
          {
            title: "Specificity in Practice",
            time: "05:55",
          },
          {
            title: "How CSS is Parsed, Part 2: Value Processing",
            time: "15:44",
          },
          {
            title: "How CSS is Parsed, Part 3: Inheritance",
            time: "04:05",
          },
          {
            title: "Converting px to rem: An Effective Workflow",
            time: "14:00",
          },
          {
            title: "How CSS Renders a Website: The Visual Formatting Model",
            time: "12:45",
          },
          {
            title: "CSS Architecture, Components and BEM",
            time: "09:17",
          },
          {
            title: "Implementing BEM in the Natours Project",
            time: "05:14",
          },
        ],
      },
      {
        title: "Introduction to Sass and NPM",
        content_list: [
          {
            title: "Section Intro",
            time: "01:02",
          },
          {
            title: "What is Sass?",
            time: "04:58",
          },
          {
            title: "First Steps with Sass: Variables and Nesting",
            time: "25:22",
          },
          {
            title: "First Steps with Sass: Mixins, Extends and Functions",
            time: "17:05",
          },
          {
            title: "A Brief Introduction to the Command Line",
            time: "11:21",
          },
          {
            title: "NPM Packages: Let's Install Sass Locally",
            time: "13:48",
          },
          {
            title: "NPM Scripts: Let's Write and Compile Sass Locally",
            time: "13:10",
          },
          {
            title:
              "The Easiest Way of Automatically Reloading a Page on File Changes",
            time: "06:22",
          },
        ],
      },
      {
        title: "Natours Project \u2014 Using Advanced CSS and Sass (Part 2)",
        content_list: [
          {
            title: "Section Intro",
            time: "00:55",
          },
          {
            title: "Converting Our CSS Code to Sass: Variables and Nesting",
            time: "11:17",
          },
          {
            title: "Implementing the 7-1 CSS Architecture with Sass",
            time: "17:33",
          },
          {
            title: "Review: Responsive Design Principles and Layout Types",
            time: "07:48",
          },
          {
            title: "Building a Custom Grid with Floats",
            time: "37:03",
          },
          {
            title: "Building the About Section - Part 1",
            time: "23:25",
          },
          {
            title: "Building the About Section - Part 2",
            time: "21:51",
          },
          {
            title: "Building the About Section - Part 3",
            time: "17:30",
          },
          {
            title: "Building the Features Section",
            time: "30:19",
          },
          {
            title: "Building the Tours Section - Part 1",
            time: "25:28",
          },
          {
            title: "Building the Tours Section - Part 2",
            time: "31:00",
          },
          {
            title: "Building the Tours Section - Part 3",
            time: "16:36",
          },
          {
            title: "Building the Stories Section - Part 1",
            time: "19:40",
          },
          {
            title: "Building the Stories Section - Part 2",
            time: "14:14",
          },
          {
            title: "Building the Stories Section - Part 3",
            time: "13:49",
          },
          {
            title: "Building the Booking Section - Part 1",
            time: "18:18",
          },
          {
            title: "Building the Booking Section - Part 2",
            time: "18:37",
          },
          {
            title: "Building the Booking Section - Part 3",
            time: "23:10",
          },
          {
            title: "Building the Footer",
            time: "15:57",
          },
          {
            title: "Building the Navigation - Part 1",
            time: "29:37",
          },
          {
            title: "Building the Navigation - Part 2",
            time: "13:13",
          },
          {
            title: "Building the Navigation - Part 3",
            time: "15:36",
          },
          {
            title: "Building a Pure CSS Popup - Part 1",
            time: "25:13",
          },
          {
            title: "Building a Pure CSS Popup - Part 2",
            time: "16:55",
          },
        ],
      },
      {
        title: "Natours Project \u2014 Advanced Responsive Design (Part 3)",
        content_list: [
          {
            title: "Section Intro",
            time: "01:00",
          },
          {
            title: "Mobile-First vs Desktop-First and Breakpoints",
            time: "17:35",
          },
          {
            title: "Let's Use the Power of Sass Mixins to Write Media Queries",
            time: "28:08",
          },
          {
            title: "Writing Media Queries - Base, Typography and Layout",
            time: "26:39",
          },
          {
            title:
              "Writing Media Queries - Layout, About and Features Sections",
            time: "12:33",
          },
          {
            title:
              "Writing Media Queries - Tours, Stories and Booking Sections",
            time: "20:26",
          },
          {
            title: "An Overview of Responsive Images",
            time: "05:41",
          },
          {
            title:
              "Responsive Images in HTML - Art Direction and Density Switching",
            time: "10:14",
          },
          {
            title:
              "Responsive Images in HTML - Density and Resolution Switching",
            time: "17:21",
          },
          {
            title: "Responsive Images in CSS",
            time: "11:42",
          },
          {
            title: "Testing for Browser Support with @supports",
            time: "21:42",
          },
          {
            title: "Setting up a Simple Build Process with NPM Scripts",
            time: "20:55",
          },
          {
            title: "Wrapping up the Natours Project: Final Considerations",
            time: "13:58",
          },
        ],
      },
      {
        title: "Trillo Project \u2014 Master Flexbox!",
        content_list: [
          {
            title: "Section Intro",
            time: "01:03",
          },
          {
            title: "Why Flexbox: An Overview of the Philosophy Behind Flexbox",
            time: "06:31",
          },
          {
            title: "A Basic Intro to Flexbox: The Flex Container",
            time: "15:08",
          },
          {
            title: "A Basic Intro to Flexbox: Flex Items",
            time: "10:34",
          },
          {
            title: "A Basic Intro to Flexbox: Adding More Flex Items",
            time: "06:14",
          },
          {
            title: "Project Overview",
            time: "07:14",
          },
          {
            title: "Defining Project Settings and Custom Properties",
            time: "13:40",
          },
          {
            title: "Building the Overall Layout",
            time: "12:00",
          },
          {
            title: "Building the Header - Part 1",
            time: "17:59",
          },
          {
            title: "Building the Header - Part 2",
            time: "14:48",
          },
          {
            title: "Building the Header - Part 3",
            time: "12:26",
          },
          {
            title: "Building the Navigation - Part 1",
            time: "11:36",
          },
          {
            title: "Building the Navigation - Part 2",
            time: "16:50",
          },
          {
            title: "Building the Hotel Overview - Part 1",
            time: "15:18",
          },
          {
            title: "Building the Hotel Overview - Part 2",
            time: "15:26",
          },
          {
            title: "Building the Description Section - Part 1",
            time: "12:53",
          },
          {
            title: "Building the Description Section - Part 2",
            time: "19:38",
          },
          {
            title: "Building the User Reviews Section",
            time: "22:52",
          },
          {
            title: "Building the CTA Section",
            time: "16:54",
          },
          {
            title: "Writing Media Queries - Part 1",
            time: "19:27",
          },
          {
            title: "Writing Media Queries - Part 2",
            time: "16:27",
          },
          {
            title: "Wrapping up the Trillo Project: Final Considerations",
            time: "14:45",
          },
        ],
      },
      {
        title: "A Quick Introduction to CSS Grid Layouts",
        content_list: [
          {
            title: "Section Intro",
            time: "00:59",
          },
          {
            title: "Why CSS Grid: A Whole New Mindset",
            time: "05:15",
          },
          {
            title: "Quick Setup for This Section",
            time: "02:11",
          },
          {
            title: "Creating Our First Grid",
            time: "12:15",
          },
          {
            title: "Getting Familiar with the fr Unit",
            time: "10:00",
          },
          {
            title: "Positioning Grid Items",
            time: "07:26",
          },
          {
            title: "Spanning Grid Items",
            time: "09:48",
          },
          {
            title: "Grid Challenge",
            time: "02:48",
          },
          {
            title: "Grid Challenge: A Basic Solution",
            time: "11:08",
          },
          {
            title: "Naming Grid Lines",
            time: "09:40",
          },
          {
            title: "Naming Grid Areas",
            time: "11:03",
          },
          {
            title: "Implicit Grids vs. Explicit Grids",
            time: "10:39",
          },
          {
            title: "Aligning Grid Items",
            time: "09:57",
          },
          {
            title: "Aligning Tracks",
            time: "12:59",
          },
          {
            title: "Using min-content, max-content and the minmax() function",
            time: "16:19",
          },
          {
            title: "Responsive Layouts with auto-fit and auto-fill",
            time: "10:57",
          },
        ],
      },
      {
        title: "Nexter Project \u2014 Master CSS Grid Layouts!",
        content_list: [
          {
            title: "Project Overview and Setup",
            time: "11:31",
          },
          {
            title: "Building the Overall Layout - Part 1",
            time: "15:33",
          },
          {
            title: "Building the Overall Layout - Part 2",
            time: "24:31",
          },
          {
            title: "Building the Features Section - Part 1",
            time: "13:01",
          },
          {
            title: "Building the Features Section - Part 2",
            time: "20:27",
          },
          {
            title: "Building the Story Section - Part 1",
            time: "18:00",
          },
          {
            title: "Building the Story Section - Part 2",
            time: "11:38",
          },
          {
            title: "Building the Homes Section - Part 1",
            time: "15:45",
          },
          {
            title: "Building the Homes Section - Part 2",
            time: "18:51",
          },
          {
            title: "Building the Gallery - Part 1",
            time: "15:24",
          },
          {
            title: "Building the Gallery - Part 2",
            time: "12:27",
          },
          {
            title: "Building the Footer",
            time: "12:33",
          },
          {
            title: "Building the Sidebar",
            time: "05:08",
          },
          {
            title: "Building the Header - Part 1",
            time: "16:15",
          },
          {
            title: "Building the Header - Part 2",
            time: "09:51",
          },
          {
            title: "Building the Realtors Section",
            time: "11:22",
          },
          {
            title: "Writing Media Queries - Part 1",
            time: "17:12",
          },
          {
            title: "Writing Media Queries - Part 2",
            time: "18:38",
          },
          {
            title: "Browser Support for CSS Grid",
            time: "08:35",
          },
          {
            title: "Wrapping up the Nexter Project: Final Considerations",
            time: "06:44",
          },
        ],
      },
      {
        title: "That's It, Everyone!",
        content_list: [
          {
            title: "See You Next Time, CSS Master!",
            time: "02:28",
          },
          {
            title: "My Other Courses + Updates",
            time: "00:51",
          },
        ],
      },
    ],
  },
  {
    id: 1039,
    subcategory_id: 101,
    title: "HTML and CSS for Beginners - Build a Website & Launch ONLINE",
    img: images.html_and_css_for_beginners_build_a_website_and_launch_online,
    instructor: "Edwin Diaz",
    price: 2350.0,
    description:
      "HTML and CSS for Beginners  course will give your all the knowledge you need to master HTML and CSS easily and quickly.",
    ratings: {
      stars: 4.4,
      count: 35621,
    },
    students: 365408,
    lastUpdated: "Last updated 1/2022",
    what_you_will_learn: [
      "You will Learn HTML",
      "You will learn CSS",
      "You will get a certification after the course that you can print",
      "You will get the skills you need to make websites",
    ],
    course_content: [
      {
        title: "First Step and Introduction",
        content_list: [
          {
            title: "Some Tips to get you started",
            time: "02:59",
          },
          {
            title: "What is HTML?",
            time: "07:56",
          },
          {
            title: "Course Exercise and Video Quality",
            time: "08:54",
          },
          {
            title: "Editor I recommend links",
            time: "00:37",
          },
          {
            title: "Quiz 1",
            string: "1 question",
          },
        ],
      },
      {
        title: "Page Structure",
        content_list: [
          {
            title: "First HTML Code",
            time: "07:25",
          },
          {
            title: "Exploring the document",
            time: "06:17",
          },
          {
            title: "Headings",
            time: "04:13",
          },
          {
            title: "Comments, White Space and line breaks",
            time: "08:36",
          },
          {
            title: "Popular HTML tags",
            time: "05:51",
          },
          {
            title: "Creating Images",
            time: "06:53",
          },
          {
            title: "Creating Links",
            time: "05:39",
          },
          {
            title: "Clickable Images",
            time: "03:05",
          },
          {
            title: "Tables",
            time: "09:13",
          },
          {
            title: "Forms",
            time: "14:26",
          },
          {
            title: "Lists",
            time: "05:18",
          },
          {
            title: "The Rest of the HTML tags",
            time: "04:41",
          },
          {
            title: "Quiz 2",
            string: "1 question",
          },
          {
            title: "Create an HTML paragraph element with some text inside",
            string: "1 question",
          },
          {
            title: "Create the biggest heading",
            string: "1 question",
          },
        ],
      },
      {
        title: "CSS",
        content_list: [
          {
            title: "Inline Style",
            time: "06:44",
          },
          {
            title: "Internal Style",
            time: "06:00",
          },
          {
            title: "External Style",
            time: "09:32",
          },
          {
            title: "Selectors",
            time: "09:00",
          },
          {
            title: "Id's and Classes",
            time: "09:48",
          },
          {
            title: "Linking Javascript",
            time: "06:21",
          },
          {
            title: "Common Styling Properties",
            time: "15:34",
          },
        ],
      },
      {
        title: "Extra Lectures - More CSS Examples - Enjoy :)",
        content_list: [
          {
            title: "Inserting Pictures and Styling",
            time: "19:06",
          },
          {
            title: "Inserting Pictures Via CSS",
            time: "06:21",
          },
          {
            title: "Hover Effect",
            time: "10:35",
          },
        ],
      },
      {
        title: "EXTRA Section - Lets build a website!",
        content_list: [
          {
            title: "Intro",
            time: "01:11",
          },
          {
            title: "Structure",
            time: "07:11",
          },
          {
            title: "Menu",
            time: "07:14",
          },
          {
            title: "Main Divs",
            time: "03:58",
          },
          {
            title: "Footer and more",
            time: "03:34",
          },
          {
            title: "Styling Container, body and header",
            time: "04:21",
          },
          {
            title: "Styling menu",
            time: "05:55",
          },
          {
            title: "Styling main div",
            time: "06:46",
          },
          {
            title: "Styling footer part 1",
            time: "05:28",
          },
          {
            title: "Styling footer part 2",
            time: "05:30",
          },
          {
            title: "Home page image",
            time: "05:37",
          },
          {
            title: "About Page",
            time: "11:40",
          },
        ],
      },
      {
        title: "Messaging Form / Contact form with some PHP",
        content_list: [
          {
            title: "Form HTML markup",
            time: "06:56",
          },
          {
            title: "Styling form part 1",
            time: "09:17",
          },
          {
            title: "Styling form part 2",
            time: "07:46",
          },
          {
            title: "Styling form part 3",
            time: "05:20",
          },
        ],
      },
      {
        title: "Lets take our website ONLINE",
        content_list: [
          {
            title: "Intro and what we need!",
            time: "05:13",
          },
          {
            title: "Uploading files",
            time: "09:16",
          },
          {
            title: "Process PHP page",
            time: "07:21",
          },
          {
            title: "Validation on the fly",
            time: "03:31",
          },
          {
            title: "Sending emails",
            time: "12:31",
          },
          {
            title: "Adding Images",
            time: "03:11",
          },
          {
            title: "Bonus Lecture",
            time: "10:14",
          },
        ],
      },
    ],
  },
];

export default courses;
