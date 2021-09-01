var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.experiences =
    [
        {
            title: 'Volunteer Versus',
            text: '"Which group volunteered the most?" "Who has the most hours?" These questions have come up often over the years in my experiences volunteering. Inspired by a strong rivalry between two famous volunteering organizations as well as the inconveniences of viewing volunteering records, I sought out to design an app that would simplify managing records as well as bring stats-based competition into volunteering. The result is Volunteer Versus! Doing the project was very fun as I really got to use Ruby on Rails as well as multiple other related tools. Worked across the stack; did this solo!',
            image: 'assets/img/vv.png',
            link: 'https://volunteerversus.herokuapp.com'
        },
        {
            title: 'Gitlet',
            text: 'I made a copy of Git in Java. Yes, Git—the exact version control system that was involved in pushing this very website! Although Gitlet was given as a class project, I had to design everything from scratch—no skeleton code or anything like that. Another thing was that I had to write all the tests by myself. All these things were definitely non-trivial and the project was relatively large. Certainly, this was one of the most practical and challenging projects I have done to date.',
            image: 'assets/img/gitlet.png',
            link: '#'
        },
        {
            title: 'This Website',
            text: 'This very site stands as a project! I intend to showcase the design skills that I have, as well as highlight some of the things I have done and picked up over time. The usual elements of front-end development are involved—HTML, CSS and JavaScript. Such libraries and frameworks as jQuery and AngularJS are used for some animations and conveniences. Of course, the site is technically always a work in progress since I will document projects and other things to come. Even at that, there is a lot of room for this site to grow!',
            image: 'assets/img/this.png',
            link: '#'
        },
        {
            title: 'Upsilon Pi Epsilon',
            text: 'I contributed to the web development committee at UPE, the Computer Science Honor Society at UC Berkeley. Me and a few others worked on adding new features to their website and improving the code base. Recently, we improved office hours such that officers could manage hours with a simple interface—no code knowledge needed. Also, we added the ability to schedule appointments for mock interviews and other things. It has been a great learning experience; I picked up some knowledge of the Django framework (and ultimately backend) here!',
            image: 'assets/img/upe.png',
            link: 'http://upe.berkeley.edu'
        },
        {
            title: 'Oppia',
            text: 'Founded by a few employees at Google, Oppia is an open-source project that aims to allow anyone to create interactive "explorations" and simulate one-on-one tutoring. I contributed to the project by adding infinite scrolling to the gallery on the website, picking up AngularJS in the process! Being only in the first semester at UC Berkeley at the time, I thought that this project was great and because of it, I was able to start contributing using my programming skills early on!',
            image: 'assets/img/oppia.png',
            link: 'https://www.oppia.org'
        },
    ];
    $scope.interests =
    [
        {
            name: 'Cloud Gaming',
            text: 'My presentation for Game Development Design Course about Cloud Computing in Game Development.',
            link: 'https://docs.google.com/presentation/d/1oTXbbCSpefkMWk3ba9LJjVdvEFGzEQW94pIbSQpxvS0/edit?usp=sharing',
            image: 'assets/img/presentations/cloudGaming.png'
        },
        {
            name: 'Data Center Networking, Topologies and Routing Techniques',
            text: 'My presentation for Data Transmission Course to explain Data Center Networking, Topologies and Routing Techniques.',
            link: 'https://docs.google.com/presentation/d/1SFwKMbm-2cEjw4xdoz0uJ2F-UjWk1zy_PsTasfZCEN0/edit?usp=sharing',
            image: 'assets/img/presentations/DataCenter.png'
        },
        {
            name: 'CI/CD',
            text: 'My presentation for Software Engineering Course to explain what is CI/CD.',
            link: 'https://docs.google.com/presentation/d/1Zo4bxRShq8NhYOnSqT6auG5BSSKK4llqLpnlMKdl-K4/edit?usp=sharing',
            image: 'assets/img/presentations/CICD.png'
        },
        {
            name: 'Docker',
            text: 'My presentation for Software Engineering Labratoary Course to explain about Docker.',
            link: 'https://docs.google.com/presentation/d/12f2FjS7vABfmucC0aYoqJcceRITAbjCd0pcUwoVuOuo/edit?usp=sharing',
            image: 'assets/img/presentations/Docker.png'
        },
        {
            name: 'Smile Detection',
            text: 'My presentation for Artificial Intelligence Course to explain about our final project.',
            link: 'https://docs.google.com/presentation/d/1Zo4bxRShq8NhYOnSqT6auG5BSSKK4llqLpnlMKdl-K4/edit?usp=sharing',
            image: 'assets/img/presentations/SmileDetection.png'
        },
        {
            name: 'Review Paper',
            text: 'My review paper on "Reliability in Stream Processing Systems".',
            link: 'https://drive.google.com/file/d/1Z4yuRnxP4uny-BQZPRkoDhnJ3OFVNNl7/view?usp=sharing',
            image: 'assets/img/presentations/reviewPaper.png'
        },
        {
            name: 'Certificate',
            text: 'Cyber Threats and Attack Vectors Course, University of Colorado System, Greg Williams',
            link: '',
            image: 'assets/img/presentations/Certificate.PNG'
        },
        {
            name: 'Chillinwars',
            text: "Me as one of the developers of the Chillinwars AI contest's exclusive framework",
            link: '',
            image: 'assets/img/presentations/Chillinwars.JPG'
        }
    ];
}]);
