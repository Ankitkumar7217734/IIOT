import { Question } from "../types";
import { meshArchitectureImage, meshFlowRulesImage } from "../assets/images";

export const allQuestions: Question[] = [
  // Week 1
  {
    id: "1-1",
    week: 1,
    question: "Which of the following is/are not a thing as per IoT?",
    options: ["Fan", "Light", "Refrigerator", "None of these"],
    answer: "d. None of these",
    explanation:
      "All listed items are considered 'things' in IoT as they can be connected and managed through embedded systems.",
  },
  {
    id: "1-2",
    week: 1,
    question:
      "State true or false: The things in IoT consist of embedded systems.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "IoT devices typically include embedded systems that enable sensing, processing, and communication capabilities.",
  },
  {
    id: "1-3",
    week: 1,
    question:
      "State whether the following statement is True or False: IoT is one of the technologies that enable smart farms.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "IoT technologies facilitate smart farming through sensors, automation, and data analytics for improved agricultural efficiency.",
  },
  {
    id: "1-4",
    week: 1,
    question:
      "State whether the following statement is True or False: In M2M, it is mandatory that the interactions between the machines and devices happen through a cloud computing infrastructure.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "M2M communication can occur directly or via various networks; cloud infrastructure is not mandatory.",
  },
  {
    id: "1-5",
    week: 1,
    question:
      "Sometimes, when there is a need for the nodes to communicate directly to the Internet, ___ can be used.",
    options: ["Sensors", "Actuators", "Tunneling", "None of these"],
    answer: "c. Tunneling",
    explanation:
      "Tunneling allows nodes to establish direct internet communication by encapsulating data packets for secure transmission.",
  },
  {
    id: "1-6",
    week: 1,
    question:
      "State whether the following statement is true or false: In multi-homing a node/network is connected to only two networks for improved reliability.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Multi-homing involves connecting a node/network to multiple networks (more than two) to enhance reliability and performance.",
  },
  {
    id: "1-7",
    week: 1,
    question: "Which of the following is/are not enablers of IoT?",
    options: [
      "Advancement in gene sequencing",
      "Nanotechnology",
      "Sensors",
      "RFID",
    ],
    answer: "a. Advancement in gene sequencing",
    explanation:
      "While RFID, nanotechnology, and sensors enable IoT, gene sequencing is unrelated to IoT infrastructure.",
  },
  {
    id: "1-8",
    week: 1,
    question:
      "State whether the following statement is True or False: The decreasing number of devices in IoT is expected to result in an address crunch.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "The increasing number of IoT devices, not decreasing, leads to address scarcity and requires solutions like IPv6.",
  },
  {
    id: "1-9",
    week: 1,
    question: "Why has IoT become so popular?",
    options: [
      "It can provide advanced level of services to the society",
      "It can help reduce human effort",
      "It can potentially make processes more efficient",
      "All of these",
    ],
    answer: "d. All of these",
    explanation:
      "IoT's popularity stems from its ability to provide advanced services, reduce human effort, and enhance process efficiency.",
  },
  {
    id: "1-10",
    week: 1,
    question:
      "State whether the following statement is true or false: The resolution of a sensor is the maximum change it can detect in the quantity that it is measuring.",
    options: ["False", "True"],
    answer: "a. False",
    explanation:
      "Resolution refers to the smallest detectable change, not the maximum change a sensor can measure.",
  },
  {
    id: "1-11",
    week: 1,
    question: "A Transducer is a ___ term and includes ___.",
    options: [
      "special, only sensors",
      "special, only actuators",
      "collective, both sensors and actuators",
      "None of these",
    ],
    answer: "c. collective, both sensors and actuators",
    explanation:
      "A transducer is a collective term for devices that convert energy, including both sensors and actuators.",
  },
  {
    id: "1-12",
    week: 1,
    question: "Which of the following is/are features of sensors?",
    options: [
      "It is only sensitive to the measured property.",
      "It acts on the surrounding environment.",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "a. It is only sensitive to the measured property.",
    explanation:
      "Sensors are designed to be sensitive only to specific measured properties and should not influence the environment.",
  },
  {
    id: "1-13",
    week: 1,
    question:
      "Which of the following technologies have unified and has resulted in the evolution of IoT?",
    options: [
      "Low-power embedded systems",
      "Cloud Computing",
      "Machine Learning",
      "All of these",
    ],
    answer: "d. All of these",
    explanation:
      "IoT evolution is driven by the integration of low-power embedded systems, cloud computing, and machine learning technologies.",
  },
  {
    id: "1-14",
    week: 1,
    question: "What is the full form of IoT?",
    options: [
      "Internet of Tasks",
      "Internet of Things",
      "Internet of Tracks",
      "None of these",
    ],
    answer: "b. Internet of Things",
    explanation:
      "IoT stands for Internet of Things, referring to the network of interconnected physical devices.",
  },
  {
    id: "1-15",
    week: 1,
    question: "A sensor node is not made up of which of the following?",
    options: [
      "Sensor/Sensors",
      "A processing unit",
      "A power unit",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "A sensor node typically includes sensors, a processing unit, and a power unit; all are essential components.",
  },

  // Week 2
  {
    id: "2-1",
    week: 2,
    question: "The full form of MQTT is:",
    options: [
      "Message Queue Telephone Transmission",
      "Message Query Telemetry Transport",
      "Message Queue Telemedicine Transport",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "MQTT stands for Message Queue Telemetry Transport, a lightweight messaging protocol for IoT.",
  },
  {
    id: "2-2",
    week: 2,
    question: "Which of the following is NOT a method in MQTT?",
    options: ["Break", "Stick", "Run", "All of these"],
    answer: "d. All of these",
    explanation:
      "Break, Stick, and Run are not standard MQTT methods; valid methods include Connect, Publish, and Subscribe.",
  },
  {
    id: "2-3",
    week: 2,
    question: "Which of the following is/are component/components of MQTT?",
    options: ["Publishers", "Subscribers", "Brokers", "All of these"],
    answer: "d. All of these",
    explanation:
      "MQTT architecture includes Publishers, Subscribers, and Brokers to manage message distribution.",
  },
  {
    id: "2-4",
    week: 2,
    question:
      "State whether the following statement is true or false: SMQTT is an extension of MQTT which uses lightweight attribute based encryption. It has three main stages.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "SMQTT uses attribute-based encryption but has four main stages, not three, for enhanced security.",
  },
  {
    id: "2-5",
    week: 2,
    question: "The OSI model has ___ layers.",
    options: ["6", "8", "Both (a) and (b)", "None of these"],
    answer: "d. None of these",
    explanation:
      "The OSI model has seven layers, not six or eight, defining a framework for network communication.",
  },
  {
    id: "2-6",
    week: 2,
    question: "The two sub-layers of CoAP are:",
    options: [
      "Messaging and Holding",
      "Messaging and Backoff",
      "Messaging and Teardown",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "CoAP consists of Messaging and Request/Response sub-layers, not the options listed.",
  },
  {
    id: "2-7",
    week: 2,
    question: "What is the full form of AMQP in the context of IoT protocol?",
    options: [
      "Another Message Queuing Protocol",
      "Anchored Message Queuing Protocol",
      "Adjoint Message Queuing Protocol",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "AMQP stands for Advanced Message Queuing Protocol, designed for reliable messaging in IoT.",
  },
  {
    id: "2-8",
    week: 2,
    question: "XMPP uses the ___ architecture.",
    options: [
      "Publish-subscribe",
      "Client-server",
      "Both (a) and (b)",
      "Neither (a) nor (b)",
    ],
    answer: "b. Client-server",
    explanation:
      "XMPP operates on a client-server model, facilitating real-time communication and data exchange.",
  },
  {
    id: "2-9",
    week: 2,
    question:
      "How many message delivery guarantee modes are there in the AMQP protocol?",
    options: ["2", "3", "4", "None of these"],
    answer: "b. 3",
    explanation:
      "AMQP supports three delivery modes: at-most-once, at-least-once, and exactly-once for reliable messaging.",
  },
  {
    id: "2-10",
    week: 2,
    question: "Which of the following is/are NOT an AMQP frame type?",
    options: ["Open", "Close", "Random", "None of these"],
    answer: "c. Random",
    explanation:
      "Open, Close, and End are valid AMQP frame types; Random is not defined in the protocol.",
  },
  {
    id: "2-11",
    week: 2,
    question:
      "State whether the following statement is true or false: IEEE 802.15.5 was developed for low data rate monitoring and control applications and extended life low power communication uses.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "IEEE 802.15.4, not 802.15.5, was developed for low data rate applications with low power requirements.",
  },
  {
    id: "2-12",
    week: 2,
    question: "Which of the following is/are exchange types in AMQP?",
    options: ["Direct", "Indirect", "Both (a) and (b)", "None of these"],
    answer: "a. Direct",
    explanation:
      "The AMQP exchange types include Direct, Fan-out, Topic, and Header exchanges.",
  },
  {
    id: "2-13",
    week: 2,
    question:
      "State whether the following statement is True or False: The IEEE 802.15.4 operates in ISM band.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "The IEEE 802.15.4 operates in the ISM band, providing license-free operation for low-rate wireless networks.",
  },
  {
    id: "2-14",
    week: 2,
    question: "The networking topologies supported in the IEEE 802.15.4 are:",
    options: ["Only Star", "Star and Mesh", "Only Mesh", "None of these"],
    answer: "b. Star and Mesh",
    explanation:
      "The networking topologies defined in IEEE 802.15.4 are star and mesh, providing flexible network organization.",
  },
  {
    id: "2-15",
    week: 2,
    question:
      "State whether the following statement is True or False: Generation of Route Requests (RREQs) by a LOADng Router for discovering a route to a destination is a valid operation of the LOADng routing protocol.",
    options: ["False", "True"],
    answer: "b. True",
    explanation:
      "Generation of Route Requests (RREQs) by a LOADng Router for route discovery is a valid operation of the LOADng routing protocol.",
  },

  // Week 3
  {
    id: "3-1",
    week: 3,
    question: "HART operates only in ___ GHz ISM band.",
    options: ["2.3", "4.8", "Both (a) and (b)", "None of these"],
    answer: "d. None of these",
    explanation: "HART operates only in 2.4 GHz ISM band, not 2.3 or 4.8 GHz.",
  },
  {
    id: "3-2",
    week: 3,
    question:
      "State whether the following statement is true or false: The HART physical layer is derived from IEEE 802.15.4 protocol and operates only in 2.5 GHz ISM band.",
    options: ["False", "True"],
    answer: "a. False",
    explanation:
      "The HART physical layer is derived from IEEE 802.15.4 protocol but operates in 2.4 GHz ISM band, not 2.5 GHz.",
  },
  {
    id: "3-3",
    week: 3,
    question:
      "State whether the following statement is True or False: Each node is supervised by the application manager and it guides them on when and where to send packets.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "The Network manager, not the application manager, supervises each node and guides packet transmission.",
  },
  {
    id: "3-4",
    week: 3,
    question:
      "___ identifies channels consistently affected by interference and removes them from use.",
    options: [
      "Channel hopping",
      "Channel aggregating",
      "Channel blacklisting",
      "Frequency aggregating",
    ],
    answer: "c. Channel Blacklisting",
    explanation:
      "Channel Blacklisting identifies channels consistently affected by interference and removes them from use.",
  },
  {
    id: "3-5",
    week: 3,
    question:
      "State whether the following statement is true or false: The Network Manager supervises each node in the network and guides them on when and where to send packets.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "The Network manager supervises each node in the network and guides them on when and where to send packets.",
  },
  {
    id: "3-6",
    week: 3,
    question:
      "Which layer of HART incorporates channel hopping and channel blacklisting?",
    options: [
      "Surface Layer",
      "Troposphere",
      "Data Link Layer",
      "None of these",
    ],
    answer: "c. Data Link Layer",
    explanation:
      "HART Data Link Layer incorporates channel hopping and channel blacklisting.",
  },
  {
    id: "3-7",
    week: 3,
    question: "WirelessHART relies on ___ for its communication.",
    options: [
      "Star networking",
      "Bus networking",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "WirelessHART relies on mesh networking, providing redundant paths and self-healing capabilities.",
  },
  {
    id: "3-8",
    week: 3,
    question:
      "State whether the following statement is true or false: NFC devices work on the principle of magnetic introduction.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "NFC devices work on the principle of magnetic induction, not magnetic introduction.",
  },
  {
    id: "3-9",
    week: 3,
    question:
      "Bluetooth technology is based on Ad-hoc technology also known as ___.",
    options: [
      "Ad-hoc meshnet",
      "Ad-hoc Piconets",
      "Ad-hoc starnet",
      "None of these",
    ],
    answer: "b. Ad-hoc Piconets",
    explanation:
      "Bluetooth technology is based on Ad-hoc technology also known as Ad-hoc Piconets.",
  },
  {
    id: "3-10",
    week: 3,
    question:
      "State whether the following statement is true or false: Booking in Bluetooth is the process of forming a connection between two Bluetooth devices.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Paging, not booking, in Bluetooth is the process of forming a connection between two Bluetooth devices.",
  },
  {
    id: "3-11",
    week: 3,
    question:
      "State whether the following statement is true or false: Class 1 Bluetooth radios are used primarily in industrial use cases and have a range of 100 meters or 300 feet.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "Class 1 Bluetooth radios are used primarily in industrial use cases and have a range of 100 meters or 300 feet.",
  },
  {
    id: "3-12",
    week: 3,
    question: "Zwave uses ___ topology.",
    options: ["Ring", "Star", "Mesh", "None of these"],
    answer: "c. Mesh",
    explanation:
      "Zwave uses Mesh topology, creating self-healing networks with multiple communication paths.",
  },
  {
    id: "3-13",
    week: 3,
    question: "Which of the following is an OS for sensor nodes?",
    options: ["MicroOS", "LiteOS", "TinyOS", "None of these"],
    answer: "c. TinyOS",
    explanation:
      "TinyOS is an OS for sensor nodes, designed for low-power wireless devices.",
  },
  {
    id: "3-14",
    week: 3,
    question:
      "State whether the following statement is true or false: Selfish nodes are typified by their unwillingness to cooperate, as the protocol requires whenever there is a personal cost involved.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "Selfish nodes are typified by their unwillingness to cooperate when there's personal cost involved.",
  },
  {
    id: "3-15",
    week: 3,
    question:
      "Dumb behavior of sensor nodes is ___ in nature (as it is dependent on the effects of the environmental conditions).",
    options: ["Temporal", "Spatial", "Both (a) and (b)", "None of these"],
    answer: "a. Temporal",
    explanation:
      "Dumb behavior of sensor nodes is Temporal in nature as it depends on environmental condition effects over time.",
  },

  // Week 4
  {
    id: "4-1",
    week: 4,
    question: "If transmission range > 2* sensing range,",
    options: [
      "Coverage implies connectivity",
      "Coverage implies greater coverage",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "If transmission range >= 2* sensing range, coverage implies connectivity.",
  },
  {
    id: "4-2",
    week: 4,
    question:
      "What is the full form of AUV in the context of mobile wireless sensor networks?",
    options: [
      "Aerial and Underwater Vehicle",
      "Ambient and Underprivileged Vehicle",
      "Astronomical Underwater Vehicle",
      "None of these",
    ],
    answer: "d. None of these",
    explanation: "The full form of AUV is Autonomous Underwater Vehicle.",
  },
  {
    id: "4-3",
    week: 4,
    question:
      "State whether the following statement is true or false: Agricultural intrusion detection uses NFC sensors.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Agricultural intrusion detection uses PIR and Ultrasonic sensors, not NFC sensors.",
  },
  {
    id: "4-4",
    week: 4,
    question:
      "The objective of coverage in WSN is to use a ___ number of sensors and ___ the network lifetime.",
    options: [
      "minimum, minimize",
      "maximum, minimize",
      "maximum, maximize",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "The objective of coverage in WSN is to use minimum number of sensors and maximize the network lifetime.",
  },
  {
    id: "4-5",
    week: 4,
    question: "WSN in agriculture uses what for processing?",
    options: [
      "Microprocessor",
      "Microcontroller",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "b. Microcontroller",
    explanation: "WSN in agriculture uses Microcontroller for processing.",
  },
  {
    id: "4-6",
    week: 4,
    question:
      "Which of the following is/are options for communication among nanodevices?",
    options: [
      "Electromagnetic",
      "Molecular",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "c. Both (a) and (b)",
    explanation:
      "Electromagnetic and molecular are options for communication among nanodevices.",
  },
  {
    id: "4-7",
    week: 4,
    question:
      "State whether the following statement is true or false: Voluntary Sensing allows distributed sensing carried by humans and the goal is not just to collect data but to allow the common people to assess and share the knowledge.",
    options: ["False", "True"],
    answer: "a. False",
    explanation:
      "Participatory sensing, not voluntary sensing, allows distributed sensing carried by humans.",
  },
  {
    id: "4-8",
    week: 4,
    question:
      "State whether the following statement is true or false: UAV networks use a ring topology.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "UAV networks use mesh or star networks, not ring topology.",
  },
  {
    id: "4-9",
    week: 4,
    question: "In multi-UAV networks, the scalability is ___.",
    options: ["Low", "Very Low", "Poor", "None of these"],
    answer: "d. None of these",
    explanation: "In multi-UAV networks, the scalability is high.",
  },
  {
    id: "4-10",
    week: 4,
    question: "Single UAV system uses ___ antenna.",
    options: [
      "Uni-directional",
      "Omni-directional",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "b. Omni-directional",
    explanation: "A Single UAV system uses omnidirectional antenna.",
  },
  {
    id: "4-11",
    week: 4,
    question:
      "Which of the following is/are constraint/constraints of UAV network?",
    options: [
      "Infrequent link breakages",
      "Malfunction",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "b. Malfunction",
    explanation:
      "Frequent link breakages and malfunction are constraints of UAV network.",
  },
  {
    id: "4-12",
    week: 4,
    question: "Low-end sensor nodes are:",
    options: [
      "Whose deployment has high density in order to increase network lifetime and survivability.",
      "Who perform basic functions such as data aggregation, auto configuration, and power saving.",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "c. Both (a) and (b)",
    explanation:
      "Low-end sensor nodes are deployed in high density and perform basic functions.",
  },
  {
    id: "4-13",
    week: 4,
    question:
      "State whether the following statement is true or false: FANETs are flying ad hoc networks.",
    options: ["True", "False"],
    answer: "a. True",
    explanation: "FANETs are flying ad hoc networks.",
  },
  {
    id: "4-14",
    week: 4,
    question:
      "State whether the following statement is true or false: SCADA is designed for isolated systems using proprietary solutions, whereas M2M is designed for cross-platform integration.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "SCADA uses isolated proprietary systems while M2M enables cross-platform integration.",
  },
  {
    id: "4-15",
    week: 4,
    question:
      "State whether the following statement is true or false: Low-end sensor nodes are static, energy-hungry, and complex.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Low-end sensor nodes are static, energy-efficient and simple.",
  },

  // Week 5
  {
    id: "5-1",
    week: 5,
    question: "Why is interoperability in IoT an issue?",
    options: [
      "IoT nodes are heterogeneous hence they communicate in different protocols",
      "IoT nodes are homogeneous and communicate with the same protocol",
      "IoT nodes do not communicate.",
      "IoT nodes are small.",
    ],
    answer:
      "a. IoT nodes are heterogeneous hence they communicate in different protocols",
    explanation:
      "Interoperability is challenging because IoT nodes are heterogeneous and use different communication protocols.",
  },
  {
    id: "5-2",
    week: 5,
    question: "UNSPSC provides a solution for which of the following?",
    options: [
      "Manufacturing",
      "Supply Chain",
      "Classification",
      "Communication",
    ],
    answer: "c. Classification",
    explanation: "UNSPSC provides a solution for classification.",
  },
  {
    id: "5-3",
    week: 5,
    question:
      "Arduino development boards are equipped with micro-controller processors which are ___ with respect to their hardware configurations.",
    options: ["closed source", "open source", "forward source", "up sourced"],
    answer: "b. open source",
    explanation:
      "Arduino development boards use open source hardware configurations.",
  },
  {
    id: "5-4",
    week: 5,
    question:
      "Translation of inter-device communication forms an important part in solving device interoperability.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "Translation of inter-device communication is crucial for solving device interoperability.",
  },
  {
    id: "5-5",
    week: 5,
    question:
      "With respect to the different wireless communication protocols such as Zigbee, Bluetooth, GPRS, 6LoWPAN and WiFi, which of the following terms can be associated with?",
    options: [
      "Homogeneity",
      "Heterogeneity",
      "Self Service",
      "All of the given",
    ],
    answer: "b. Heterogeneity",
    explanation:
      "Different wireless protocols represent heterogeneity in IoT communication.",
  },
  {
    id: "5-6",
    week: 5,
    question: "Which among the following are valid Arduino datatypes?",
    options: ["byte", "char", "Boolean", "All of the given"],
    answer: "d. All of the given",
    explanation: "byte, char, and Boolean are all valid Arduino datatypes.",
  },
  {
    id: "5-7",
    week: 5,
    question:
      "What is the purpose of the delay() function in Arduino programming?",
    options: [
      "To speed up the execution",
      "To terminate the program",
      "To reset all parameters",
      "To make the program go to sleep for a certain duration.",
    ],
    answer: "d. To make the program go to sleep for a certain duration.",
    explanation:
      "The delay() function makes the program go to sleep for a specified duration.",
  },
  {
    id: "5-8",
    week: 5,
    question:
      "Consider the following Arduino code snippet. What will be the value of String ptr?",
    code: 'String str = "HelloWorld";\nString ptr = str.toUpperCase();',
    options: ["HelloWorld", "helloworld", "HELLOWORLD", "WORLDHELLO"],
    answer: "c. HELLOWORLD",
    explanation:
      "The toUpperCase() method converts all characters to uppercase.",
  },
  {
    id: "5-9",
    week: 5,
    question:
      "What does the following code snippet do in interfacing a servo motor with the Arduino MEGA board?",
    code: "int servoPin = 12;",
    options: [
      "Declares pin for connecting servo motor",
      "Declares pin for providing power to MEGA board",
      "Declares pin for Ground supply for servo motor",
      "None of these",
    ],
    answer: "a. Declares pin for connecting servo motor",
    explanation:
      "int servoPin = 12; declares pin 12 for connecting servo motor.",
  },
  {
    id: "5-10",
    week: 5,
    question:
      "State True or False: 'The 'Verify' option in the Arduino IDE checks the code for compilation errors.'",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "The 'Verify' option in the Arduino IDE checks the code for compilation errors.",
  },
  {
    id: "5-11",
    week: 5,
    question:
      "The tool used to select a particular COM port for connecting Arduino to a serial connector is called a sketch.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Sketch in Arduino is the program code, not the tool for selecting COM ports.",
  },
  {
    id: "5-12",
    week: 5,
    question:
      "In general, with respect to any sensor that can be connected to an Arduino board, which of the following is correct?",
    options: [
      "The sensor has infinite number of connecting pins",
      "The sensor will have at least 3 pins (1 +Vcc, 1 GND and 1 Data pin)",
      "The sensor need not connect to the Arduino board.",
      "The sensor will always have exactly 5 pins.",
    ],
    answer:
      "b. The sensor will have at least 3 pins (1 Vcc, 1 GND and 1 Data pin)",
    explanation:
      "Sensors typically have at least 3 pins: power, ground, and data pin.",
  },
  {
    id: "5-13",
    week: 5,
    question:
      "You connect the +Vcc PIN of a sensor with which of the corresponding PIN of Arduino board.",
    options: ["3V", "GND", "PIN A5", "PIN CTX"],
    answer: "a. 3V",
    explanation:
      "The +Vcc pin of a sensor connects to the 3V pin on Arduino board.",
  },
  {
    id: "5-14",
    week: 5,
    question: "Servo is a type of ___.",
    options: ["Sensor", "Actuator", "Modifier", "Pacifier"],
    answer: "b. Actuator",
    explanation:
      "Servo is a type of actuator that converts electrical signals into mechanical movement.",
  },
  {
    id: "5-15",
    week: 5,
    question:
      "While uploading a sketch to an Arduino board, which of the following should be checked?",
    options: [
      "Board",
      "Serial Port",
      "Both Board and Serial Port",
      "Neither Board nor Serial Port.",
    ],
    answer: "c. Both Board and Serial Port",
    explanation:
      "Both Board type and Serial Port must be checked before uploading.",
  },

  // Week 6
  {
    id: "6-1",
    week: 6,
    question:
      "Python programming language can be easily interfaced with different IoT hardware?",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "Python can be easily interfaced with various IoT hardware due to its extensive libraries.",
  },
  {
    id: "6-2",
    week: 6,
    question:
      "Consider the following Python instruction. Is the above a valid Python instruction?",
    code: "aa, bb, cc = 34, [12,23,34], 56.89",
    options: ["Yes", "No"],
    answer: "a. Yes",
    explanation: "This is valid Python multiple assignment syntax.",
  },
  {
    id: "6-3",
    week: 6,
    question:
      "Which of the following is a valid conditional construct instruction in Python?",
    options: ["else-if", "elif", "elif", "ele"],
    answer: "b. elif",
    explanation: "'elif' is the valid conditional construct in Python.",
  },
  {
    id: "6-4",
    week: 6,
    question:
      "Consider the following Python code snippet. Assume Python v3. What will be printed?",
    code: 'with open("hello.txt", "w+") as f:\n  f.write("I am learning Python programming")\n  f.seek(0)\n  lines = f.readline()\n  result = lines[2]\n  print(result)',
    options: ["'I am'", "'I'", "'a'", "'am'"],
    answer: "c. 'a'",
    explanation:
      "lines[2] accesses the third character (index 2) of the string, which is 'a' from \"I am learning Python programming\".",
  },
  {
    id: "6-5",
    week: 6,
    question: "Which of the following is a mode to open a file in Python?",
    options: ["Read mode", "Write mode", "Append mode", "All of these"],
    answer: "d. All of these",
    explanation:
      "Python supports read, write, and append modes for file operations.",
  },
  {
    id: "6-6",
    week: 6,
    question: "What does the following line of code do?",
    code: "GPIO.output(11, True)",
    options: [
      "Sets GPIO 11 as output pin",
      "Turns on GPIO pin 11",
      "Neither (a) nor (b)",
      "Both (a) and (b)",
    ],
    answer: "b. Turns on GPIO pin 11",
    explanation: "GPIO.output(11, True) turns on GPIO pin 11.",
  },
  {
    id: "6-7",
    week: 6,
    question:
      "What is the utility of the 'pip' instruction with respect to Python programming?",
    options: [
      "To act as a package installer",
      "To delete the Python version",
      "To change from Python v2 to v3",
      "None of the given",
    ],
    answer: "a. To act as a package installer",
    explanation: "'pip' is Python's package installer.",
  },
  {
    id: "6-8",
    week: 6,
    question:
      "Suppose you have used the sock.bind(server_address) while writing programs with sockets in Python. With respect to this, which among the following is a valid initialization of the server_address object?",
    options: [
      "(1223,1223)",
      "('10.12.56.34',1223)",
      "('12.56.78.221', '10.12.34.56')",
      "(1223, '67.34.56.7789')",
    ],
    answer: "b. ('10.12.56.34',1223)",
    explanation:
      "server_address tuple contains IP address as string and port number as integer.",
  },
  {
    id: "6-9",
    week: 6,
    question:
      "Where do you store the image file of the Raspberry Pi OS before using it to execute the OS on the Pi?",
    options: [
      "Over the cloud",
      "Directly on the Pi motherboard",
      "Inside a memory card attached to the Pi",
      "OS is installed through wireless means",
    ],
    answer: "c. Inside a memory card attached to the Pi",
    explanation: "Raspberry Pi OS image is stored on a memory card.",
  },
  {
    id: "6-10",
    week: 6,
    question:
      "With which of the following remote access mechanism can you access a Raspberry Pi from your laptop computer?",
    options: ["ssp", "ssh", "ssj", "ssd"],
    answer: "b. ssh",
    explanation: "SSH enables remote access to Raspberry Pi.",
  },
  {
    id: "6-11",
    week: 6,
    question:
      "Fill in the blanks. Raspberry Pi 3 Model B has a GPU support of ___.",
    options: [
      "400 MHz video core IV",
      "250 MHz video core IV",
      "Quad cortex A53@1.2GHz",
      "ARM 11 @ 1 GHz",
    ],
    answer: "a. 400 MHz video core IV",
    explanation:
      "Raspberry Pi 3 Model B has a GPU support of 400 MHz video core IV.",
  },
  {
    id: "6-12",
    week: 6,
    question:
      "What is the data type of the variable ls in the following piece of Python code?",
    code: "ls = {1:2, 3:4, 5:6, 7:8}",
    options: ["dictionary", "list", "tuple", "All of these"],
    answer: "a. dictionary",
    explanation:
      "The curly braces and key-value pairs indicate a dictionary data type.",
  },
  {
    id: "6-13",
    week: 6,
    question:
      "Consider the image as given below. Which among the following component is highlighted within the red box in the image?",
    options: ["Raspberri Pi", "Raspbian", "Raspberry Pi Camera", "GPIO pins"],
    answer: "c. Raspberry Pi Camera",
    explanation:
      "The highlighted portion shows a standard Raspberry Pi camera module.",
  },
  {
    id: "6-14",
    week: 6,
    question:
      "Relay is a type of actuator which can be used with Arduino but not with Raspberry Pi.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "Relays can be used with both Arduino and Raspberry Pi.",
  },
  {
    id: "6-15",
    week: 6,
    question:
      "State whether the following statement is true or false: Python allows us to only read files. Writing to files is not possible.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "Python allows both reading from and writing to files.",
  },

  // Week 7
  {
    id: "7-1",
    week: 7,
    question:
      "A Raspberry Pi can read data from a sensor but cannot send it over to a remote server for further processing.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Raspberry Pi can both read sensor data and send it to remote servers.",
  },
  {
    id: "7-2",
    week: 7,
    question:
      "In Python socket programming, with respect to the sock.bind(server_address) function, which among the following does the variable server_address contain?",
    options: [
      "IP address of destination",
      "Port number of destination server",
      "Neither IP address nor port number of destination server",
      "Both IP address and port number of destination server",
    ],
    answer: "d. Both IP address and port number of destination server",
    explanation: "server_address contains both IP address and port number.",
  },
  {
    id: "7-3",
    week: 7,
    question:
      "In Python matplotlib, in order to display the graphical plot on a terminal, the command plt.plot() is used in conjunction with which of the following?",
    options: ["plt.plot()", "plt.show()", "plt.xtics()", "plt.axes()"],
    answer: "b. plt.show()",
    explanation: "plt.show() displays the graphical plot on screen.",
  },
  {
    id: "7-4",
    week: 7,
    question:
      "The following Python code displays a parabolic plot using matplotlib. Will the code plot the desired parabola?",
    code: 'import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(-10, 10, 400)\ny = x**2\n\nplt.figure(figsize=(8, 6))\nplt.xlabel("x", fontname="Times New Roman", fontsize=12)\nplt.ylabel("y", fontname="Times New Roman", fontsize=12)\nplt.title("Plot of a Parabola: $y = x^2$", fontname="Times New Roman", fontsize=14)\nplt.grid(True)\nplt.legend(loc="upper left")\nplt.axhline(0, color=\'black\', linewidth=0.5) # x-axis\nplt.axvline(0, color=\'black\', linewidth=0.5) # y-axis\nplt.show()',
    options: ["Yes", "No"],
    answer: "b. No",
    explanation:
      "The code misses plt.plot() method, which is essential for actually plotting the data points.",
  },
  {
    id: "7-5",
    week: 7,
    question:
      "With respect to the above Question (Question 4), which must be added to make the code display the parabola?",
    options: [
      "Nothing, the code works fine",
      "plt.xtics() method",
      "plt.plot() method",
      "plt.setfigure() method",
    ],
    answer: "c. plt.plot() method",
    explanation:
      "plt.plot() method must be added to create the actual plot line.",
  },
  {
    id: "7-6",
    week: 7,
    question:
      "In Python, suppose that string text = 'It is my#birthday!I am*Happy'. What will the output of the following instruction? `print(text.split(' ')[1])`",
    options: [
      "It is my#birthday!I am*Happy",
      "my#birthday!I",
      "am*Happy",
      "It is",
    ],
    answer: "b. my#birthday!I",
    explanation:
      "split(' ') splits on space, creating list elements. `data[1]` accesses the second element 'my#birthday!I'.",
  },
  {
    id: "7-7",
    week: 7,
    question:
      "Consider the same text again: text = 'It is my#birthday!I am*Happy'. What will be the output? `print(text.split('r')[1].split('bi'))`",
    options: ["my#birth", "*Happy", "thday!I am*Happy", "It is"],
    answer: "c. thday!I am*Happy",
    explanation:
      "First split on 'r' creates ['It is my#bi', 'thday!I am*Happy'], then split('bi') on second element gives ['thday!I am*Happy'].",
  },
  {
    id: "7-8",
    week: 7,
    question:
      "With respect to SDN for IoT what does 'end-devices' in the phrase 'control for end-devices' mean?",
    options: [
      "SDN Controllers",
      "SDN Switches",
      "Sensors and Actuators",
      "Database",
    ],
    answer: "c. Sensors and Actuators",
    explanation:
      "In SDN for IoT, 'end-devices' refer to sensors and actuators.",
  },
  {
    id: "7-9",
    week: 7,
    question:
      "A Network Operating System (NOS) resides in which of the following logical plane?",
    options: [
      "Application Plane",
      "Control Plane",
      "Data Plane",
      "Both Data Plane as well as Application Plane",
    ],
    answer: "b. Control Plane",
    explanation: "Network Operating System resides in the Control Plane.",
  },
  {
    id: "7-10",
    week: 7,
    question:
      "Consider the figure of the network. Which of the following network topologies does this figure relate to?",
    image: meshArchitectureImage,
    options: [
      "Ring topology",
      "Bus topology",
      "Mesh topology",
      "Tree topology",
    ],
    answer: "c. Mesh topology",
    explanation:
      "The figure shows multiple interconnected paths between nodes.",
  },
  {
    id: "7-11",
    week: 7,
    question:
      "With respect to the same figure, what does the blue directional dotted arrows from the controller to the switches represent?",
    image: meshArchitectureImage,
    options: [
      "Northbound API",
      "Southbound API",
      "Eastbound API",
      "Westbound API",
    ],
    answer: "b. Southbound API",
    explanation:
      "Blue arrows from controller to switches represent Southbound API.",
  },
  {
    id: "7-12",
    week: 7,
    question:
      "Consider the figure showing a table of SDN rules. To which issue of SDN does this particular figure can be related to?",
    image: meshFlowRulesImage,
    options: [
      "Controller placement issue",
      "Flow Rule placement issue",
      "Hardware placement issue",
      "Analysis placement issue",
    ],
    answer: "b. Flow Rule placement issue",
    explanation: "The figure shows flow rule tables in switches.",
  },
  {
    id: "7-13",
    week: 7,
    question:
      "Which among the following is the most suitable utility of Mininet?",
    options: [
      "To act as a virtual sensor",
      "To provide a simulation environment for SDN with OpenFlow",
      "To act as a generic antenna simulator",
      "To perform load testing and analysis.",
    ],
    answer: "b. To provide a simulation environment for SDN with OpenFlow",
    explanation:
      "Mininet provides SDN simulation environment with OpenFlow support.",
  },
  {
    id: "7-14",
    week: 7,
    question:
      "Control of end devices such as sensors and actuators do not form a use-case for Software Defined IoT.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Control of end devices is indeed a use-case for Software Defined IoT.",
  },
  {
    id: "7-15",
    week: 7,
    question:
      "With respect to packet delivery ratio, which of the following is true?",
    options: [
      "WSN outperforms Soft-WSN",
      "Soft-WSN outperforms WSN",
      "Neither of Soft-WSN and WSN outperform each other",
      "No relation between Soft-WSN and WSN",
    ],
    answer: "b. Soft-WSN outperforms WSN",
    explanation:
      "Soft-WSN typically outperforms traditional WSN in packet delivery ratio.",
  },

  // Week 8
  {
    id: "8-1",
    week: 8,
    question:
      "Which of the following is true with respect to Network Virtualization?",
    options: [
      "It abstracts the virtual network on a physical network",
      "It abstracts the physical network on a virtual network",
      "It is essentially a collection of physical SDN routers",
      "Network virtualization is a non-existent concept.",
    ],
    answer: "b. It abstracts the physical network on a virtual network",
    explanation:
      "Network virtualization abstracts physical network resources to create virtual networks.",
  },
  {
    id: "8-2",
    week: 8,
    question:
      "For rule placement at the edge with respect to Software Defined IoT, which of the following is a critical issue that is required to be addressed?",
    options: [
      "Existence of IoT nodes",
      "Data through routers",
      "Mobility of end users and nodes",
      "None of the given.",
    ],
    answer: "c. Mobility of end users and nodes",
    explanation:
      "Mobility of end users and nodes is critical for edge rule placement.",
  },
  {
    id: "8-3",
    week: 8,
    question:
      "Which cloud service model allows users to deploy and control their own software, including operating systems, while the provider manages the infrastructure?",
    options: ["SaaS", "PaaS", "IaaS", "DBaaS"],
    answer: "c. IaaS",
    explanation:
      "IaaS allows users to deploy and control their own software and OS.",
  },
  {
    id: "8-4",
    week: 8,
    question:
      "Which of the following is NOT a characteristic of Platform-as-a-Service (PaaS)?",
    options: [
      "Provides tools for application deployment",
      "Requires users to manage the virtual machines",
      "Offers elastic scaling of applications",
      "Simplifies development by abstracting the infrastructure",
    ],
    answer: "b. Requires users to manage the virtual machines",
    explanation:
      "PaaS abstracts infrastructure management; users don't manage VMs directly.",
  },
  {
    id: "8-5",
    week: 8,
    question:
      "Which essential characteristic of cloud computing refers to the ability of resources to be scaled up or down automatically?",
    options: [
      "Resource pooling",
      "Broad network access",
      "Elasticity",
      "None of the given",
    ],
    answer: "c. Elasticity",
    explanation:
      "Elasticity enables automatic scaling of resources based on demand.",
  },
  {
    id: "8-6",
    week: 8,
    question:
      "An organization wants to deploy a hybrid cloud. In this context which among the following deployment model should be used?",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
    answer: "c. Hybrid Cloud",
    explanation:
      "Hybrid cloud combines public cloud for general data and private cloud for sensitive data.",
  },
  {
    id: "8-7",
    week: 8,
    question:
      "A Private Cloud deployment model cannot provide IaaS but can provide PaaS.",
    options: ["False", "True"],
    answer: "a. False",
    explanation:
      "Private cloud can provide all service models including IaaS, PaaS, and SaaS.",
  },
  {
    id: "8-8",
    week: 8,
    question:
      "What is the primary function of a Light Virtual Access Point (LVAP) in the ODIN architecture for SDN-based IoT?",
    options: [
      "Acts as a firewall between user devices and access points",
      "Enables virtualization of Wi-Fi APs for per-client network control",
      "Encrypts user traffic before forwarding to the cloud",
      "Controls routing at the backbone of the network",
    ],
    answer:
      "b. Enables virtualization of Wi-Fi APs for per-client network control",
    explanation:
      "LVAP virtualizes Wi-Fi access points for per-client network control.",
  },
  {
    id: "8-9",
    week: 8,
    question:
      "With respect to Virtualization, if one VM runs on a hypervisor, another VM is unable to use the hypervisor.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "Multiple VMs can run simultaneously on the same hypervisor.",
  },
  {
    id: "8-10",
    week: 8,
    question:
      "Through which of the following cloud service model, do you use an image editing application without explicitly installing the said application on your local system?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: "a. SaaS",
    explanation:
      "SaaS delivers applications over the internet without local installation.",
  },
  {
    id: "8-11",
    week: 8,
    question:
      "Which of the following best defines 'measured service' in cloud computing?",
    options: [
      "Cloud resources are billed only annually",
      "Users must request reports manually for resource usage",
      "Cloud systems automatically control and optimize resources based on metering",
      "None of the given",
    ],
    answer:
      "c. Cloud systems automatically control and optimize resources based on metering",
    explanation:
      "Measured service automatically monitors, controls, and reports resource usage.",
  },
  {
    id: "8-12",
    week: 8,
    question:
      "With respect to Cloud security, which of the following is expected to have a higher level of security than the other in a very generic sense, on the assumption that on-premise data storage generally is more secure than off-premise data storage.",
    options: ["Public Cloud", "Private Cloud"],
    answer: "b. Private Cloud",
    explanation:
      "Private cloud typically offers higher security as data resides on-premise.",
  },
  {
    id: "8-13",
    week: 8,
    question:
      "Data security and client authentication is an issue in which of the following cloud service models?",
    options: ["SaaS", "SaaS and PaaS", "IaaS", "All of them"],
    answer: "d. All of them",
    explanation:
      "Data security and authentication are concerns across all cloud service models.",
  },
  {
    id: "8-14",
    week: 8,
    question:
      "In cloud computing, the users have specific knowledge about the exact physical location of the computing hardware with respect to the cloud services.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "Cloud computing abstracts physical infrastructure details.",
  },
  {
    id: "8-15",
    week: 8,
    question:
      "GreenCloud implementation focuses most on which of the following aspects?",
    options: ["Scalability", "Energy", "Reversibility", "Computation"],
    answer: "b. Energy",
    explanation: "GreenCloud focuses on energy efficiency in cloud computing.",
  },

  // Week 9
  {
    id: "9-1",
    week: 9,
    question: "Fog is the layer between which two layers?",
    options: [
      "Application and Presentation",
      "Network and Transport",
      "Cloud and IoT",
      "Transport and Session",
    ],
    answer: "c. Cloud and IoT",
    explanation: "Fog computing layer sits between Cloud and IoT devices.",
  },
  {
    id: "9-2",
    week: 9,
    question: "Which of the following is/are the actors in sensor-cloud?",
    options: [
      "Users",
      "Sensor-owner",
      "SCSP Sensor-Cloud Service Provider (SCSP)",
      "All of the above",
    ],
    answer: "d. All of the above",
    explanation:
      "Sensor-cloud involves multiple actors: end users, sensor-owners, and SCSP.",
  },
  {
    id: "9-3",
    week: 9,
    question:
      "Which of the following are considered key limitations of Wireless Sensor Networks (WSNs)?",
    options: [
      "Cost of sensor nodes",
      "Physical deployment of sensors",
      "Both a and b",
      "Neither a nor b",
    ],
    answer: "c. Both a and b",
    explanation:
      "WSNs face limitations including sensor node costs and deployment challenges.",
  },
  {
    id: "9-4",
    week: 9,
    question:
      "Which of the following takes the decision whether the data should be provided directly to the end user or is it required to re-cache the data from external cache?",
    options: ["User cache", "Sensor cache", "External cache", "Internal Cache"],
    answer: "d. Internal Cache",
    explanation:
      "Internal Cache decides whether to serve data directly or fetch from external cache.",
  },
  {
    id: "9-5",
    week: 9,
    question:
      "Fill in the blanks: The ___ extends the cloud nearer the IoT devices.",
    options: ["Sensors", "Fogging", "Neither a nor b", "Both a and b"],
    answer: "b. Fogging",
    explanation: "Fogging extends cloud capabilities closer to IoT devices.",
  },
  {
    id: "9-6",
    week: 9,
    question:
      "Which of the following is/are the types of data with respect to sensitivity.",
    options: [
      "Time-sensitive",
      "Less time-sensitive",
      "Not time-sensitive",
      "All of these",
    ],
    answer: "d. All of these",
    explanation:
      "Data sensitivity categories include time-sensitive, less time-sensitive, and not time-sensitive.",
  },
  {
    id: "9-7",
    week: 9,
    question: "Who coined the term Fog computing?",
    options: ["IBM", "CISCO", "Both a and b", "Neither a nor b"],
    answer: "b. CISCO",
    explanation: "CISCO coined the term Fog computing.",
  },
  {
    id: "9-8",
    week: 9,
    question: "What of the following is an advantage of fog computing?",
    options: [
      "Anywhere deployability",
      "Mobility",
      "Both a and b",
      "Neither a nor b",
    ],
    answer: "c. Both a and b",
    explanation: "Fog computing supports anywhere deployability and mobility.",
  },
  {
    id: "9-9",
    week: 9,
    question: "State True or False: Openstack is an open-source software.",
    options: ["True", "False"],
    answer: "a. True",
    explanation: "Openstack is open-source cloud computing software.",
  },
  {
    id: "9-10",
    week: 9,
    question: "To what are the fog nodes connected to?",
    options: ["IoT devices", "Cloud", "Neither a nor b", "Both a and b"],
    answer: "d. Both a and b",
    explanation: "Fog nodes connect to both IoT devices and Cloud.",
  },
  {
    id: "9-11",
    week: 9,
    question: "Which of the following reduces danger and increases output?",
    options: [
      "Static analysis",
      "Static decision making",
      "Both a and b",
      "Neither a nor b",
    ],
    answer: "d. Neither a nor b",
    explanation:
      "Dynamic analysis and decision making reduce danger and increase output.",
  },
  {
    id: "9-12",
    week: 9,
    question:
      "Fill in the blanks. Fog computing is an intermediate layer between ___ and ___.",
    options: [
      "Dew and devices",
      "Cloud and devices",
      "Cloud and server",
      "None of these",
    ],
    answer: "b. Cloud and devices",
    explanation: "Fog computing sits between Cloud and devices.",
  },
  {
    id: "9-13",
    week: 9,
    question: "Unnecessary sensing causes energy consumption.",
    options: ["True", "False"],
    answer: "a. True",
    explanation: "Unnecessary sensing operations consume energy unnecessarily.",
  },
  {
    id: "9-14",
    week: 9,
    question:
      "Which of the following is used by the fog applications to increase the speed of service accessibility?",
    options: [
      "Low power",
      "Good network connection",
      "Accelerators",
      "Analytics",
    ],
    answer: "c. Accelerators",
    explanation:
      "Accelerators increase service accessibility speed in fog applications.",
  },
  {
    id: "9-15",
    week: 9,
    question:
      "Fill in the blank. The concept of ___ enables physical hardware to be shared among multiple entities.",
    options: [
      "Hardware virtualization",
      "Software virtualization",
      "Module virtualization",
      "All of these",
    ],
    answer: "a. Hardware virtualization",
    explanation: "Hardware virtualization enables physical hardware sharing.",
  },

  // Week 10
  {
    id: "10-1",
    week: 10,
    question: "DLNA (used in HAN standards) expands to:",
    options: [
      "Digital Lifestyle Network Alliance",
      "Digital Living Network Alliance",
      "Digital Lifestyle Network Algorithm",
      "None of these",
    ],
    answer: "b. Digital Living Network Alliance",
    explanation: "DLNA = Digital Living Network Alliance.",
  },
  {
    id: "10-2",
    week: 10,
    question:
      "Which property best characterizes V2X? Vehicle-to-Everything(V2X)",
    options: [
      "Restricted to a single source",
      "Distributed architecture",
      "Both a and b",
      "Neither a nor b",
    ],
    answer: "b. Distributed architecture",
    explanation: "V2X follows a distributed architecture.",
  },
  {
    id: "10-3",
    week: 10,
    question: "Which set correctly captures smart-home functionality?",
    options: [
      "Health monitoring only",
      "Security only",
      "Both health monitoring and security",
      "Neither",
    ],
    answer: "c. Both health monitoring and security",
    explanation:
      "Smart homes include both health monitoring and security functionalities.",
  },
  {
    id: "10-4",
    week: 10,
    question: "Which are valid types of sensing?",
    options: ["Stationary", "Mobile", "Both a and b", "None of these"],
    answer: "c. Both a and b",
    explanation: "Sensing can be stationary or mobile.",
  },
  {
    id: "10-5",
    week: 10,
    question: "Which layers are part of the Zigbee stack?",
    options: [
      "Physical and transport",
      "MAC and transport",
      "Network and MAC",
      "Transport and MAC",
    ],
    answer: "c. Network and MAC",
    explanation: "Zigbee includes Physical, MAC, and Network layers.",
  },
  {
    id: "10-6",
    week: 10,
    question: "Smart parking primarily reduces traffic ___.",
    options: ["mobility", "area", "analysis", "congestion"],
    answer: "d. congestion",
    explanation: "Smart parking reduces traffic congestion.",
  },
  {
    id: "10-7",
    week: 10,
    question:
      "About Home Area Network (HAN), consider: I) Multi-protocol gateway bridges non-IP to IP. II) Wired HAN is low cost. III) Wireless HAN makes implementation easy. Which of these is correct?",
    options: ["Only I", "I and II only", "I and III only", "I, II, and III"],
    answer: "d. I, II, and III",
    explanation: "All three statements are correct.",
  },
  {
    id: "10-8",
    week: 10,
    question:
      "Which statements about smart health are true? I) Low-cost and portable II) Allows remote check-ups and diagnosis III) Effortless health monitoring",
    options: ["I only", "II only", "I, II, and III", "None of these"],
    answer: "c. I, II, and III",
    explanation: "All listed properties are true for smart health.",
  },
  {
    id: "10-9",
    week: 10,
    question:
      "Phases of Intelligent Connected Vehicle (ICV) development include:",
    options: [
      "Based on 2G",
      "Based on 4G LTE",
      "Both a and b",
      "None of these",
    ],
    answer: "c. Both a and b",
    explanation:
      "ICV development progressed through phases based on 2G, 3G, and 4G LTE.",
  },
  {
    id: "10-10",
    week: 10,
    question: "In the Ad-hoc domain of VANET, vehicles are:",
    options: ["Stationary", "Mobile", "Fixed to RSUs only", "None of these"],
    answer: "b. Mobile",
    explanation: "In VANET's ad-hoc domain, vehicles are mobile nodes.",
  },
  {
    id: "10-11",
    week: 10,
    question: "Domains of VANET include:",
    options: [
      "In-vehicle and ad-hoc",
      "Ad-hoc and data center",
      "Data center",
      "None of these",
    ],
    answer: "a. In-vehicle and ad-hoc",
    explanation: "VANET domains include in-vehicle and ad-hoc domains.",
  },
  {
    id: "10-12",
    week: 10,
    question:
      "At which data fusion stage are multiple classifier outputs combined?",
    options: ["Pixel level", "Feature level", "Signal level", "Decision level"],
    answer: "d. Decision level",
    explanation:
      "Decision level fusion combines outputs from multiple classifiers.",
  },
  {
    id: "10-13",
    week: 10,
    question: "The Body & Brain Architecture consists of how many layers?",
    options: ["1", "2", "3", "4"],
    answer: "c. 3",
    explanation: "Body & Brain Architecture consists of three layers.",
  },
  {
    id: "10-14",
    week: 10,
    question: "Which statement about smart home infrastructure is correct?",
    options: [
      "It cannot include wireless devices.",
      "It may include wired and/or wireless devices.",
      "It must be wireless-only.",
      "None of these",
    ],
    answer: "b. It may include wired and/or wireless devices.",
    explanation:
      "Smart home infrastructure can include both wired and wireless devices.",
  },
  {
    id: "10-15",
    week: 10,
    question: "Intelligent Connected Vehicles (ICV) communication is based on:",
    options: [
      "Dedicated Short Range Communication",
      "Directed Short Range Communication",
      "Dedicated Small Range Communication",
      "All of these",
    ],
    answer: "a. Dedicated Short Range Communication",
    explanation: "ICV communication is based on DSRC.",
  },

  // Week 11
  {
    id: "11-1",
    week: 11,
    question: "What are some of the other names of the smart grids?",
    options: [
      "Energy internet",
      "Electricity with a hand",
      "Electrolyte",
      "All of these",
    ],
    answer: "a. Energy internet",
    explanation: "Smart grids are also known as Energy internet.",
  },
  {
    id: "11-2",
    week: 11,
    question:
      "Which of the following is not done in traditional electrical grids?",
    options: [
      "Manual energy monitoring",
      "Unidirectional energy distribution",
      "Unidirectional communication",
      "Distributed power plants",
    ],
    answer: "d. Distributed power plants",
    explanation: "Traditional grids use centralized power generation.",
  },
  {
    id: "11-3",
    week: 11,
    question:
      "Which of the following is a benefit associated with smart grids for customers?",
    options: [
      "Reduced transmission of electricity",
      "Higher electricity rates",
      "Less security",
      "Different pricing options",
    ],
    answer: "d. Different pricing options",
    explanation: "Smart grids offer customers different pricing options.",
  },
  {
    id: "11-4",
    week: 11,
    question:
      "Fill in the blank: ___ samples voltage and current with a fixed sample rate at the installed location.",
    options: ["PEVs", "DAUs", "PMUs", "None of these"],
    answer: "c. PMUs",
    explanation: "PMUs sample voltage and current at fixed rates.",
  },
  {
    id: "11-5",
    week: 11,
    question:
      "Which statements are true about MDMSs? I: Decide the price per unit energy. II: Handled by service providers. III: Aggregate energy consumption.",
    options: [
      "Statements I and II",
      "Statements I and III",
      "Statements II and III",
      "Statements I, II and III",
    ],
    answer: "a. Statements I and II",
    explanation:
      "MDMS decides energy pricing and is managed by service providers.",
  },
  {
    id: "11-6",
    week: 11,
    question:
      "Which of the following aggregate the energy consumption or energy request of a certain geographical area?",
    options: [
      "DAUs",
      "Meter Data Management System",
      "Buffer",
      "None of these",
    ],
    answer: "a. DAUs",
    explanation: "DAUs aggregate energy consumption data from multiple meters.",
  },
  {
    id: "11-7",
    week: 11,
    question:
      "Which statements are true about Dynamic System Attacks? I: Replay attacks compromise sensors. II: D-DIA can lead to system collapse. III: Covert attack is a closed loop version of replay attacks.",
    options: [
      "Statements I and II",
      "Statements I and III",
      "Statements II and III",
      "Statement I, II and III",
    ],
    answer: "d. Statement I, II and III",
    explanation: "All statements are true about Dynamic System Attacks.",
  },
  {
    id: "11-8",
    week: 11,
    question:
      "Fill in the blank: ___ is performed by compromising the availability of the grid component.",
    options: ["Gateway", "Data injection attacks", "AMH", "Denial of service"],
    answer: "d. Denial of service",
    explanation:
      "Denial of service attacks compromise grid component availability.",
  },
  {
    id: "11-9",
    week: 11,
    question: "Fill in the blank: ___ is a primary challenge in IIoT.",
    options: [
      "Worker health and safety",
      "Optimised operations",
      "Regulatory compliance",
      "Integrate existing infrastructure into new IIoT infrastructure",
    ],
    answer: "d. Integrate existing infrastructure into new IIoT infrastructure",
    explanation:
      "Integrating legacy systems with new IIoT is a major challenge.",
  },
  {
    id: "11-10",
    week: 11,
    question: "Fill in the blank: ___ is based on a wrap and re-use approach.",
    options: ["AoT", "PoT", "ToII", "IIoT"],
    answer: "d. IIoT",
    explanation: "IIoT uses wrap and re-use approach.",
  },
  {
    id: "11-11",
    week: 11,
    question:
      "Mechanized production is a part of the 4th Industrial Revolution.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Mechanized production belongs to the 1st Industrial Revolution.",
  },
  {
    id: "11-12",
    week: 11,
    question: "Which of the following happened in the 3rd Revolution?",
    options: [
      "Mass production",
      "IIoT",
      "Mechanized production",
      "None of these",
    ],
    answer: "d. None of these",
    explanation:
      "The 3rd Industrial Revolution featured automation and computerization.",
  },
  {
    id: "11-13",
    week: 11,
    question: "Which of the following is not a vulnerability of Smart Grid?",
    options: [
      "Integrity",
      "Physical threats",
      "Dynamic system attacks",
      "None of these",
    ],
    answer: "d. None of these",
    explanation: "All listed items are smart grid vulnerabilities.",
  },
  {
    id: "11-14",
    week: 11,
    question: "Big data is characterized by 7 Vs.",
    options: ["True", "False"],
    answer: "a. True",
    explanation: "Big data is characterized by 7 Vs.",
  },
  {
    id: "11-15",
    week: 11,
    question: "What is the Flow of data?",
    options: [
      "Acquisition>Generation>Storage>Analysis",
      "Generation>Storage>Analysis>Acquisition",
      "Generation>Acquisition>Storage>Analysis",
      "None of these",
    ],
    answer: "c. Generation>Acquisition>Storage>Analysis",
    explanation:
      "Data flows from generation through acquisition to storage and analysis.",
  },

  // Week 12
  {
    id: "12-1",
    week: 12,
    question: "The two types of data analysis are ___.",
    options: [
      "Qualitative and Quantitative",
      "Repetitive and Quantitative",
      "Repetitive and Qualitative",
      "All of these",
    ],
    answer: "a. Qualitative and Quantitative",
    explanation:
      "Data analysis divides into qualitative and quantitative methods.",
  },
  {
    id: "12-2",
    week: 12,
    question:
      "Fill in the blank: To perform an ANOVA, we must have a ___ response variable and at least one ___ factor.",
    options: [
      "Discrete, categorical",
      "Continuous, quantitative",
      "Discrete, quantitative",
      "Continuous, categorical",
    ],
    answer: "d. Continuous, categorical",
    explanation:
      "ANOVA requires continuous response variables and categorical factors.",
  },
  {
    id: "12-3",
    week: 12,
    question:
      "Select the statement(s) that denote the type of ANOVA. Statement I: One way analysis. Statement II: Two way analysis. Statement III: K-way analysis.",
    options: [
      "Statement I",
      "Statement II",
      "Statements I, II, and III",
      "None of these",
    ],
    answer: "c. Statements I, II, and III",
    explanation: "ANOVA types include one-way, two-way, and k-way analysis.",
  },
  {
    id: "12-4",
    week: 12,
    question: "What is the type of the data dispersion?",
    options: [
      "Range",
      "Average absolute deviation",
      "Variance",
      "All of these",
    ],
    answer: "d. All of these",
    explanation:
      "Data dispersion measures include range, average absolute deviation, and variance.",
  },
  {
    id: "12-5",
    week: 12,
    question:
      "The two most relevant sensors directly used in agricultures are ___.",
    options: [
      "Soil moisture and proximity sensor",
      "Soil moisture and water level sensor",
      "ECG sensor and water level sensor",
      "All of these",
    ],
    answer: "b. Soil moisture and water level sensor",
    explanation:
      "Soil moisture and water level sensors are most relevant for agriculture.",
  },
  {
    id: "12-6",
    week: 12,
    question:
      "The mathematical equation that is formulated in the form of relationships between variables is known as ___.",
    options: [
      "Logical model",
      "Relational model",
      "Data dispersion",
      "Statistical model",
    ],
    answer: "d. Statistical model",
    explanation:
      "Statistical models use mathematical equations to represent relationships.",
  },
  {
    id: "12-7",
    week: 12,
    question: "What are the two types of statistical models?",
    options: [
      "Qualitative and quantitative",
      "Complete and incomplete",
      "Regression and dispersion",
      "None of these",
    ],
    answer: "b. Complete and incomplete",
    explanation: "Statistical models are classified as complete or incomplete.",
  },
  {
    id: "12-8",
    week: 12,
    question:
      "Select the correct order of the component layers present in the IoT healthcare.",
    options: [
      "Sensing layer, cloud platform layer, aggregated layer, processing layer",
      "Sensing layer, aggregated layer, processing layer, cloud platform layer",
      "Aggregated layer, sensing layer, processing layer, cloud platform layer",
      "Sensing layer, processing layer, aggregated layer, cloud platform layer",
    ],
    answer:
      "b. Sensing layer, aggregated layer, processing layer, cloud platform layer",
    explanation:
      "IoT healthcare layers flow from sensing to aggregation, processing, and cloud.",
  },
  {
    id: "12-9",
    week: 12,
    question:
      "Wireless IoT driven solutions for remote healthcare facility provisioning brings healthcare to patients than bringing patients to healthcare.",
    options: ["True", "False"],
    answer: "a. True",
    explanation:
      "Wireless IoT enables healthcare delivery to patients' locations.",
  },
  {
    id: "12-10",
    week: 12,
    question:
      "Which of the following handheld devices are used for activity monitoring?",
    options: [
      "EEG and GPS",
      "Accelerometer and EEG",
      "Accelerometer and GPS",
      "All of these",
    ],
    answer: "c. Accelerometer and GPS",
    explanation:
      "Accelerometers and GPS enable comprehensive activity monitoring.",
  },
  {
    id: "12-11",
    week: 12,
    question: "Which of the following are components of IoT?",
    options: [
      "Sensing layer",
      "Aggregated layer",
      "Processing layer",
      "All of these",
    ],
    answer: "d. All of these",
    explanation:
      "IoT architecture includes sensing, aggregated, and processing layers.",
  },
  {
    id: "12-12",
    week: 12,
    question:
      "By performing continuous monitoring of a person's activity, it is not possible to observe his/her behavior or to identify any repetitive pattern in his/her day-to-day activity.",
    options: ["True", "False"],
    answer: "b. False",
    explanation:
      "Continuous activity monitoring enables behavior observation and pattern identification.",
  },
  {
    id: "12-13",
    week: 12,
    question:
      "Deep learning based data analysis cannot be performed on videos.",
    options: ["True", "False"],
    answer: "b. False",
    explanation: "Deep learning can analyze videos for various applications.",
  },
  {
    id: "12-14",
    week: 12,
    question:
      "Which of the following are the inbuilt sensors that are present in high end smartphones?",
    options: [
      "ECG and EEG",
      "Accelerometer, proximity sensor, and EEG",
      "Accelerometer, Compass, and Gyroscope",
      "Pressure sensor and NPK sensor",
    ],
    answer: "c. Accelerometer, Compass, and Gyroscope",
    explanation:
      "High-end smartphones typically include accelerometer, compass, and gyroscope.",
  },
  {
    id: "12-15",
    week: 12,
    question:
      "Fill in the blank: Processing the handheld activity device data with artificial intelligence can be used for ___.",
    options: [
      "Fall detection",
      "Heart rate detection",
      "Vehicle detection",
      "All of these",
    ],
    answer: "a. Fall detection",
    explanation: "AI processing of activity device data can detect falls.",
  },
];
