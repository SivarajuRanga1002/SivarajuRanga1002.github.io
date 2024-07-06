const INFO = {
	main: {
		title: "Yashaswi Ranga Sivaraju",
		name: "Yashaswi Ranga Sivaraju",
		email: "sivarajuranga1002@gmail.com",
		logo: "../images/logo.png",
	},

	socials: {
		github: "https://github.com/SivarajuRanga1002",
		linkedin: "https://www.linkedin.com/in/yashaswirangasivaraju/",	},
 
	homepage: {
		name: "Biography",
		title: "Yashaswi Ranga Sivaraju",
		description:
			"Hi! I am Yashaswi Ranga, A graduate from ASU with a major in Robotics and Autonomous Systems in Systems Concentration. In terms of sensing like audio, visual, light & others, Robots are designed to complement nature; Ml & AI adds as icing - I am eager to contributing in this intersection. I am actively looking for full-time opportunities starting May 2024. \nCurrently, as I embarked on a journey to find a full-time, I am implementing LLM's and RAG models for its applications in Education sector in the form of Teaching Assistants. My recent work as a Teaching Assistant exposed me to technical aspects of 6DOF Robotic Arms like UR5 & myCobot by elephant robotics and its dynamics in real-time implementing Object Detection for Pick & Place operations with Vision sensors as well as leadership and management skills. Extending my past internship experience as a robotics engineer intern at Centillion Solutions with LiDAR, Camera & GPS systems implemented 2D LiDAR scanning and Object Detection with Stereo camera on an Automated Guided Vehicle.\nIn free time I read and explore Indian mythology and SciFi/Fantasy worlds. Do get in touch to discuss robotics, start-ups, spirituality, or maybe plan an adventurous journey",
	},

	about: {
		title: "My Journey (Past, Present & Future)",
		description:"My journey from a curious undergraduate to a robotics professional encapsulates a dynamic evolution I would say, driven by a passion for innovation and enthusiasm for technology. Holding a Bachelor's in Electronics and Communication Engineering, I first dipped my toes into robotics by developing devices such as line-follower robot and a makeshift robotic arm from spoons and motors. These initial projects marked themselves a spot in college's Robocon fest paving my path towards more complex endeavors. \n Joining Kagool as a Data Analyst, I delved into augmented and virtual reality technologies, crafting UI/UX designs for AR/VR applications using Holo-Lens, MRTK, and Unity Hub. This role was my gateway into the world of data, where numbers and patterns danced around me, fueling my curiosity towards data science. Life pushed me back into my core passion—robotics—leading me to pursue a Master's in Robotics which made me realize data science interacts a lot with Robotics.\n My Master’s program was an amalgamation of theory and practical knowledge—linear algebra and deep neural networks became the language through which I understood robotics dynamics and functioning. As I explored the burgeoning field of autonomous vehicles, consistent work landed me an internship at Centillion Solutions where I gained hands-on experience with LiDARs, cameras, GPS systems, and  visualization applications for 3D using Three.js. Teaching Assistantship under Prof. Sangram Redkar allowed me to mentor graduate students on advanced robotic systems like myCobot and UR5, making me learn PLC and SCADA systems. Today, as I research autonomous vehicles and delve into object detection algorithms and their hardware compatibilities, such as CUDA, my focus has never been clearer. \n I am eager to bring my background in data, my hands-on experience in 3D visualization, and my understanding of sensor technologies to the fields of industrial automation and autonomous vehicles where precision and innovation intersect to recreate and understand our world.",
		resume: "",
	},

	projects: {
		title: "Projects that define my expertise",
		description:
			"Throughout my journey as a passionate roboticist, I delved into exploring Controls, CNN's, PLC Programming, CNC machines, Computer Vision; adding depth to my understanding and knowledge base. The project section showcases the projects that shaped my passion and experience in this vast field. If you think some projects can be improved, I would be pleased to collaborate and continue to creating a change",
		project_list: [
			{
				title: "Stereo-RCNN based 3D Object Detection for Autonomous Driving",
				description:
					"Deployed and implemented Stereo-RCNN for 3D object detection by HKUST Aerial Robotics, which fully exploits stereo imagery to detect and associate objects in left and right images. Utilizing a weight-sharing ResNet-101 backbone and a modified Region Proposal Network (RPN), our system provides high precision and recall rates for 3D object localization. This approach achieves state-of-the-art performance on the KITTI benchmark, significantly enhancing autonomous driving capabilities without the need for LiDAR data .",
				image: "https://github.com/SivarajuRanga1002/Stereo-RCNN/blob/master/doc/system.png?raw=true",
				image_alt: "Stereo-RCNN Architecture",
				skills: [
					"cuda", 
					"tensorflow", 
					"python",
					"pytorch", 
					"Kitti",
					"opencv",
				],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/Stereo-RCNN",
			},
			{
				title: "ASU Shape formation using Robotarium software",
				description:
					"This project involves designing and implementing a multi-robot system using the Robotarium simulator to autonomously arrange robots into the letters 'ASU'. Utilizing Python, we developed algorithms for single integrator to unicycle dynamics conversion, barrier certificates for collision avoidance, and precise position control. The project required defining target positions, integrating custom and existing code, and dynamically replanning paths to adapt to environmental changes. Effective team coordination and technical research were crucial to overcoming challenges and ensuring the successful formation of the desired shape.",
				image: "https://github.com/SivarajuRanga1002/-ASU-Shape_FormationControl/blob/main/289218565-9336af31-5256-4ff0-8986-6c0b6b0cd477.gif?raw=true",
				image_alt: "ASU-Shape-Formation",
				skills: [
					"python"
				],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/-ASU-Shape_FormationControl",
			},
			{
				title: "Autonomous-Object-Detection-and-Pick-&-Place-Robot",
				description:
					"Developed an autonomous object detection and pick-and-place robotic system using a 6-degree-of-freedom (6-DOF) robotic arm (MyCobot) controlled by a Raspberry Pi 4B and an ESP32 board. The system utilizes YOLOv8 for object detection and OpenCV for image processing, achieving precise and efficient sorting of colored objects.",
				image: "https://github.com/SivarajuRanga1002/Autonomous-Object-Detection-and-Pick-and-Place-Robot/assets/65248651/de85b285-62ff-48bd-85ec-871716b25d4d",
				image_alt: "sim-demo",
				skills: ["python", "ros","opencv","tensorflow","numpy", "blender"],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/Autonomous-Object-Detection-and-Pick-and-Place-Robot?tab=readme-ov-file",
			},
			{
				title: "Drone Visual Servoing and ORB slam in Gazebo",
				description:
					"A Pixhawk drone equipped with cameras is used to map a precariously placed rock using ORB-SLAM and further landing on a moving rover detecting the aruco marker placed inside it.",
				image: "https://user-images.githubusercontent.com/97504177/236119781-4f0b61ad-53ec-4eb5-a5ae-0b564a6eda3f.png",
				image_alt: "drone flight simulation",
				skills: [
					"pytorch",
					"opencv",
					"tensorflow",
					"scikitlearn",
					"linux",
				],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/DroneVisualServoing",
			},
			{
				title: "Speech Recognition with Spectograms",
				description:
					"This project involved developing a system to recognize spoken words by converting audio signals into spectrograms and then using machine learning techniques for classification. The outcome was an effective model capable of accurately identifying and differentiating between various spoken commands.",
				image: "https://github.com/SivarajuRanga1002/SpeechRecognitionWithSpectograms/assets/65248651/4327cea5-fe37-4e77-9111-aca9615d2afe",
				image_alt: "Speech Recognition",
				skills: ["plotly", "tensorflow","keras", "K-Lite"],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/SpeechRecognitionWithSpectograms",
			},

			{
				title: "Robotic Arms",
				description:
					"This github repository showcases all the projects related to robotic arms accomplished in my masters",
				image: "https://github.com/SivarajuRanga1002/UR5-Robot-Projects/assets/65248651/89196aa1-f02b-4db8-b52a-669702ef88fd",
				image_alt: "Demo",
				skills: ["UR5"],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/UR5-Robot-Projects",
			},

			{
				title: "Currently implementing",
				description:
					"This chatbot is being created using the open-source Llama 2 LLM model from Meta. Particularly, we're using the Llama2-7B model deployed by the Andreessen Horowitz (a16z) team and hosted on the Replicate platform.",
				image: "",
				image_alt: "sim-demo",
				skills: ["streamlit","replicate","python","llama"],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/llama2-ChatBot",
			},
		],
	},

	research: { 
		title: "My Research Journey",
		description:
			"During my progression from an Intern to a Research Assistant, and finally to a Machine Learning Engineer,  I've had the privilege to collaborate with distinguished mentors in the field of Artificial Intelligence and Machine learning. Their guidance transformed my novice curiosity into expertise enabling me to apply cutting-edge tools in automating industries. Below are some highlights of my research endeavors in AI and Automation Engineering.",
	
		},

	experience: [
		{
			company_logo:
				"https://media.licdn.com/dms/image/C560BAQHDGjY1IZJuog/company-logo_200_200/0/1631309406468?e=1723680000&v=beta&t=9kv_PzaPf3Ts3D-Nb_JudCiFyrGsNANIsHXrQ9V2lnY",
			company: "ASU",
			location:"Tempe, AZ",
			roles: [
				{
					dept:"Robotics and Autonomous Systems",
					role: "Teaching Assistant",
					duration: "Sep 2023 - Dec 2023",
					description:
						"Grading 80 graduate students work and scheduling lab sessions and directing them on how to operate the robots and execute object detection and pick & place operations",
				},
			],
		},

		{
			company_logo:
				"data:image/jpeg;base64,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",
			company: "Centillion Solutions",
			location:"Tempe, AZ (Remote)",
			roles: [
				{
					dept:"3D Data Visualization",
					role: "Robotics Engineer Intern",
					duration: "Jun 2023 - Aug 2023",
					description:
						"Mounting sensors like LiDAR's, Camera, GPS on golf kart. Calibrating the sensors and collecting data in the campus. Creating LiDAR viewer from the pcd frames collected",
				},
			],
		},
		
		{
			company_logo:
				"https://th.bing.com/th/id/OIP.CPwdLsyekv76zjGYykYHtAAAAA?w=193&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
			company: "Kagool",
			location:"Hyderabad, India",
			roles: [
				{
					dept:"Finance & AR/VR",
					role: "Data Analyst",
					duration: "Feb 2021 - Oct 2021",
					description:
						"Utilized PowerBI and SQL for in-depth analysis of Ahold Delhaize's financial statements, crafting Profit, Loss and Balance Sheets that drove a 2.8% cost reduction.\nLeveraged MRTK & Unity Hub to create and test out gesture-controlled designs and user interfaces for Microsoft HoloLens increasing user interaction by 20%.",
				},
			],
		},
	],
};

export default INFO;
