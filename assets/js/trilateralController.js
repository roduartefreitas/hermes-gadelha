angular.module('bacanaApp').controller('trilateralController', ctrl);

function ctrl($scope) {
	$scope.view = function(_msg) {
		$scope.msg =_msg;
	}

	$scope.participants = [
		{
			country: 'BR',
			name: 'Stevens Paz Sanchez',
			position: 'Phd student',
			department: 'ICMC',
			university: 'Universidade de Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Marcelo D. Goissis',
			position: 'Researcher',
			department:  'Animal Reproduction',
			university: 'University of Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Daniela Souza Ferreira',
			position: 'Lecturer',
			department: 'Department of Food Technology',
			university: 'University of Campinas (UNICAMP)'
		},
		{
			country: 'BR',
			name: 'Maria Luisa Lopes de Faria',
			position: 'Postdoc - Startup Founder',
			department: 'NAP USP Cidades',
			university: 'University of Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Daniel Ricardo Argumedo',
			position: 'Phd student',
			department: 'Program of nanoscience and advanced materials',
			university: 'Federal University of ABC'
		},
		{
			country: 'BR',
			name: 'Taiana She Mir Mui',
			position: 'Phd student',
			department: 'Chemistry and Physics',
			university: 'Universidade Estadual Paulista (UNESP)'
		},
		{
			country: 'BR',
			name: 'Luca Meacci',
			position: 'Phd student',
			department: 'ICMC - Instituto de Ciencias Matematicas e de Computacao',
			university: 'Universidade de Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Thais Rose dos Santos Hamilton',
			position: 'Postdoc',
			department: 'Department of Animal Reproduction',
			university: 'University of Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Amanda Rios Ferreira',
			position: 'Phd Student',
			department: 'Food Technology',
			university: 'State university of Campinas'
		},
		{
			country: 'BR',
			name: 'shahin ranjbarzadeh',
			position: 'Postdoc',
			department: 'Mechanical Engineering',
			university: 'Federal University of Rio de Janeiro'
		},
		{
			country: 'BR',
			name: 'Oladele Samouel Olugbenga',
			position: 'PhD student',
			department: 'Department of Agri-food Industry, Food and Nutrition  LAN)',
			university: 'University of Sao Paulo (USP)'
		},
		{
			country: 'BR',
			name: 'Diego Samuel Rodrigues',
			position: 'Postdoc',
			department: 'Biosciences Institute',
			university: 'UNESP, Botucatu-SP, Brazil'
		},
		{
			country: 'BR',
			name: 'Antonio Alvaro Ranha Neves',
			position: 'Professor',
			department: 'Centro de Ciencias Naturais e Humanas',
			university: 'Universidade Federal do ABC'
		},
		{
			country: 'BR',
			name: 'Ester Gomide',
			position: 'R&D Analist',
			department: 'R,D & I Programming Support Center',
			university: 'Embrapa'
		},
		{
			country: 'BR',
			name: 'Milton Yutaka Nishiyama Junior',
			position: 'Associate Researcher',
			department: 'Laboratorio Especial de Toxinologia Aplicada',
			university: 'Instituto Butantan'
		},
		{
			country: 'BR',
			name: 'Gustavo',
			position: 'Professor',
			department: 'Applied Mathematics and Statistics',
			university: 'University of Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Jose Alberto Cuminato',
			position: 'Lecturer',
			department: 'Applied Mathematics and Statistics',
			university: 'University of Sao Paulo'
		},
		{
			country: 'BR',
			name: 'Bruno Pereira de Oliveira',
			position: 'PhD Student',
			department: 'Sao Carlos Institute of Physics',
			university: 'University of Sao Paulo'
		},
		{
			country: 'UK',
			name: 'Hermes Gadelha',
			position: 'Lecturer in Applied Mathematics',
			department: 'Mathemathics',
			university: 'University of York'
		},
		{
			country: 'UK',
			name: 'Dr Verena Kriechbaumer',
			position: 'Vice-Chancellors Research Fellow in Biology',
			department: 'Department of Biological and Medical Sciences',
			university: 'Oxford Brookes University'
		},
		{
			country: 'UK',
			name: 'Ben Almquist',
			position: 'Lecturer',
			department: 'Bioengineering',
			university: 'Imperial College London'
		},
		{
			country: 'UK',
			name: 'Dr John Atibila',
			position: 'Knowledge Exchange/Research Impact Fellow',
			department: 'Centre of Landscape & Climate Research',
			university: 'University of Leicester'
		},
		{
			country: 'UK',
			name: 'Denny Vitasari',
			position: 'Postdoc',
			department: 'Mathematics / Institute of Mathematics, Physics and Computer Science',
			university: 'Aberystwyth University'
		},
		{
			country: 'UK',
			name: 'Lindsay Todman',
			position: 'Lecturer',
			department: 'Agriculture, Policy and Development',
			university: 'University of Reading'
		},
		{
			country: 'UK',
			name: 'Susana Direito',
			position: 'Postdoc',
			department: 'School of Physics and Astronomy',
			university: 'University of Edinburgh'
		},
		{
			country: 'UK',
			name: 'Alys Jepson',
			position: 'Postdoc',
			department: 'Biosciences',
			university: 'The University of Exeter'
		},
		{
			country: 'UK',
			name: 'Dr James Smith',
			position: 'University Lecturer (Assistant Professor)',
			department: 'School of Food Science & Nutrition, Faculty of Mathematics and Physical Sciences',
			university: 'University of Leeds, UK'
		},
		{
			country: 'UK',
			name: 'Vincenzo di Bari',
			position: 'Postdoc',
			department: 'Division of Food Sciences, School of Biosciences',
			university: 'University of Nottingham'
		},
		{
			country: 'UK',
			name: 'Alexander Taufiq Safar',
			position: 'PhD student',
			department: 'Mathematics',
			university: 'Cardiff University, UK'
		},
		{
			country: 'UK',
			name: 'Rudi Schuech',
			position: 'Postdoc',
			department: 'School of Life Sciences',
			university: 'University of Lincoln'
		},
		{
			country: 'UK',
			name: 'John Holden',
			position: 'PhD Student',
			department: 'Jointly, Sch of Food Science & Nutrition, and Sch Mathematics and Statistics',
			university: 'University of Leeds, UK & Newcastle University, UK.'
		},
		{
			country: 'UK',
			name: 'Martin Bees',
			position: 'Professor',
			department: 'missing information',
			university: 'missing information'
		},
		{
			country: 'UK',
			name: 'Md. Mamunur Rashid',
			position: 'Senior Research Fellow',
			department: 'Kings Business School',
			university: 'Kings College London, University of London'
		},
		{
			country: 'UR',
			name: 'Mariana Sotelo Silveira',
			position: 'Associate Professor in Biochemistry',
			department: 'Departamento de Biologia Vegetal',
			university: 'FAGRO, UdelaR'
		},
		{
			country: 'UR',
			name: 'Maria Lucia Pareja Pereira',
			position: 'Professor',
			department: 'Departamento de Quimica del Litoral',
			university: 'Universidad de la Republica'
		},
		{
			country: 'UR',
			name: 'Paola Scavone',
			position: 'Research Assisstant',
			department: 'Department of Microbiology',
			university: 'Instituto de Investigaciones Biologicas Clemente Estable'
		},
		{
			country: 'UR',
			name: 'Isabel Garcia Carriquiry',
			position: 'MSc',
			department: 'CENUR Litoral Norte',
			university: 'Universidad de la Republica'
		},
		{
			country: 'UR',
			name: 'Nicolas Benech',
			position: 'Associate Professor',
			department: 'Instituto de Física, Facultad de Ciencias',
			university: 'Universidad de la Republica'
		}
	];

	$scope.talks = [
		{
			tNumber: 1,
			name: 'Nicolas Benech',
			country: 'UR',
			position: 'Associate Professor',
			department: 'Instituto de Fisica, Facultad de Ciencias',
			university: 'Universidad de la Republica',
			tTitle: 'Elastography: Imaging elastic properties of soft tissues',
			abstract: 'Many deseases are correlated with changes in the elastic properties of soft tissues (e.g, breast tumors, prostate cancer, liver fibrosis). The traditional imaging methods in medicine, x-rays, MRI, echography, are not sensitive to those changes. Elastography is a tool that has been developed in the past 20 years to fill this lack. In this talk I will introduce basic concepts in ultrasound elastography and applications in medicine. Elastography can also be used to test mechanical properties of agrifoods, meat, fruits, and others. However, this area of application is underdeveloped. In our lab, we have developed a low-cost elastography method suitable for some agrifood applications. I will show some recent results of this research.',
			bio: 'PhD in Physical Acoustics, Universidad de la Rep√∫blica, (2008). Since 2010 working at the Laboratorio de Ac√∫stica Ultrasonora, Facultad de Ciencias. My reserch is in applied acoustics. Specially, I have been working in applications of ultrasound elastography to medicine. In addition, I developed a low-cost elastography device for application in agrifoods, like bovine meat and fruits. I also teach basic physics courses at undergraduate level and physical acoustics for post-graduate students.'
		},
		{
			tNumber: 2,
			name: 'Martin Bees',
			country: 'UK',
			position: 'Professor',
			department: 'Department of Mathematics',
			university: 'University of York',
			tTitle: 'Modelling suspensions of cells: from bioconvection to biofuels',
			abstract: 'The aim of this talk is to give an overview of some projects and mathematical analyses conducted at York that have potential application in algal biofuel production. There is much recent interest in employing green algae for biotechnological applications, including the production of biofuels. However, the fact that many cells swim is often overlooked. Biased swimming motion leads to accumulations of cells that can induce large scale fluid motion, called bioconvection. Mathematical modelling can offer many methods to aid the understanding of these living suspensions. Here, I shall describe how a suspension of biased swimming cells can be modelled, the optimisation of hydrogen production by stressed algae, differential dynamic microscopy for high-throughput measurement of cell attributes, and dispersion of swimming cells in a flow in a tube. These aspects impact cell harvesting, biofouling and optimisation of growth and stress conditions, and inform aspects of photobioreactor design. ',
			bio: 'I have been a Professor of Mathematics at the University of York since 2012, having previously worked for 10 years at the University of Glasgow, and 3 at the University of Surrey. I held postdoctoral positions at the Universities of Warwick and Copenhagen. My research falls into 6 main areas, all within mathematical biology, fluid dynamics and/or pattern formation: bioconvection; plankton dynamics & patchiness; bacterial swarming; chemically driven hydrodynamic instabilities; ecology & biocontrol; and mathematical physiology. I also have a wet-lab for biological fluid dynamics experiments.'
		},
		{
			tNumber: 3,
			name: 'Mariana Sotelo Silveira',
			country: 'UR',
			position: 'Associate Professor in Biochemistry',
			department: 'Departamento de Biologia Vegetal',
			university: 'FAGRO, UdelaR',
			tTitle: 'Understanding root cell expansion orientation during osmotic stress adaptation.',
			abstract: 'One of the ways the mechanics of root growth is managed is through the regulation of cell wall expansion of elongation zone cells, and the changing mechanical properties of the cell wall play a major role on it. I work with the model plant Arabidopsis thaliana using mutants hypersensitive to osmotic stress evidenced by an arrest in root elongation, meristem disorganization and root swelling, which makes it an interesting model to explore how root growth is controlled under stress conditions. I\'m starting a new research area with the aim of understanding how cell wall physical properties and the regulatory mechanisms that affect wall extensibility maintain growth under water deficit. Our strategy combines genetic and physiological studies together with force-indentation experiments. These information is valuable as it allows us to identify new genetic sources of water deficit tolerance to incorporate as useful characters for breeding programs of crops of economic interest.',
			bio: 'Mariana Sotelo is Associate Professor in Biochemistry at the Facultad de Agronomía, Universidad de la República, Montevideo, Uruguay. She studied Agricultural Engineering at Universidad de la Rep√∫blica and received her PhD in Plant Biotechnology from LANGEBIO, Mexico; working in fruit development. Now, she works with the model plant Arabidopsis thaliana to explore how root growth is mantained under water deficit.'
		},
		{
			tNumber: 4,
			name: 'Daniela Souza Ferreira',
			country: 'BR',
			position: 'Lecturer',
			department: 'Department of Food Technology',
			university: 'University of Campinas (UNICAMP)',
			tTitle: 'Thermal imaging: a fast, zero waste, non-contact technique of food safety.',
			abstract: 'Traditional methods to evaluate the hygienic efficiency of food industry equipment are time consuming, require high-cost materials, generate a lot of waste and training of analyst. Hence, the development of non-destructive, fast and reliable techniques to detect food residues and microorganisms, as biofilms, are necessary to quality control in food industry. In view of this, I am starting the field of research in infrared thermal imaging allied to chemometric to evaluate food safety in real time of processing. Thermal image is emerging analytical equipment, with low cost in contrast to hyperspectral or infrared spectroscopy images, which require a set of instruments, moreover, thermal image is suitable for a wide range of applications due to its portability, non-invasive and non-destructive.',
			bio: 'Dr Daniela Souza Ferreira got her Engineer degree in Food Engineering (2002) from the Mau√° Institute of Technology, Master and PhD in Food Science from the University of Campinas. During one year (2014/2015) was assistant professor at School of Food Engineering of the University of Campinas of the sensory analysis and quality control. She was also coordinator of the project of research and development (supported by FAPESP) at Institute of Food Technology (ITAL) and researcher at A√ßa√≠mazon Company, dealing with antioxidant compounds in a√ßa√≠ beverage, new technology of extraction, microbiology, HPLC, spectroscopy and sensory analysis. Currently she is lecturer at School of Food Engineering of the University of Campinas of the food safety, food technology and hygienic design. She is advisor of master in Food Technology. Dr Daniela Ferreira has academic experience on near infrared spectroscopy, analysis of antioxidant compounds, beverage technology, natural pigments, food quality control and chemometric.'
		},
		{
			tNumber: 5,
			name: 'Hermes Gadelha',
			country: 'UK',
			position: 'Lecturer in Applied Mathematics',
			department: 'Department of Mathemathics',
			university: 'University of York',
			tTitle: 'mathematical tales in cell biology and self-organization',
			abstract: 'A detailed look at the biological world generates endless untracked problems in fluid and solid mechanics. Cells and microorganisms endure in a variety of environments, while nodal cilia generate flows that are responsible for determining the normal asymmetry of the internal organs of the mammalian body, trypassonamitid infection use whip-like appendages to achieve propulsion. Microtubules assemblies supports the cytoskeleton mechanics and provide railways for fast and precise transport of proteins through mediated by the cell. Cellular membranes deform dynamically at the microscale and actively select the passage of molecules that are essential for sustaining life. In this talk, we will explore how mathematical modelling and simulation can be used to shed new light in cellular biology, from locomotion of microorganisms and flagellates to cellular mechanics, its physiology and even cancer. This will be achieved by combining constructively concepts from solid and fluid mechanics to formulate simple but powerful elastohydrodynamic models. Finally, we highlight that this is a fertile and challenging area of inter-disciplinary research and demonstrate the importance of future observational and theoretical studies on the underlying mathematics of cellular biology.',
			bio: 'Dr Gadelha works in the fertile intersects between mathematics and fertility. Following his DPhil in Mathematics at the University of Oxford, he worked as a WYNG Research Fellow in Mathematics at Trinity Hall, University of Cambridge, before going back to Oxford as a Robert Hooke Research Fellow. Today, he is a Lecturer in Applied Mathematics at the University of York and Honorary Fellow at Centre for Human Reproductive Science, Birmingham Women‚Äôs NHS Foundation Trust. His research has generated significant international recognition, with over than 50 worldwide media press releases and TV interviews, including BBC, Science, New Scientist and Discovery Channel.'
		},
		{
			tNumber: 6,
			name: 'Antonio Alvaro Ranha Neves',
			country: 'BR',
			position: 'Professor',
			department: 'Centro de Ciencias Naturais e Humanas',
			university: 'Universidade Federal do ABC',
			tTitle: 'Optical Tweezers and Soft Matter',
			abstract: 'After a brief introduction on optical forces, I will emphasize on the implementation of the technique of optical tweezers, a tool developed 40 years ago which is able to trap, move, and rotate micro objects noninvasively. The minuscule trapping force (or torque) and nanometer precision can be used to investigate single biological, chemical or physical processes within this pico-Newton to femto-newton range. Since these optical forces are orders of magnitude lower than contact forces technique, the deformation of soft matter samples could be avoided. Previous research results on optical trapping with polymeric materials will be presented, along with current themes, and outlook into future applications.',
			bio: 'Associate professor at the Federal University of ABC, worked as a CNR researcher and postdoctoral fellow at the National Nanotechnology Laboratories of the Institute of Nanosciences (Italy), Ph.D. in Physics from the State University of Campinas. Member of the Optical Society of America (OSA), coordinated the technical group of Optical Cooling and Trapping. I have experience in the field of physics, with emphasis on light-matter interactions, working mainly on the following topics: optical tweezers, spectroscopy, multi-photon, biophysics, polymer materials, quantum dots systems, nanostructured materials, and automation and instrumentation.'
		},
		{
			tNumber: 7,
			name: 'Maria Lucia Pareja Pereira',
			country: 'UR',
			position: 'Professor',
			department: 'Departamento de Quimica del Litoral',
			university: 'Universidad de la Republica',
			tTitle: 'Method development for determination of multi-class organic contaminants in different agricultural-livestock systems',
			abstract: 'Nowadays the usage of phytosanitary products and veterinary drugs is a widespread technique in the different agricultural-livestock systems. Animals may become contaminated when treated with these compounds to rid them of insect pests, or through exposure to contaminated water, feed or pastures. Moreover veterinary drugs are widely used for production enhancement, growth promotion, and improved feed efficiency. Some other contaminants such as mycotoxins may be present in some cases where the food is under inadequate storage conditions. Residues of these compounds in agricultural or animal products like milk, meat or cereals are of special concern due to the high consume of these products. In this way, the development of fast and cheap analytical methods for the simultaneous determination of pesticides and veterinary drugs residues and mycotoxins is crucial. Although there are plenty of methods reported for the analysis of these three types of contaminants separately, few of them have shown to be suitable for their simultaneous determination. Our group has been working on the determination of multi-residue methods for more than 10 years, following SANTE/11945/2015 guidelines. In this case, the development of different methodologies for the determination of veterinary drugs and pesticides residues and mycotoxins, in four matrices; bovine liver, muscle, milk and kidney will be discuss as an example of this research.',
			bio: 'Luc√≠a Pareja has her expertise in the evaluation of pesticides and veterinary drugs by liquid chromatography and gas chromatography coupled to mass spectrometry. Her PhD studies were related to the development of analytical methodologies for the determination of pesticide residues in rice ecosystem. During the PhD. she had a doctoral scholarship at the University of Almeria in Spain, to work in pesticide residue analysis with Dr. Amadeo Rodriguez Fernandez-Alba. She is a Professor in Universidad de la Rep√∫blica in Uruguay. She has participated in several research projects. She is co-author of three book chapters and more than 15 articles published in international journals.'
		},
		{
			tNumber: 8,
			name: 'James Smith',
			country: 'UK',
			position: 'University Lecturer (Assistant Professor)',
			department: 'School of Food Science & Nutrition, Faculty of Mathematics and Physical Sciences',
			university: 'University of Leeds, UK',
			tTitle: 'Exploiting stochastic percolation in biophysical models',
			abstract: 'In my group, we are beginning to explore phase transitions in biological systems and percolation phenomena. Our biophysical modelling is motivated by common general problems in biology, for example molecular interaction networks (protein gelation) and food colloidal surface systems and analogously cytotoxic drug spread through living cells, or disease epidemics in plants threatening ecosystems and crops. Systems are modelled on lattice occupied with a sessile population of different types of cells, receptive and insensitive to a reactant. In such cases, receptive cells are susceptible to change of state when in contact with the reactant whereas insensitive cells are stable. This talk will introduce the work we are starting to develop in our group, our collaborators and specificlly the work of my PhD student, who will then show that quantitative predictions of epidemic spread can be performed by a framework for early-warning indicators of impeding regime shift, widely applied to dynamical systems. Signals forecasting the outcome of the critical shift between the stable phases before a system enters a phase transition (epidemic).',
			bio: 'James is a new Lecturer and Group Leader at the School of Food Science and Nutrition, Faculty for Mathematics and Physical Sciences, University of Leeds, UK. He currently has a small research group with two PhD students and several MSc students. Previously, he was an MRC Senior Investigator Scientist (in Computational Systems Biology) his group specialised in pattern recognition in Lipid Profiling and Dynamics at the MRC human Nutrition Research unit (now Elsie Widdowson Laboratory), Cambridge, UK. Concurrently, he was a Lecturer at the Cambridge Computational Biology Institute (CCBI), Dept of Applied Mathematics & Theoretical Physics, University of Cambridge, UK. James\' original background and PhD was in computer-aided drug design and during his early postdoctoral career he was addressing molecular recognition problems faced in drug target discovery and metabolic state prediction. During his postdoctoral and lecturing career James has also worked at the University of Erlangen-Nuremburg and Jacobs University Bremen in Germany and at University College London and Birkbeck College London in the UK.'
		},
		{
			tNumber: 9,
			name: 'Marcelo D. Goissis',
			country: 'BR',
			position: 'Researcher',
			department: 'Animal Reproduction',
			university: 'University of Sao Paulo',
			tTitle: 'Studies on cell differentiation mechanisms during early bovine embryo development',
			abstract: 'One of the central questions of developmental biology is how a single nucleus can generate multiple tissues of an organism. The first events of cellular differentiation occur in the pre-implantation embryo and segregate cell lines that may become the embryo proper, placenta and extra-embryonic membranes. This differentiation process involves different molecular mechanisms, from cell polarization to temporally regulated expression of lineage-specific transcription factors. The aim of this project is to investigate mechanisms related to the first and second events of bovine embryonic cell differentiation. Experimental approaches will include use of small molecule inhibitors, CRISPR/Cas9-mediated gene editing and single-cell global gene expression analysis. Increased knowledge of mechanisms involved in early differentiation will aid understanding issues related to in vitro fertilization, nuclear transfer and pluripotent cell culture in bovine. In the future, techniques used in this project may be applied to genetically improve cattle, aiming to increase sustainability of the cattle industry.',
			bio: 'Inspired by "Dolly, the sheep", I enrolled in the Veterinary Medicine course at the University of S√£o Paulo. Besides cloning, transgenic technologies always interested me. During my PhD studies at Michigan State University I realised that understanding embryo development mechanisms would be important for improving reproductive biotechnologies. In my first post-doc, I switched gears to study spermatogenic cells in bovine; however my passion always remained the embryo. Then I went for a post-doc in Canada to study embryo development in mice. Currently, I am a FAPESP Young Investigator studying early embryo development in bovine.'
		},
		{
			tNumber: 10,
			name: 'Paola Scavone',
			country: 'UR',
			position: 'Research Assisstant',
			department: 'Department of Microbiology',
			university: 'Instituto de Investigaciones Biologicas Clemente Estable',
			tTitle: 'Relevance of Biofilm formation in biotic/abiotic surfaces',
			abstract: 'Biofilms are the most successful microbial style of life on earth and are assemblies of microbial cells enclosed in a matrix of polysaccharide and associated to a surface. Biofilm-associated organisms differ from their planktonic counterparts with respect to the transcribed genes and the growth rate. They are relevant for biogeochemical processes such as bioremediation or degradation, but also in a medical context and agrifood. In Biomedical context, biofilms are responsible for more than 80% of the infectious disease and 65% of the nosocomial infections. Cystic fibrosis, native valve endocarditis, otitis media, periodontitis, and chronic prostatitis are caused by biofilm-associated microorganisms. Indwelling medical devices such as urinary catheters harbor biofilms and are associated to infections. One of the most relevant features is that bacteria in Biofilms are highly resistant to antimicrobial agents and to clearance by the immune system. Different biofilm characteristics can be important for the infectious disease: (i) detachment of cells or aggregates may result in bloodstream or urinary tract infection, (ii) cells may exchange resistance plasmids within biofilms, (iii) cells in biofilm have reduced susceptibility to antimicrobial agents even in susceptible strains, and (iv) production of endotoxins and virulence factors. In our department we are focusing in different aspect of biofilm and the main research lines are: 1. study of biofilm formation in pathogens with emphasis in Proteus mirabilis, Escherichia coli, Klebsiella pneumoniae Pseudomonas putida, P. aeruginosa, and Acinetobacter baumannii 2.biofilm in pathogenesis: E. coli intracellular bacterial communities, P. mirabilis catheter associated urinary tract infection 3. strategies for biofilm erradication. The different approaches we have developed can be used in other microorganism and biological context as food industry, animal breeding, inoculants and so on.',
			bio: 'Paola Scavone was born in Montevideo (Uy) and have obtained a Bachelor Degree in Biochemistry, a Master Degree in Biological Sciences and a PhD in Microbiology at the University of the Republic in Uruguay. She has completed 3 years of postdoctoral fellowship in bacterial biofilms founded by Instituto de Investigaciones Biol√≥gicas Clemente Estable honoured as one of the Best Postdoctoral Fellowship in Uruguay and more recently she spent one year as research fellow at University of Brighton, UK. Now she is a Research Assistant in IIBCE, leading a small group of young researchers with 1 posdoc, 1 PhD student, 3 Master students and 2 bachelor degree students.'
		},
		{
			tNumber: 11,
			name: 'Ben Almquist',
			country: 'UK',
			position: 'Lecturer',
			department: 'Bioengineering',
			university: 'Imperial College London',
			tTitle: 'From Self-Assembled Soft Materials to DNA Nanotechnology: Strategies for Improving Health & Wellbeing',
			abstract: 'Materials provide the solutions to many of the world\'s pressing problems, with advances in materials underpinning advances in water purification, solar technology, energy storage, human health, and more. My research group aims to harness bioinspiration to develop materials-based approaches to pressing challenges across diverse fields. In this talk, I will cover our research into designing biotic-abiotic interfaces for applications that range from \'cyborg cells\' to possible engineered strategies for combating antimicrobial resistance. In addition, I will cover the power of DNA nanotechnology to provide potential low-cost, high-impact strategies for facilitating tissue repair. Finally, I will cover the strength of harnessing self-assembly of polymeric thin films to create functional coatings for wound healing and antibiotic delivery, with applications that span both animal and human health.',
			bio: 'My research at Imperial combines aspects of materials science and biology to develop methods for spatially and temporally integrating engineered materials with biological systems to direct behaviour. I received my BSc in Materials Science from Michigan Tech, MSc/PhD in Materials Science from Stanford, and was an NIH Ruth Kirschstein Postdoctoral Fellow at the Institute for Soldier Nanotechnologies and Department of Chemical Engineering at MIT. Over my career I have received several distinctions including selection as a 2017 Emerging Investigator by the journal Biomaterials Science, the Outstanding Young Alumni award from Michigan Tech, and Materials Research Society Graduate Student Gold Award.'
		},
		{
			tNumber: 12,
			name: 'Lindsay Todman',
			country: 'UK',
			position: 'Lecturer',
			department: 'Agriculture, Policy and Development',
			university: 'University of Reading',
			tTitle: 'Interactions between polymers, soils and plants in a novel irrigation system',
			abstract: 'Pervaporative irrigation allows in-situ treatment of low quality water whilst simultaneously distributing water throughout the soil. To irrigate using this method a pervaporative polymer membrane is formed into a pipe, buried in the soil and filled with water. If the soil is dry, a chemical potential gradient exists across the membrane and water is drawn into the soil. During the pervaporation process water sorbs into the membrane and desorbs into the soil in vapour phase. The irrigation flux into the soil is thus driven by the vapour pressure in the soil pores. Soil pores are typically humid, however modelling and experimental work demonstrate that the presence of osmotic compounds such as fertilisers in the soil lowers humidity and thus increase the flux from the membrane. Plant roots also release osmotic compounds into the soil in the form of root exudates. These exudates could thus provide a means by which plant might interact with the irrigation membrane in order to access adequate water.',
			bio: 'I originally trained as an engineer and hydrologist, but grew up on a farm and my research now focuses on modelling agricultural systems. A particular focus is soils, which I have studied at a range of scales. For example, I have studied interactions in microbial communities in a few grams of soils using statistical approaches and have also used process based models to understand the trade-offs between agricultural production, nutrient leaching and greenhouse gas emissions from soils in agricultural landscapes.'
		},
		{
			tNumber: 13,
			name: 'Thais Rose dos Santos Hamilton',
			country: 'BR',
			position: 'Postdoc',
			department: 'Department of Animal Reproduction',
			university: 'University of Sao Paulo',
			tTitle: 'Effect of the male on in vitro reproductive biotechnologies',
			abstract: 'In vitro production (IVP) of bovine embryos is an important technology of animal reproduction. This technology is applied on research and on the field, with economic importance. Despite its applicability, the efficiency of IVP is considered limited when compared to the in vivo process. The effect of sperm in embryonic development has been described but it is not yet clear. The success of the in vitro fertilization processes also depends on the molecular aspects of the sperm cell, such as integrity of sperm DNA and genetic regulation. Therefore, these aspects directly influence livestock production indexes, as these indexes depend on the reproductive efficiency. By improving in vitro reproductive biotechnologies we can ameliorate breeding programs and consequently increase yield, leading to more efficient production systems.',
			bio: 'I am a veterinarian with a MSc and PhD degrees in animal reproduction. Over the last years, I have been studying the sperm nucleus, exploring aspects of sperm chromatin that could influence the fertilization process, determining or not the embryo formation. I also worked with Spanish researchers studying melatonin action on male reproductive tract. Presently, I study sperm post-transcriptional regulation factors that may influence bovine in vitro embryo production. Also, our research group collaborates with a Chilean group to study molecules with antimicrobial action, which could be used to replace antibiotics in semen diluents used for reproductive biotechnologies.'
		},
		{
			tNumber: 14,
			name: 'Isabel Garcia Carriquiry',
			country: 'UR',
			position: 'Research Analyst',
			department: 'CENUR Litoral Norte',
			university: 'Universidad de la Republica',
			tTitle: 'Agrochemical Impacts on the environment and agrifood products.',
			abstract: 'Our work team is integrated by interdisciplinary and complementary areas: plant protection, analytical chemistry, social sciences and fluvial ecology. It arises in response to an accelerated intensification in agrochemicals usage in our country during the last years. Part of this reality is related to the process of agricultural intensification but also to changes in production culture. Most pesticides are not specifically directed at the pest and during its application it also affects non-target plants and animals. In turn, part of the problem is that most of the information generated derives from studies carried out with active principles isolated. However, actually, the active principles are applied as commercial formulations and usually in mixtures, generating different impacts from those expected. Our work team pretends to propose and promote the adoption of responsible agrochemicals management, taking into account the fundamental pillars of sustainability (social, environmental and economic aspects). The research line aims to quantify agrochemical residues in the environment (soil, air, water courses) and harvestable products. Based on the quantification activities, an analysis will be carried out to allow the diagnosis of the impacts magnitude per product-system-productive environment. This information will be used for planning, as well as ranking according to the importance or urgency of the problem, the sequence of actions and studies necessary to mitigate them.',
			bio: 'Isabel Garcia graduated as agronomist in 2012 and obtained her master degree in 2017 at Facultad de Agronoma- Universidad de la Republica (Uruguay). From 2012 to 2015 she worked as agronomist in Sociedad de Fomento Rural de Colonia Suiza, advising dairy, livestock and agricultural producers. In 2015 she gained a position as research assistant in Centro Universitario Litoral Norte-Universidad de la Republica, integrating an interdisciplinary group, which pretend to study pesticide impacts on environment and food. She is specially focused on herbicides impacts on soil and water quality. At present she is planning to iniciate her doctorate degree.'
		},
		{
			tNumber: 15,
			name: 'Alys Jepson',
			country: 'UK',
			position: 'Postdoc',
			department: 'Biosciences',
			university: 'The University of Exeter',
			tTitle: 'A portable device for measuring bull sperm motility',
			abstract: 'Bull sperm motility is crucial to high fertilization rates and therefore to profitable cattle livestock enterprise. To date, there is no easily portable method to assess semen motility objectively on-farm and therefore subjective visual estimations are widely used. We have developed a portable device that can be used as a fast, high-throughput and objective method to measure the average swimming speed (v), head oscillation amplitude (A), head oscillation frequency (f) and % motility of ~103 bull sperm. We have validated the measurements of bull sperm in the lab and have successfully tested the device bull-side on-farm. Using the device, high-time resolution monitoring of motility shows changes of swimming speed in a sealed capillary due to oxygen depletion, a useful indicator of metabolism. The measurements are unrestricted by concentration and we confirm that the normal procedure of diluting semen to low densities causes higher swimming speeds due to reduced viscosity. Finally I will mention a separate project on Candida growth and competition in relation to antimicrobial resistance.',
			bio: 'I completed a degree in Physics at Leeds University and then moved to Professor Wilson Poon‚Äôs group in Edinburgh. For my PhD I used Differential Dynamic Microscopy (DDM) to investigate E. coli motility and the enhanced diffusion of passive bacteria. I also studied E. coli population dynamics in the antimicrobial peptide pexiganan. After my PhD I worked on an industrial collaboration to validate the use of a prototype for measuring the motility of bull sperm, alongside a project on active microtubule droplets. I am currently a postdoc working in the microbial ecology and evolution group of Ivana Gudelj in Exeter.'
		},
		{
			tNumber: 16,
			name: 'Diego Samuel Rodrigues',
			country: 'BR',
			position: 'Postdoc',
			department: 'Biosciences Institute',
			university: 'UNESP, Botucatu-SP, Brazil',
			tTitle: 'Mathematical and computational modeling of cell-related phenomena',
			abstract: 'The talk consists of an overview on my two main areas of research: (a) mathematical biology of cell populations, by using ordinary differential equations and parameter estimation, and (b) numerical studies on the mechanics of lipid bilayers by using finite elements. Examples and results on the first topic will be shown in the context of tumor growth [1] and in an ongoing modeling study on the pharmacokinetic profiles of nanomagnetic particles [2]. Numerical results on the second topic will be presented considering a closed lipid bilayer as a simplified model for membranes of living cells [3]. [1] D. S. Rodrigues, Paulo F. A. Mancera, Suani T. R. de Pinho. "Understanding the antiangiogenic effect of metronomic chemotherapy through a simple mathematical model". Physica A: Statistical Mechanics and its Applications, 464: 251‚Äì266, 2016. http://dx.doi.org/10.1016/j.physa.2016.07.076 [2] G. A. Soares, A. G. Pr√≥spero, M. F. F. Calabresi, D. S. Rodrigues, C. C. Quini, R. R. V. Matos, L. A. Pinto, A. A. Sousa-Junior, A. F. Bakuzis, P. F. A. Mancera, J. R. A. Miranda. "Multichannel AC Biosusceptometry system to access in vivo pharmacokinetic profiles of magnetic nanoparticles by images". Preprint Submitted to Nanomedicine: Nanotechnology, Biology, and Medicine, 2018. [3] D. S. Rodrigues, R. F. Ausas, F. Mut and G. C. Buscaglia. "A semi-implicit finite element method for viscous lipid membranes". Journal of Computational Physics, 298: 565‚Äì584, 2015. http://dx.doi.org/10.1016/j.jcp.2015.06.010.',
			bio: 'Education: 2008. BSc in Physics, UNESP, SP, Brazil. 2008. BEd in Physics, UNESP, SP, Brazil. 2011. MSc in Applied Mathematics, UNESP, SP, Brazil. Master\'s thesistitle: "Mathematical modeling in cancer: angiogenesis dynamics and antineoplastic chemotherapy". 2015. PhD in Computational Mathematics, USP, SP, Brazil. Doctoral thesis title: "A numerical approach to the mechanics of lipid interfaces: modeling and simulation". Areas of research: Mathematical Biology; Computational Modeling of Biological Phenomena. Main research articles: [1] http://dx.doi.org/10.1016/j.jcp.2015.06.010 [2] http://dx.doi.org/10.1016/j.physa.2016.07.076'
		},
		{
			tNumber: 17,
			name: 'Susana Direito',
			country: 'UK',
			position: 'Postdoc',
			department: 'School of Physics and Astronomy',
			university: 'University of Edinburgh',
			tTitle: 'The Edinburgh Complex Fluids Partnership and agrifood challenges',
			abstract: 'The Edinburgh Complex Fluids Partnership (ECFP) is embedded within a world-leading soft matter and biological physics research group at the University of Edinburgh, which draws on its world-renowned academic expertise and cutting-edge facilities to provide solutions for industry through both consultancy and research. Our focus areas for industrial collaboration are formulation science, life in complex fluids and computer simulations of complex fluids. Our strengths are in understanding how different components interact to deliver structure and function. We deliver bespoke projects tailored to company needs and are always keen to forge new academic connections to enrich our knowledge and capability for innovation. This talk will explore how ECFP and biological soft matter science can help facing current agrifood challenges.',
			bio: 'I completed my PhD in 2012 in the Geomicrobiology/Quantitative Microbial Ecology group at the Molecular Cell Physiology department, VU University Amsterdam. My first postdoctoral post was at the Leiden Institute of Chemistry where I did Astrobiology research. Afterwards, I moved to the University of Edinburgh, where I continued the research in Astrobiology and Microbiology and developed and managed a STFC-funded network (GeoRepNet) with a strong focus on technology transfer. I now work in biological physics doing research on antibiotic resistance and biofilm formation and I am the Impact Acceleration Associate for Biological Physics at the Edinburgh Complex Fluids Partnership'
		},
		{
			tNumber: 18,
			name: 'Verena Kriechbaumer',
			country: 'UK',
			position: 'Vice-Chancellors Research Fellow in Biology',
			department: 'Deaprtment of Biological and Medical Sciences',
			university: 'Oxford Brookes University',
			tTitle: 'Linking structure and function of the plant endoplasmic reticulum',
			abstract: 'A great proportion of the planet‚Äôs food supply for proteins and carbohydrates is produced, processed and transported through the plant secretory pathway. The endoplasmic reticulum (ER) forms the first compartment in the secretory pathway and is a major factory for protein and lipid synthesis, assembly, quality control, and export. The ER can also be used to produce molecules of importance to industry such as antibodies, therapeutics and valuable chemicals. Therefore, biotechnologically the ER has great potential for the development of strategies to manipulate or increase protein productivity in plants. The ER forms a highly dynamic polygonal network structure composed of sheets and tubules. This network structure is maintained by different protein families. Plant reticulon family proteins (RTN) for example tubulate the ER by dimerization and oligomerization, creating localized ER membrane tensions that result in membrane curvature; a subgroup of these reticulons is also involved in lipid regulation. A novel family of Lunapark proteins on the other hand is involved in ER sheet formation. The ER also acts as a platform for metabolic processes such as the biosynthesis of the major growth hormone auxin. We are interested in how ER structure and function are linked in terms of protein production and secretion as well as the assembly of metabolic enzyme complexes on the ER membrane.',
			bio: 'I am a plant cell biologist and protein biochemist at Oxford Brookes University with expertise in the structure and function of the plant endoplasmic reticulum (ER), membrane proteins and auxin biosynthesis using biochemical techniques as well as high-resolution live cell imaging. I have developed a research pathway in auxin biosynthesis going back to my degree and PhD work at the Technical University of Munich where I studied the nitrilase pathway in maize auxin biosynthesis and maize tryptophan synthase complex. I further investigated membrane proteins and the targeting of tail-anchored proteins at Sheffield Hallam University. I took up a position at Oxford Brookes University investigating the role of reticulon proteins in ER tubulation and viral trafficking. My current research as University Research Fellow aims to link the structure and function of the plant endoplasmic reticulum with auxin biosynthesis. As I have a strong interest in translational research I am also working on engineering plants to convert methane into carbon dioxide.'
		},
		{
			tNumber: 19,
			name: 'shahin ranjbarzadeh',
			country: 'BR',
			position: 'Postdoc',
			department: 'Mechanical Engineering',
			university: 'Federal University of Rio de Janeiro',
			tTitle: 'IPMC based micropump in biomedical applications: Modeling and simulation',
			abstract: 'For the last three decades, numerous micropumps have been developed and they can be categorized according to their actuation method as piezoelectric, shape memory alloy, electromagnetic, pneumatic, thermopneumatic or electrostatic actuation. Ionic polymer-metal composites (IPMCs) are an important class of electroactive polymers (EAPs) that are composed of an ionomeric membrane sandwiched between two metal electrodes, with built-in actuation and sensing capabilities. It is a very interesting concept to employ the IPMC actuators for design micropumps. Compared to another type of actuation techniques, IPMC consumes lower energy to produce large deformation and high actuation force. This lower voltage is also suitable for the design of highly miniaturized microfluidic systems with low power operation. In this research project, a mathematical model will be developed to simulate IPMCs-fluid interaction under external electric potential. Then it is proposed to study and analyze IPMC diaphragm in micropump to develop the insulin dispenser micro device. In the next step, an ophthalmic micropump implant will be investigated in order to remove excess aqueous humour that may be causing Glaucoma. Glaucoma is a term used to describe a group of eye diseases that cause irreversible gradual vision loss. High pressure due to aqueous humour accumulation in anterior chamber was known as a main risk factor of Glaucoma. When compared to eye-shunt surgery and current treatment, IPMC micropumps have higher control on the fluid flux with less failure.',
			bio: 'I graduated in Materials Science and Engineering in 2007. During Master (2008-2010) I worked on a joint research project between Sharif University of Technology with Cambride University and on CdTe nano structured in solarcell application. Since 2012 I focused on modeling and simulation of smart soft materials such as hydrogels and Ionic Polymer metal composite (IPMC). We developed a IPMC cilia based micropump in medical applications. Currently I am doing Postdoc in LMS laboratory in Federal University of Rio de Janeiro.'
		},
		{
			tNumber: 20,
			name: 'John Atibila',
			country: 'UK',
			position: 'Knowledge Exchange/Research Impact Fellow',
			department: 'Centre of Landscape & Climate Research',
			university: 'University of Leicester',
			tTitle: 'Enhancing Food Security, through Biological Soft Matter in Agri-Food Systems',
			abstract: 'A new research project is exploring how wild plants that produce colloids, complex fluids, and other substances which constitute supplementary foods in household diets (spices, flavours, seasonings) can be integrated into agri-food systems to enhance food security in tropical forest areas of West Africa. The research team is currently carrying out on-farm experimentation to integrate five species: Capsicum frutescens (Chilli peppers), Piper guineense (West African black pepper), Ocimum canum (Brasil mint/oil), Cola nitida (cola nuts), Monodora myristica (African Nutmeg) into farming systems to promote large-scale domestication and production to supply agro-processing factories. The project has potential to reduce unemployment, increase agro-enterprises, increase household incomes and poverty alleviation. By supporting local communities grow spices and flavours in large quantities, there is potential to increase availability and access by poor households, thus directly contributing to food security.',
			bio: 'Dr John Atibila, born in Ghana, had his PhD from Faculty of Environment in University of Leeds in 2011, with PhD fellowship award from Ford Foundation. Before that he obtained a Master of Science in Agroforestry from Kwame Nkrumah University of Science & Technology in Ghana, with joint scholarships from ICRAF, Nairobi-Kenya and IITA, Ibadan-Nigeria. He also holds a BSc Honours in Biology from University of Cape Coast, Ghana. Dr Atibila is Director of Research, Innovations & Partnerships of Ghana Baptist University College and currently Visiting Knowledge Exchange Fellow in University of Leicester. He has initiated several academic-industry partnerships linking researchers in UK/EU with counterparts in Africa and South East Asia. He is looking to form new links and partnerships with scientists and research user stakeholders in South and Central America which have some environmental conditions similar to Africa.'
		},
		{
			tNumber: 21,
			name: 'Denny Vitasari',
			country: 'UK',
			position: 'Postdoc',
			department: 'Mathematics / Institute of Mathematics, Physics and Computer Science',
			university: 'Aberystwyth University',
			tTitle: 'Simulation of dynamics of wet foam in narrow channel with complex geometry',
			abstract: 'Aqueous foam consists of air bubbles separated by thin liquid films. Foam has wide industrial applications, ranging from flotation in the mining industry, oil recovery, and foam fractionation, as well as consumer products. Among those applications, aqueous foams flowing through microfluidic channels have received attention during the last decade, supported by advancing technologies in the field. Applications of liquid foams in microfluidic channels include medical, pharmaceutical, and biological fields as well as oil recovery and soil remediation. In the application of microfluidic channels, foams usually act as displacing liquid, where its efficiency depends on the yield stress, the critical point that separates solid-like behaviour from unrestrained flow. Control of these systems is largely driven by the geometry and flow-rate of the foam and the geometry of the channel. The liquid fraction in the foam also determines the film deformation. Therefore, this study is aimed to develop the dynamics of wet foam to examine the effect of liquid content and channel geometry on the foam flow in microfluidic channel. A model is developed via the extension of a \'viscous froth\' model to simulate the dynamics of a wet foam in a Hele-Shaw cell, consists of two flat walls, confining a layer of bubbles within, resembling two-dimensional foam. The two-dimensional model includes the friction experienced by the soap films as they are dragged along the cell walls, while retaining accurate geometrical information. To explore the consequences of changing the liquid content in this situation, we consider a simple foam geometry known as a bubble lens: a bubble partially filling a narrow, constricted channel with a single film spanning the gap between the bubble and the opposite wall. The triple vertices of this structure are decorated with Plateau borders whose area determines the liquid fraction of the foam. New expressions are derived to allow the pressure in the Plateau borders to be calculated, and determine numerically the range of driving velocities of the foam flow. Our results show there is a limited range of driving velocities for which the system is stable (Vitasari D, Cox S, Colloids Surf. A, 534, 8, 2017). As the liquid fraction increases, or the channel\'s side-walls deviate from being parallel, the spanning film is more greatly distorted, reducing the range of stable driving velocities. For higher velocities, the spanning film moves so quickly that it leaves the bubble behind, a situation beyond the foam\'s yield stress, which must be avoided in any particular application.',
			bio: 'I obtained my PhD in Chemical Engineering from University of Manchester, United Kingdom in July 2014. My PhD thesis is on modelling the adsorption and fluid dynamics of surfactant/protein on a foam lamella. Upon finisihing my PhD I get a lectureship position at Department of Chemical Engineering, Universitas Muhammadiyah Surakarta, Indonesia, which I still hold at present. To improve my network and research experience, I joined Institute of Mathematics, Physics and Computer Science, Aberystwyth University as a Postdoc in May 2016. My current project is on modelling the flow of foam in narrow channels with complex geometries.'
		},
		{
			tNumber: 22,
			name: 'Milton Yutaka Nishiyama Junior',
			country: 'BR',
			position: 'Associate Researcher',
			department: 'Laboratorio Especial de Toxinologia Aplicada',
			university: 'Instituto Butantan',
			tTitle: 'Omics data analysis and integration of signaling pathways for new insights in the Biological Systems',
			abstract: 'The CeTICS Project amis to discover and chemically characterize molecular targets of venom toxins, which probably initiate biological responses of interest in human pathophysiology and therapeutics. The CeTICS sub-projects generate a vast amount of heterogeneous, low and high-throughput omics data, whose complexity defy analytical efforts to uncover hidden biological knowledge. The Next generation sequencing (NGS) has been widely used in the Butantan Institute projects for the sequencing of genomes and transcriptomes focusing mainly on venomous animals, such as snakes, scorpions, caterpillars, ticks, anemone and many others. Thus, we have been developing a new Platform (CeTICSdb) and tools for data analysis and integration, exploring the genomic and transcriptomic sequences, proteomics and peptidomics data and the application of functional genomics and heterogeneous public data. We have developed bioinformatics tools for analyzing transcriptomic and proteomic data for experiments of one time point or for multiple conditions, and allowing comparisons between then. The platform allows the Enrichment analysis and Pathway Relative Abundance studies, integrated with machine learning approaches. Such approaches contribute for the identification of differentially expressed genes, responsive pathways and generation of static maps, and identification of expression patterns for genes and pathways. The signaling static maps generated from transcriptomic and proteomics analysis will be used as source for designing of dynamic models and simulation in the web-based tool developed by the CeTICS group (SignNetSim ‚Äì Signaling Network Simulator). Besides that, we have developed a Shiny web-interface tool for the prediction and classification of enriched genomics regions, for ChIP-Seq, MNAse-Seq, MFA-Seq, and other data analysis.',
			bio: 'PhD in Bioinformatics Graduate Program by the University of Sao Paulo ‚Äì USP (2015). Graduated in Mathematics by the Federal University of Sao Carlos -UFSCar (1999). Currently is an Associate Research at the Instituto Butantan - Special Laboratory for Applied Toxinology. Has experience in the development and application of computational and mathematical methods to solve problems in the life science, and analysis of large-scale -Omics data for model and non-model organisms. I am interested in methods for knowledge discovery and data mining in order to obtain integrated systems that improve the understanding of molecular mechanisms that govern the biological systems.'
		},
		{
			tNumber: 23,
			name: 'Vincenzo di Bari',
			country: 'UK',
			position: 'Postdoc',
			department: 'Division of Food Sciences, School of Biosciences',
			university: 'University of Nottingham',
			tTitle: 'Oleosomes: natural plant organelles for the replacement of synthetic emulsions to tackle the agrifood and pharma challenges',
			abstract: 'This work focuses on the optimisation of a water-based method for the recovery of oil from oleaginous seeds. This approach offers several advantages: (1) the oil is recovered in its natural form, i.e. intracellular organelles called ‚Äòoleosomes‚Äô; (2) water is used as extraction medium thus replacing organic solvents currently used to extract oils; (3) the by-products have not been exposed to toxic solvents and can be used as source of nutraceutical functional compounds. Oleosomes are micron-size lipid droplets where the triacylglycerol core is stabilised by a half-unit membrane of phospholipids and proteins. These novel colloids, naturally rich in polyunsaturated fatty acids and tocopherols, are stable on pasteurisation and freezing. From a fundamental science perspective, oleosomes represent an exciting example of bio-soft materials stabilised by mixed emulsifiers. These systems offer a wide range of applications including natural food ingredients and delivery vehicles of bioactive compounds. Use of oleosomes requires a multi-disciplinary approach ranging from agricultural-biological science (role of seed type and growing history) through to engineering (recovery optimisation and materials treatment) to food and pharma technology for product formulation to achieve the desired functionality.',
			bio: 'Vincenzo has joined the Centre for Innovative Manufacturing in Food at the University of Nottingham (UoN) in 2014. He attained his PhD at the School of Chemical Engineering (University of Birmingham, UK); his project aimed at using emulsion technology to reduce fat content in chocolate. He graduated with a BSc Hons and an MSc in Food Science and Technology (Faculty of Agriculture, Foggia, Italy). During his MSc he spent six months at Rothamsted Research Centre working on a project to identify gluten variations in genetically modified wheat. At UoN, his research focuses on recovering and valorising natural biomaterials and upgrade waste streams for food applications.'
		},
		{
			tNumber: 24,
			name: 'Md. Mamunur Rashid',
			country: 'UK',
			position: 'Senior Research Fellow',
			department: 'Kings Business School',
			university: 'Kings College London, University of London',
			tTitle: 'Smart Cyber-physical Farm management for sustainable economic development',
			abstract: 'Farming is historically the oldest economical human activity which has very less use of modern technology. This huge gap in state-of-the-art technology and it’s end user is created because of the lack of knowledge transfer between middleman and farmers. Even in the modern days because of the huge socio-economical gap between poor and rich this is still not an achievable target for the deprived hardworking community. But this trend is now gradually shifting to a different direction because of the cost-effective technologies for the grassroots people and less technical knowledge is needed because of the efficient development in Human Computing Interactions (HCI) for less tech literate users. The Big Data analytics is also playing a big role in this echo-system. This can make the supply chain very efficient and farming profit can be directly shared with farm workers. Policymaker and government still have a big job to do to reduce the gap between technology and its users for a sustainable socio-economic development.',
			bio: 'I am currently working as a Senior Research Fellow at Kings Business School, Kings College London. I am working in a new digital analytics centre called ‚Äì CODA (Consumer and Organisational Digital Analytics Research Centre. My work will be focussing on Indirect empirical data (lab and field experiments), Direct market observation (automatic online data collection), Surveys and Simulation for simplifying the business model. Previously I worked as a Scientific Research Computing specialist 3 years at the University of Oxford. I was awarded a PhD Scholarship to work at the European Organisation for Nuclear Research (CERN), Switzerland when I started my PhD at University of Cranfield. I was awarded a further scholarship by the Atlantic Association for Research in the Mathematical Sciences (AARMS) at the University of New Brunswick, Canada, 2008. I worked 3 years at Imperial College London, UK in the Space and Atmospheric Physics (SPAT) group in the Physics Department. My research project was involved large volume infrastructural data analysis in a distributed HPC environment on commodity hardware for financial loss analysis for any given natural disaster. In my research career, I have successfully secured a number of scientific research and travel grants from The Natural Environment Research Council (NERC), the UK and Newton Fund ((British Council) with Thailand, Turkey, China, Kazakhstan and Dubai).'
		},
		{
			tNumber: 25,
			name: 'Maria Luisa Lopes de Faria',
			country: 'BR',
			position: 'Postdoc - Startup Founder',
			department: 'NAP USP Cidades',
			university: 'University of Sao Paulo',
			tTitle: 'Insights Into IoT Data and an Innovative DWT-Based Technique to Denoise Sensor Signals',
			abstract: 'The Internet of Things (IoT) has been widely discussed and investigated, not only by academics but also by various segments of industry and commerce. Once established and fully operational, this technology is set to offer considerable benefits. Sensors will send large amounts of data for analysis and interpretation in real-time or near real-time. These data streams will flow at high speed, in large volumes, varying in type, and value. However, it is likely that sensors will face numerous obstacles what can pollute their data with significant amount of noise. This paper investigates sensor data streams and sensor signals in order to identify their specific characteristics and issues, particularly the problem of noise. This paper also investigates discrete wavelet transform (DWT) to reduce noise. Results here show significant improvements in the sensor signal when using DWT. The principal conclusion of our analysis is that, by knowing the main issues of IoT data, it is possible to track problems and reduce data errors. Another practical conclusion is that DWT is a powerful tool for reducing signal noise.',
			bio: 'Maria Lu√≠sa Lopes De Faria received the Ph.D. degree in computing engineering from the University of S√£o Paulo, Brazil. From 2013 to 2015, she was a Visiting Student with the Centre for Vision, Speech, and Signal Processing, University of Surrey. Recently, she founded a startup called Merit2U. Her startup is focused on IoT and Big Data for the benefit of big cities in the global world. FAPESP‚ÄìS√£o Paulo Research Foundation is supporting her startup since the beginning of 2017.'
		},
		{
			tNumber: 26,
			name: 'Rudi Schuech',
			country: 'UK',
			position: 'Postdoc',
			department: 'School of Life Sciences',
			university: 'University of Lincoln',
			tTitle: 'Numerical modeling of swimming microorganisms',
			abstract: 'Motile microorganisms such as bacteria and algal cells often have complex morphology, which is poorly represented in many traditional modeling approaches. To accurately account for the effects of complex geometry on the microscale flows around microorganisms, we developed an accurate, efficient numerical model based on a regularized Stokeslet Boundary Element Method. We applied this code to freely swimming curved-rod bacteria (e.g. Vibrio cholerae) and predicted how several components of ecological fitness (e.g. swimming efficiency, chemotactic ability) depend on cell shape, providing the first comprehensive explanation for why bacterial curvature has evolved. We also applied the model to swimming dinoflagellates, which employ an incredibly complex flagellar propulsion mechanism that has eluded clear mechanistic understanding until now. Possible future applications of the code include the motility of pathogenic microorganisms and the capture of geometrically complex particles or microorganisms by filters.',
			bio: 'I have degrees in Biological (BS, Cornell University) and Environmental (MS and PhD, University of California, Berkeley) Engineering. I consider myself a biological engineer, with a strong interest in applying numerical modeling approaches to biological systems, especially those involving microscale fluid dynamics. I first used computational fluid dynamics (CFD) during my PhD to study odorant detection by the microscopic chemosensory hairs of marine crustaceans. During my current postdoc at University of Lincoln, I am performing detailed CFD simulations of individual swimming bacteria and unicellular algae.'
		},
		{
			tNumber: 27,
			name: 'Ester Gomide',
			country: 'BR',
			position: 'R&D Analist',
			department: 'R,D & I Programming Support Center',
			university: 'Embrapa',
			tTitle: 'R&D organization at Embrapa (Brazilian Agricultural Research Corporation): an exercise of convergence',
			abstract: 'Embrapa was created to strengthen the government’s capacity to respond to the demands of Brazilian agriculture to help anticipate and face the challenges of the future. Considering the multidisciplinary nature of agriculture, Embrapa has organized research projects into groups within a thematic view. The projects are organized to address high priority challenges within a given subject, based on the joint vision of different Embrapa Centers. The convergence of varying knowledge bases can offer a new integrated approach to be used by Embrapa. Therefore, the objective of the talk is to present Embrapa\'s R&D programme and to seek opportunities for collaboration and interaction among the thematic areas, in efforts to expand the range of disciplines that can be used to solve the problems faced by the Brazilian dairy sector.',
			bio: 'Graduated in Agronomy by the Federal University of Vi√ßosa (1995) and Master in Entomology by the Federal University of Vi√ßosa (1997). I am currently at Empresa Brasileira de Pesquisa Agropecu√°ria (Embrapa) working in the RD & I Programming Support Center. It includes reviewing research projects, identifying funding opportunities and supporting research program management. I have had experience in administration, coordination and management of research projects in the Conselho Nacional de Desenvolvimento Cient√≠fico e Tecnol√≥gico (CNPq), Petrobras, University of Tiradentes and Arthur Bernardes Foundation.'
		},
		{
			tNumber: 's1',
			name: 'Daniel Ricardo Argumedo',
			country: 'BR',
			position: 'Phd student',
			department: 'Program of nanoscience and advanced materials',
			university: 'Federal University of ABC',
			tTitle: 'Characterizing bull sperm motility with optical tweezers',
			abstract: 'The use of an optical tweezer in biology was Ô¨Årst described by Ashkin and Dziedric in 1987 to trap bacteria and viruses. The optical tweezers can trap and analyze the motility of individual sperm, with no other comparable/rival technique. The objective of this project is to characterize the sperm motility of bulls with optic tweezers, contributing in this area of investigation in the measurement and verification of mobility, managing to create a suitable configuration for the classification of semen. In addition, wite would compare the experimental results with mathematical models of the mobility.',
			bio: 'PhD student in nanoscience and advanced materials at the Federal University of ABC, research area: Optical tweezers with sperm, He has a master\'s degree at Rey Juan Carlos University (Spain), Master in information and communication technologies in biomedical engineering, is Biomedical Engineer of the University Corporation for Science and Development (Colombia). He has experience in biomedical engineering with emphasis on advanced telecommunications systems in hospitals, and also has experience in bioengineering and biomaterials.'
		},
		{
			tNumber: 's2',
			name: 'Alexander Taufiq Safar',
			country: 'UK',
			position: 'PhD student',
			department: 'Mathematics',
			university: 'Cardiff University, UK',
			tTitle: 'Debonding and stretching in biogenic cellular structures',
			abstract: 'Cellular biological tissues, such as apples, pears and potatoes, are a collection of Ô¨Çuid Ô¨Ålled parenchyma cells bound together by inter-cellular cohesion. In a ripe and juicy fruit, Ô¨Çuid is released from cells as the cell wall ruptures. In overripe or cold-stored vegetables the strength of the intercellular cohesion decreases and the cell wall strength increases, such that it takes less energy to separate cells than to burst. My work in this area focuses on two fundamental mechanical aspects. First, it concerns the mechanism of cell debonding, as this is key in explaining the behaviour of fruit and legumes during storage or cooking, and is decisive for the perceived quality of food products. Particular attention is given to the mathematical modelling of damage through shear and multiaxial deformations as these are more realistic but have been largely neglected in the literature due to many theoretical and computational difÔ¨Åculties. Second, it provides a multi-scale hyperelastic framework which relates the stresses and strains of a whole structure to those at the cell level. As different models can be obtained that reasonably explain the observed phenomena, a new Bayesian criterion for the selection of the best model calibrated to experimental data is employed.',
			bio: 'Alex Safar holds a Ô¨Årst class BSc (honours) degree in mathematics from the University of ShefÔ¨Åeld, UK, and qualiÔ¨Åed as a software developer in the aerospace and automotive industries before commencing his doctoral studies at Cardiff University, UK. His research focuses on the nonlinear elasticity of cellular architectures which has many potential applications to both biological and engineering materials. Alex is a keen scientiÔ¨Åc communicator and has received a number of prizes at national scientiÔ¨Åc meetings. He is currently Vice-President of the Cardiff Chapter of the Society for Industrial and Applied Mathematics & the Institute of Mathematics and its Applications.'
		},
		{
			tNumber: 's3',
			name: 'Oladele Samouel Olugbenga',
			country: 'BR',
			position: 'PhD student',
			department: 'Department of Agri-food Industry, Food and Nutrition (LAN)',
			university: 'Luiz de Queiroz College of Agriculture (ESALQ), University of S√£o Paulo (USP), Piracicaba, Sao Paulo, Brazil',
			tTitle: 'Modelling yhe pH effect on the Hydration kinetics of Carioca beans',
			abstract: 'For industrial utilization, design of processing machines and academic research data on the hydration kinetics of legumes is necessary. Therefore, the hydration process is important as a fore step to several other processes like germination, cooking, extraction and others. The process requires improvement because of its slowness and discontinuity. In this work, the effect of pH on the water uptake characteristics of carioca bean (Phaseolus vulgaris) was investigated. Four soaking solutions at pH levels of 3, 6 (natural value), 9 and 12 were prepared using diluted HCl or NaOH. The beans were immersed in the solutions for hydration at 25 oC. The moisture content over the soaking time exhibited a sigmoidal shape, which were adequately modeled. The pH of the solutions with pH 3 and 9 converged to ~6 during the process, which were attributed to the solids leakage and ions diffusion through the grains. The model‚Äôs parameters were affected by pH (p<0.05). The equilibrium moisture content and the hydration rate increased with increase in the Ph (from the natural pH 6 to 12), while the lag phase showed the opposite behaviour. By removing the pulse seed coat and conducting the same processes, it was possible to verify that the pH affected the mass transfer behavior of both seed coat and cotyledon, demonstrating changes on both proteins and polysaccharides. It was concluded that the water uptake characteristics of Carioca beans was greatly influenced by the pH of hydration solution, and that can be a simple approach to enhance this process. This work contributes to the explanation of the grain hydration behavior and possibly enhancing focusing on its optimization.',
			bio: 'Federal University of Technology, Akure, Nigeria. Department of Agricultural and Environmental Engineering. Bachelor of Engineering (2001-2006). Master of Engineering (2009-2011). Department of Agri-food Industry, Food and Nutrition (LAN), ESALQ, USP PhD (2017-'
		},
		{
			tNumber: 's4',
			name: 'Luca Meacci',
			country: 'BR',
			position: 'Phd student',
			department: 'ICMC - Instituto de Ciencias Matematicas e de Computacao',
			university: 'Universidade de Sao Paulo',
			tTitle: 'A two-component red blood cell model',
			abstract: 'This work consists in the presentation of a first level computational model to study normal and pathological behavior of red blood cells in slow transient processes that can not be accompanied by pure particle methods (the required time steps are very small). The basic model, inspired by the best models currently available, considers the cytoskeleton as a discrete non-linear elastic structure. The novelty of the proposal, which will extend the simulation times and the robustness of the code, is to couple this skeleton not with discrete models (molecular dynamics, particle methods) of the lipid membrane and internal and external fluids as usual, but with continuum models. The interaction of the solid cytoskeleton with the membrane, which is a two-dimensional fluid, will be done through adhesion forces adapting efficient solid-solid adhesion algorithms. The continuous treatment of the fluid parts is well justified by scale arguments and leads to much more stable and precise numerical problems when, as is the case, the size of the molecules (0.3nm) is much smaller than the overall size (‚âÉ 8000nm).',
			bio: 'Luca Meacci is actually a PhD student at Instituto de Ci√™ncias Matem√°ticas e de Computa√ß√£o of Universidade de S√£o Paulo, Campus de S√£o Carlos. He is working in problem of applied mathematics and numerical fluid dynamics concerning medical applications. He has been involved in research, innovation and new solutions, both in the academic and business. In 2009 he holds a Master\'s degree with honors in Mathematics for Applications with Prof. Mario Primicerio at the University of Florence (Italy). In the Department of Mathematics ‚ÄúU. Dini‚Äù of the University of Florence, he collaborated on research experiences on the diffusion and transport of electrons and ions, on the modeling of geothermal fields through free boundary problems and on the application of numerical methods and finite elements. Furthermore, during last years, Luca has been working on complex systems, in particular in the application of cellular automata for fighting criminality and tax evasion, in collaboration with the Polytechnical University of Madrid (Spain). He also took part in European conferences and published in italian and international journals. In the field of business, during last five years, he ‚Äã gained experience as Assistant CEO at NEXT Holding Company S.P.A. and Project Manager at Lascaux S.R.L. Its activities included analysis of processes, research and implementation of solutions and project management in the fields of finance, industry, services and public administration. He also dealt with knowledge bases, performance measurement and business intelligence for the City of Florence. For more than two years he worked in the redefinition of strategic planning and management control of the City, specifically in analysis of data on city population, in the identification of KPIs (Key Performance Indicators) and in the creation and implementation of a new system of strategic monitoring. He has applied to all these themes with the tools of management and the logical approach of mathematical modeling. In 2015 and 2016, Luca deals with Research, Development and Project Management in Nemo s.r.l. / DORA China Channel Management, working for a Trading Company based on Shanghai (China). In March of 2016, he obtained a Master‚Äôs degree in Business Administration at the Polytechnical University of Business Studies in Lugano (Switzerland).'
		},
		{
			tNumber: 's5',
			name: 'Taiana She Mir Mui',
			country: 'BR',
			position: 'Phd student',
			department: 'Chemistry and Physics',
			university: 'Universidade Estadual Paulista (UNESP)',
			tTitle: 'Atmospheric pressure plasma jet treatment on sunflower seeds',
			abstract: 'During the last decade, atmospheric pressure plasmas have been attracting much attention due to their wide application range, especially in the biological field. One of the advantages of plasma processing is that it does not generate hazardous by-products, thus it is environment- friendly. The most recent plasma application has been into the biological field, specifically in agriculture for enhancing the germination and growth of seedling and also on decontamination and inactivation of pathogens, to raise the production and efficiency of crops around the world. However, works of plasma applied in agriculture are still considered scarce. Therefore, further studies are needed to better understand how plasma interacts with different seeds surface. This work reports the investigation of an atmospheric pressure plasma jet treatment on sunflower seeds and the results about how plasma changes the seeds surface and also how it can affect the germination and growth rate of the sunflower seedlings.',
			bio: 'Taiana She Mir Mui is a Ph.D. student in Mechanical Engineering at Universidade Estadual Paulista (UNESP) campus of Guaratinguet√°, in Brazil. Her research interests address plasma surface treatments, diagnostics and characterization of different kinds of materials. Currently, the focus on her research is mainly in the biological field with seeds. She received the M.Sc. degree also in Mechanical Engineering and a bachelor degree in Metallurgical Technology from FATEC Pindamonhangaba, in 2016 and 2010, respectively. Taiana has also experience in quality assurance, calibration of equipments and instruments, electrochemistry and corrosion characterization.'
		},
		{
			tNumber: 's6',
			name: 'Amanda Rios Ferreira',
			country: 'BR',
			position: 'Phd Student',
			department: 'Food Technology',
			university: 'State university of Campinas',
			tTitle: 'Potential use of flour, starch and fibre of young bamboo culm as an ingredient for food industry and biotechnological processes',
			abstract: 'Bamboo is a perennial crop that grows rapidly, without the need of replanting, does not require pesticides, is a high-yield renewable resource, cheap and abundant across the globe. In our staff, we verify that the starch and fibres presence in the young bamboo culms can bring benefits to the food and biotechnological industries, which is in growing demand of eco-friendly ingredients obtained from renewable sources. Besides, increasing fibre consumption is widely reported in the current literature as a benefic effect for the population. The purpose of my talk is to demonstrate the state of the art in research and development of flour, starch and fibre of young bamboo culm. Our research group have been working on bamboo culm issue since 2014 and I will present our results about the potential production and commercialization capacity of bamboo for industries, specify its physical-chemical and technological characteristics for many applications - including food application - and, at end, explain the scientific challenges which we already overcame and the future perspectives for young bamboo culm in biotechnological processes. Acknowledgements: The authors are grateful to CAPES for the scholarship of M√°ria Herminia Ferrari Felisberto, to FAPESP (2015/196374) and FAEPEX (519292 2425/16) for the financial support, to CNPq for the scholarship of Amanda Rios Ferreira (132004/2016-0) and also to PIBIC and SAE/Unicamp, for the scholarship of the students who supported along the project',
			bio: 'My name is Amanda, I am 25 years old, I have Always studied in public schools until the age of 18 years old when I went to Ouro Preto. I am graduate at the Federal University of Ouro Preto, in Food Science and Technology (2016), I have a master degree in Food Technology at the Department of Food Technology of the State University of Campinas - Unicamp (2018) and now I am starting my Ph.D research at Unicamp'
		},
		{
			tNumber: 's7',
			name: 'John Holden',
			country: 'UK',
			position: 'PhD Student',
			department: 'Jointly, Sch of Food Science & Nutrition (U Leeds, UK), and Sch Mathematics and Statistics (Newcastle U, UK)',
			university: 'University of Leeds, UK & Newcastle University, UK.',
			tTitle: 'Predicting Epiphytotic phase transitions of complex forest systems using Stochastic Spatio-Temporal lattice models',
			abstract: 'Using a simple lattice model describing infectious tree disease dynamics on a homogeneous landscape we can observe an Epiphytotic phase transition from local confinement of the pathogen to a global epidemic through the forest. The phase transition can be understood in terms of the forest tree density and the pathogen virulence. We capture the pathogen spread-velocity and show how statistics on the metric can be used to pre-empt a catastrophic phase transition into the Epiphytotic regime, in theory, this yields an early warning system. The early warning phase transition could potentially be utilised to inform control strategies and negate system wide devastation of plant species.',
			bio: '2017-present: PhD student University, UK of Leeds & Newcastle University, UK. PhD title: Individual (agent)-based and population (compartmental) modelling of invasive communicable disease spread - Stochastic spatial-temporal models of tree infestation on lattice models. I am currently researching communicable tree disease using Mathematical and Computational models. 2013-2017: MPhys Theoretical Physics, University of Leeds, UK. MPhys Student, masters research experience gained from working in the Quantum Information group, 4th year project title: Optimisation of continuous variable quantum key distribution protocols.'
		},
		{
			tNumber: 's8',
			name: 'Stevens Paz Sanchez',
			country: 'BR',
			position: 'Phd student',
			department: 'ICMC',
			university: 'Universidade de Sao Paulo',
			tTitle: 'Swimming in microscales: Variational formulation and finite elements',
			abstract: 'In this talk we recall the mechanics governing a system formed by a body (or particle, or solid) immersed in a viscous fluid. We present a variational formulation which combines the Lagrangian Mechanics equations for the body with the usual variational formulation of Navier-Stokes equation. The proposed formulation describes the motion of the body with arbitrary generalized coordinates, as is typical in Solid Mechanics, and incorporates naturally different interface conditions that may take place at the surface of ciliated organisms. By restricting the proposed formulation to a finite element space, we obtain a numerical technique that approximates swimming motions, be them caused by shape changes of the solid or by the movement of superficial ciliae. This is illustrated by some examples',
			bio: 'I completed a degree in Mathematics at Universidad del Valle (Cali - Colombia) in 2011 and obatained my Master in Mathematics (with emphasis on Computational Mathematics and Modelling) at IMPA (Rio de Janeiro - Brazil) in 2013. I started my PhD in Computational Mathematics at ICMC (São Paulo - Brazil) in 2014, where I have been working on CFD applied to microfluidics, in particular, using variational models to describe and simulate the mechanics of microswimmers.'
		},
		{
			tNumber: 's9',
			name: 'Bruno Pereira de Oliveira',
			country: 'BR',
			position: 'PhD Student',
			department: 'Sao Carlos Institute of Physics',
			university: 'University of Sao Paulo',
			tTitle: 'Decontamination of Fluid circulating without chemistry',
			abstract: 'The microbiological control in the food industry is an important aspect to promote food safety and quality. In this regard, chemical solutions (30- 80 ppm) of hydroxide of sodium, hiperacetic, hypochlorite has been utilized. The international organization of food safety request that reduction of chemical substances applied due to environmental problems. Because of this, the present research has shown a possible to apply an alternative technique of the circulating fluid to leaching the food and decontaminations of water applying UV light. Results show a convergent photo-reactor utilized with closed-loop process of washing broccoli, consequently the decontamination water of carrying. This work describes a possibility of reducing microorganism present in the vegetable and decontamination of water circulation also, a kinetics describe has shown the disinfection decrease during the time. The process created no hazardous waste fluid or an application any chemical solution for obtaining this results.',
			bio: 'I am Master in Applied Physics from University of Sao Paulo (USP) with Ph.D Vanderlei Salvador Bagnato (Alumni MIT in Atomic Physics with Ph.D David Pritchard), I received my Bachelor of technology in Food Engineering from Fernand√≥polis Education Foundation (FEF) in 2012 with a scholarship by FEF. . Before pursuing my graduate studies, I made scientific stage Mechanical Engineering College from UNESP for 3 years and my acquired skills about the flow mechanics. Currently, I am Ph.D. Student in applied physics at USP (Brazil) and chemical undergraduate, finally, I have 5 patient published, 4 articles accepted and published 1 book. I am the member of the International of Food Engineering and I am working to design construction and simulated device.'
		}
	];
};