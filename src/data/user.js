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
			"Hi! I am Yashaswi Ranga, A graduate with major in Robotics and Autonomous Systems from ASU. In terms of sensing like audio, visual & light, Robots complement humans; Ml & AI adds as a topping - I am eager to contributing in this intersection. I am actively looking for full-time opportunities starting May 2024. \nCurrently, as I embarked on a journey to find a full-time, I am implementing LLM's and RAG models for its applications in Teaching Assistantships. My recent work experience being a Teaching Assistant exposed me to 6DOF Robotic Arms like UR5 & myCobot by elephant robotics and its dynamics in real-time and implementing vision, Pick & Place operations . Working on 3d object detection and 2d Lidar map generation on a Automated guided vehicle extending my past internship experience at Centillion Solutions as a robotics engineer intern where LiDAR, Camera & GPS systems applications in real-world like calibration, collection of data, Mo-Cap ground truth comparison were introduced.\nIn free time I read and think on indian mythology and SciFi/Fantasy. Do get in touch to discuss robotics, start-ups, spirituality, and plan a sudden adventurous journey",
	},

	about: {
		title: "My Journey (Past, Present & Future)",
		description:"My journey from a curious undergraduate to a specialized robotics professional encapsulates a dynamic evolution, driven by a passion for innovation and a deep-rooted enthusiasm for technology. Holding a Bachelor's in Electronics and Communication Engineering, I first dipped my toes into robotics by constructing devices as simple yet fascinating as a line-follower robot and a makeshift robotic arm from spoons and motors. These initial projects not only showcased at our college's Robocon fest but also paved my path towards more complex endeavors. \n Joining Kagool as a Data Analyst, I delved into augmented and virtual reality technologies, crafting UI/UX designs for AR/VR applications using Holo-Lens, MRTK, and Unity Hub. This role was my gateway into the world of data, where numbers and patterns danced around me, fueling my curiosity towards data science. Life pushed me back into my core passion—robotics—leading me to pursue a Master's in Robotics which made me realize data science intersects a lot with Robotics.\n My Master’s program was an amalgamation of theory and practical knowledge—linear algebra became the language through which I understood robotics dynamics, and deep neural networks. I explored the burgeoning field of autonomous vehicles, which led to an internship at Centillion Solutions where I gained hands-on experience with LiDARs, cameras, GPS systems, and 3D LiDAR visualization using Three.js. Teaching Assistantship under Prof. Sangram Redkar allowed me to mentor graduate students on advanced robotic systems like myCobot and UR5, making me learn PLC and SCADA systems. Today, as I research autonomous vehicles and delve into object detection algorithms and their hardware compatibilities, such as CUDA, my focus has never been clearer. \n I am eager to bring my background in data, my hands-on experience in 3D visualization, and my deep understanding of sensor technologies to the fields of industrial automation and autonomous vehicles—domains where precision and innovation intersect to recreate and understand our world.",
		resume: "https://drive.google.com/file/d/1BCGRsmTvMALPemHmvOrov8Yc3N5o5-AU/view?usp=sharing",
	},

	projects: {
		title: "Projects that define my expertise",
		description:
			"Throughout my journey as a passionate roboticist, I delved into exploring Controls, CNN's, PLC Programming, CNC machines, Computer Vision... adding depth to my understanding and knowledge base. The project section showcases the projects that shaped my passion and experience in this vast field. If you think some projects can be improved by collaboration, I would be pleased to continue creating a change",
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
					"The project 'Swarm of Robots Forming 'ASU' Shape' involved designing and implementing a multi-robot system using the Robotarium simulator to autonomously arrange robots into the letters 'ASU'. Utilizing Python, we developed algorithms for single integrator to unicycle dynamics conversion, barrier certificates for collision avoidance, and precise position control. The project required defining target positions, integrating custom and existing code, and dynamically replanning paths to adapt to environmental changes. Effective team coordination and technical research were crucial to overcoming challenges and ensuring the successful formation of the desired shape. This project demonstrated a comprehensive application of swarm robotics principles and advanced algorithmic techniques in a collaborative setting.",
				image: "https://github.com/SivarajuRanga1002/-ASU-Shape_FormationControl/blob/main/289218565-9336af31-5256-4ff0-8986-6c0b6b0cd477.gif?raw=true",
				image_alt: "ASU-Shape-Formation",
				skills: [
					"python"
				],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002/-ASU-Shape_FormationControl",
			},
			{
				title: "6D Pose Estimation using ArUco Markers with Intel RealSense Camera",
				description:
					"Real-time object pose detection and index finger position estimation in a 3D environment, integrated with stereo camera-projector calibration to project on detected area.",
				image: "https://github.com/smartgeek27/6d-pose-estimation-of-objects-using-index-finger/blob/main/pose_estimation.gif?raw=true",
				// image: "https://drive.google.com/file/d/1uwVB_yEIvwCzT5-DTu55x2eHRYjkOoEs/view",
				image_alt: "sim-demo",
				skills: ["python", "ros","opencv", "cplusplus", "mysql","cuda","tensorflow","numpy", "blender"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/6d-pose-estimation-of-objects-using-index-finger",
			},
			{
				title: "Medical Image Segmentation by Transformer model-TRANSBTS2",
				description:
					"3D image tumor Segmentation using TRANSBTS-2 on brain, kidney and liver CT/MRI scan datasets. Benchmarked results against UPenn dice scores with clear tumor visualizations.",
				image: "https://github.com/smartgeek27/TransBTS_Python-implementation.-/blob/main/validation_result.gif?raw=true",
				image_alt: "drone flight simulation",
				skills: [
					"pytorch",
					"opencv",
					"tensorflow",
					"scikitlearn",
					"cuda",
					"linux",
				],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/TransBTS_Python-implementation.-",
			},
			{
				title: "Music Generation using RNN-LSTM",
				description:
					" LSTM based melody prediction model using the ESAC dataset to create harmonious music on test melodies perceived on MuseScore API.",
				image: "https://github.com/smartgeek27/music_generation_using_RNN_LSTM/blob/master/predicted_music_visualization.gif?raw=true",
				image_alt: "bidirectional search demo",
				skills: ["plotly", "tensorflow","keras", "musecore"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/music_generation_using_RNN_LSTM/tree/master",
			},

			{
				title: "AI-Enabled Waste Segregation System: A Computer Vision Approach to Sort Waste Materials",
				description:
					"AI-driven waste segregation system utilizing AlexNet-based transfer learning in MATLAB, integrated in Raspberry Pi for waste classification and servo motor for mecahanics.",
				image: "https://github.com/smartgeek27/Image_collection/blob/main/E_dustbin.gif?raw=true",
				image_alt: "siumlation-demo",
				skills: ["matlab", "simulink","raspberrypi", "alexnet"],
				linkText: "View Project",
				link: "https://github.com/SivarajuRanga1002",
			},

			{
				title: "Multi-Robot Path Planning using DARP Algorithm",
				description:
					"A path planning solution for multi-robots navigation designed to divide the territory into equal regions for each robot, ensuring total territory coverage, non-backtracking routes, and minimal coverage paths without any prior planning.",
				image: "https://github.com/smartgeek27/Multi_robot_path_planning_using_DARP/blob/master/darp_video.gif?raw=true",
				image_alt: "sim-demo",
				skills: ["python", "numpy", "scipy", "scikitlearn", "numba"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/Multi_robot_path_planning_using_DARP",
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
				"https://media.licdn.com/dms/image/C4E0BAQFrix1WwH0KvQ/company-logo_200_200/0/1640201971362/gamma_technologies_inc_logo?e=1723680000&v=beta&t=R5fN4eOIN6MwgQRALxMX4CD8BDBsQaDdFKCJp8DvCxo",
			company: "Centillion Solutions",
			location:"Chicago, IL",
			roles: [
				{
					dept:"Autonomous Vehicle",
					role: "Robotics Engineer ",
					duration: "Apr 202",
					description:
						" Leading the development and integration of generative AI applications, ensuring robust and intuitive user interfaces enhancing GT Suite's software capabilities.\n  Managing the full lifecycle of LLM models from data acquisition to training, validation, and testing, implementing best practices to ensure model accuracy and efficiency.",
				},
			],
		},
		
		{
			company_logo:
				"https://images.squarespace-cdn.com/content/v1/61df533c57361a366db19973/96c5fcb6-f710-47d7-bb19-b6d52f844abc/SABIN_SOCIAL_ICON.jpg",
			company: "Sabin Lighting Inc",
			location:"Chicago, IL",
			roles: [
				{
					dept:"AI Development",
					role: "Machine Learning Engineer",
					duration: "May 2023 - March 2024",
					description:
						"Developed intelligent AI chatbot using RAG and OpenAI LLM's streamlining employee data access.\n Integrated ML price prediction model into chatbot for custom products. \n Enhanced ERP configuration tools and features optimising business operations.",
				},
			],
		},
		{
			company_logo:
				"https://media.licdn.com/dms/image/C560BAQHDGjY1IZJuog/company-logo_200_200/0/1631309406468?e=1723680000&v=beta&t=9kv_PzaPf3Ts3D-Nb_JudCiFyrGsNANIsHXrQ9V2lnY",
			company: "Arizona State University",
			location:"Tempe, AZ",
			roles: [
				{
					dept: "Geometric Media Lab ",
					role: "Machine Learning Research Assistant",
					duration: "July 2022 - May 2023",
					description:
						"Devised interpolation technique for GAN's and Autoencoders.\n Introduced guided algorithm for feature control in latent spaces . \n Crafted Neural Network architecture for conditional image generation via sampling in the latent space. ",
				},
				{
					dept: "Interactive Robotics Lab",
					role: "Gradudate Student Researcher",
					duration: "Oct 2021 - May 2022",
					description:
						"Assisted in HRC project using Intention Projection and 3D vision tracking.\n Developed a robust projection mapping algorithm for URDF robot.\n Utilized Intel RGB depth camera for real-time 3D object pose identification.",
				},
			],
		},
		{
			company_logo:
				"https://media.licdn.com/dms/image/D4E0BAQF76kzVAn4ekQ/company-logo_200_200/0/1665114553601?e=2147483647&v=beta&t=5onpfxyuhSPtaGI0QLN-xafSI1JD4ZCZpTI04Wvmkx0",
			company: "Meda AI",
			location:"Greater New York",
			roles: [
				{
					dept:"Computer Vision - Metaverse",
					role: "Artificial Intelligence Intern",
					duration: "May 2022 - July 2022",
					description:
						"Refined NERF algorithm for 3D reconstruction, elevating efficiency by 8% \n Constructed a 3D clothing dataset for Meta-verse human avatars.\n Implemented a rendering technique with marching cubes for 3D texture addition.",
				},
			],
		},
	],
};

export default INFO;
