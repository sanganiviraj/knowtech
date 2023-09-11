export const resourcesdata = [
  {
    name: 'Flutter devlopment',
    desc: 'Beginner course for flutter devloper',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5SstzY24WeO7chIrSQz7lBP1p63gE4OKiw&usqp=CAU',
    auth: 'Vs Sangani',

    content: [
      {
        id: 4,
        category: 'State Management',
        subcategory: [
          '1.Managing app state is essential for building complex applications.',
          '2.Flutter offers various state management solutions such as Provider, BLoC, MobX, and Redux.',
          '3.Choosing the right state management approach depends on the complexity of the app and developer preferences.',
          '4.Well-managed state enhances app performance and maintainability.',
          '5.management libraries often provide tools to manage data flow and updates efficiently.',
        ],
      },
      {
        id: 5,
        category: 'Navigation and Routing',
        subcategory: [
          '1.Navigation is crucial for creating a smooth user experience in your Flutter app.',
          '2.Flutter offers a powerful navigation system using named routes and navigation stacks.',
          "3.Navigation transitions and animations can be customized to match the app's design.",
          '4.Deep linking and route parameters enable passing data between screens.',
          '5.Effective navigation enhances user engagement and satisfaction.',
        ],
      },
      // {
      //     id: 1,
      //     category: 'Flutter Overview',
      //     subcategory: {
      //         '1.': 'Flutter is a powerful open-source UI framework created by Google.',
      //         '2.': 'It allows developers to build natively compiled applications for mobile, web, and desktop platforms.',
      //         '3.': 'Flutter uses the Dart programming language and offers a rich set of customizable widgets.',
      //         '4.': 'One notable feature of Flutter is its "hot reload" capability for rapid development.',
      //         '5.': 'Flutter apps deliver high performance and a consistent UI across platforms.'
      //     }
      // },
      // {
      //     id: 2,
      //     category: 'Setting Up Flutter',
      //     subcategory: {
      //         '1.': 'To start with Flutter, you need to download and install the Flutter SDK.',
      //         '2.': 'You also need to set up an integrated development environment (IDE) like Android Studio or VS Code.',
      //         '3.': 'The Flutter SDK provides a command-line interface for creating, building, and running projects.',
      //         '4.': 'Android and iOS emulators or physical devices are required for testing your apps.',
      //         '5.': 'The official Flutter documentation provides detailed setup instructions.'
      //     }
      // },
      // {
      //     id: 3,
      //     category: 'Widgets and UI Components',
      //     subcategory: {
      //         '1.': 'Flutter\'s UI is composed of widgets, which are the building blocks of the user interface.',
      //         '2.': 'Widgets can be classified as either stateful or stateless, offering flexibility in building UIs.',
      //         '3.': 'Flutter provides a wide variety of pre-designed widgets for common UI elements.',
      //         '4.': 'Developers can create custom widgets by composing existing ones.',
      //         '5.': 'Widgets in Flutter are declarative, meaning the UI is a direct reflection of the code.'
      //     }
      // },

      // {
      //     id: 6,
      //     category: 'Theming and Styling',
      //     subcategory: {
      //         '1.': 'Theming and styling contribute to the visual appeal of your Flutter app.',
      //         '2.': 'Flutter allows you to define themes and customize the appearance of your app globally.',
      //         '3.': 'Widgets can be styled using properties like colors, typography, and spacing.',
      //         '4.': 'Flutter\'s widget tree structure ensures consistent styling throughout the app.',
      //         '5.': 'Well-designed themes enhance the user experience and maintain a cohesive look.'
      //     }
      // },
      // {
      //     id: 7,
      //     category: 'API Integration',
      //     subcategory: {
      //         '1.': 'Flutter apps often need to communicate with external APIs for data retrieval.',
      //         '2.': 'The http package is commonly used to make HTTP requests and handle responses.',
      //         '3.': 'Authentication and error handling are essential aspects of API integration.',
      //         '4.': 'Flutter\'s async/await syntax simplifies handling asynchronous operations.',
      //         '5.': 'Effective API integration ensures up-to-date and dynamic content in your app.'
      //     }
      // },
      // {
      //     id: 8,
      //     category: 'Testing and Debugging',
      //     subcategory: {
      //         '1.': 'Testing and debugging are critical for building reliable Flutter apps.',
      //         '2.': 'Flutter offers tools for unit testing, widget testing, and integration testing.',
      //         '3.': 'The "hot reload" feature accelerates the debugging process by applying code changes without restarting the app.',
      //         '4.': 'Debugging can be done using IDEs, logging, and Flutter DevTools.',
      //         '5.': 'Comprehensive testing and effective debugging lead to stable and high-quality apps.'
      //     }
      // },
    ],
  },

  {
    name: 'Flutter devlopment',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5SstzY24WeO7chIrSQz7lBP1p63gE4OKiw&usqp=CAU',
    content: [
      {
        id: 1,
        category: 'Android Overview',
        subcategory: {
          '1.': 'Android is a popular mobile operating system developed by Google.',
          '2.': 'It powers a majority of smartphones and tablets globally.',
          '3.': 'Android apps are written in Java or Kotlin programming languages.',
          '4.': 'The Android ecosystem offers a wide range of devices and customization options.',
          '5.': 'The Google Play Store is the primary distribution platform for Android apps.',
        },
      },
      {
        id: 2,
        category: 'Setting Up Android Development',
        subcategory: {
          '1.': 'To start developing Android apps, install Android Studio, the official IDE for Android development.',
          '2.': 'Set up the Android SDK and configure virtual devices (emulators) for testing.',
          '3.': 'Android Studio provides a user-friendly interface for creating, editing, and building apps.',
          '4.': 'Integrate version control systems like Git for collaborative development.',
          '5.': 'The Android Developer documentation offers comprehensive setup instructions.',
        },
      },
      {
        id: 3,
        category: 'User Interface Design',
        subcategory: {
          '1.': 'Creating a visually appealing and intuitive user interface is crucial for Android apps.',
          '2.': 'Design principles such as Material Design guide the visual and interactive aspects of your app.',
          '3.': 'XML layout files define the structure of UI elements, and Java/Kotlin files handle their behavior.',
          '4.': 'UI components like views, widgets, and fragments enable modular and responsive designs.',
          '5.': 'Effective UI design enhances user engagement and overall app experience.',
        },
      },
      {
        id: 4,
        category: 'Activity and Lifecycle Management',
        subcategory: {
          '1.': 'Activities represent distinct screens or windows in an Android app.',
          '2.': 'Understanding the activity lifecycle (onCreate, onResume, onPause, etc.) is crucial for managing app state.',
          '3.': 'Activities are launched using intents, and the back stack manages navigation.',
          '4.': 'Activities can communicate with each other and share data using intents and bundles.',
          '5.': 'Properly managing the activity lifecycle ensures efficient memory usage and responsiveness.',
        },
      },
      {
        id: 5,
        category: 'Data Storage and Persistence',
        subcategory: {
          '1.': 'Android apps often need to store and retrieve data, such as user preferences and app data.',
          '2.': 'SQLite is a lightweight and built-in database option for local data storage.',
          '3.': 'SharedPreferences are used for storing key-value pairs, such as app settings.',
          '4.': 'Network requests and data caching are essential for fetching and synchronizing remote data.',
          '5.': 'Choosing the appropriate storage method depends on the type of data and performance requirements.',
        },
      },
      {
        id: 6,
        category: 'Permissions and Security',
        subcategory: {
          '1.': 'Android apps require various permissions to access device features and data.',
          '2.': 'Understanding and requesting permissions is essential for maintaining user privacy and security.',
          '3.': 'Implementing secure communication using HTTPS and encryption protects sensitive data.',
          '4.': 'Proguard and R8 are tools used for code obfuscation and shrinking to enhance app security.',
          '5.': 'Applying security best practices helps prevent vulnerabilities and unauthorized access.',
        },
      },
      {
        id: 7,
        category: 'Testing and Debugging',
        subcategory: {
          '1.': 'Testing ensures that your Android app functions as expected and provides a positive user experience.',
          '2.': 'Unit testing, integration testing, and UI testing are common testing techniques.',
          '3.': 'Android Studio provides tools like JUnit, Espresso, and AndroidJUnitRunner for testing.',
          '4.': 'Debugging using logs, breakpoints, and the Android Profiler helps identify and fix issues.',
          '5.': 'Comprehensive testing and debugging lead to stable and high-quality Android apps.',
        },
      },
      {
        id: 8,
        category: 'Publishing and Distribution',
        subcategory: {
          '1.': 'Publishing an Android app involves preparing it for distribution on the Google Play Store.',
          '2.': 'App signing, app bundles, and proper metadata are required for a successful app release.',
          '3.': 'Beta testing and staged rollouts allow you to gather feedback and test new features.',
          '4.': 'Google Play Console provides insights into app performance and user engagement.',
          '5.': 'Publishing high-quality apps and responding to user feedback contribute to app success.',
        },
      },
    ],
  },
];
