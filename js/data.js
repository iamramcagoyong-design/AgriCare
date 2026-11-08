// DATA: the starting (sample) diseases. The model copies these into state the first time the app runs.
export const CATEGORIES = ['Fungal', 'Bacterial', 'Viral', 'Pest', 'Weather', 'Soil / Nutrient'];

export const SEED_DISEASES = [
  {
    "id": "1794024002063",
    "name": "Early Blight",
    "plant": "Tomato",
    "category": "Fungal",
    "symptoms": "Dark brown spots with concentric rings (like a target) on older, lower leaves first, often surrounded by a yellow halo. Stems and fruit can also develop dark, sunken lesions.",
    "cause": "Caused by the fungus Alternaria solani. It thrives in warm, humid weather and spreads by rain splash and overhead watering. Stressed or poorly fed plants get it more easily.",
    "prevention": [
      "Rotate crops: avoid planting tomato, eggplant or potato in the same spot for 2-3 years",
      "Water at the base of the plant, not over the leaves",
      "Mulch the soil to stop spores splashing up",
      "Give plants enough spacing and stake them for airflow",
      "Clear away plant debris at the end of the season"
    ],
    "treatment": [
      "Remove and dispose of infected lower leaves right away",
      "Apply a fungicide labeled for tomato blight (copper-based or as advised by your local agriculture office), following the label",
      "Keep plants well fed and watered to reduce stress"
    ],
    "image": "images/98657514e21664eb.jpg"
  },
  {
    "id": "1794024306040",
    "name": "Late Blight",
    "plant": "Tomato",
    "category": "Fungal",
    "symptoms": "Large, greasy-looking, gray-green patches on leaves that turn brown and papery. White fuzzy growth may appear under leaves in humid conditions. Fruit develops firm, brown, blotchy patches.",
    "cause": "Caused by the water mold Phytophthora infestans. It spreads very fast in cool, wet, humid weather and can wipe out a crop within days.",
    "prevention": [
      "Plant resistant varieties when available",
      "Avoid overhead watering and water in the morning",
      "Space plants for good airflow",
      "Inspect plants often during rainy, cool spells"
    ],
    "treatment": [
      "Remove and destroy infected plants (bag them; do not compost)",
      "Protective fungicides work best applied before or at the first signs; follow the label and local advice",
      "Do not save fruit from infected plants"
    ],
    "image": "images/ddeee4c3931d97a3.jpg"
  },
  {
    "id": "1794029030471",
    "name": "Blossom End Rot",
    "plant": "Tomato",
    "category": "Soil / Nutrient",
    "symptoms": "A sunken, dark brown or black leathery patch at the bottom (blossom end) of the fruit, usually on the first fruits of the season.",
    "cause": "Not an infection. The fruit does not get enough calcium, usually because of uneven watering (dry spells followed by heavy watering) or very acidic soil, rather than a lack of calcium in the soil itself.",
    "prevention": [
      "Water evenly and consistently, especially while fruits are forming",
      "Mulch to keep soil moisture steady",
      "Check soil pH; most tomatoes do well around 6.2-6.8",
      "Avoid too much nitrogen fertilizer"
    ],
    "treatment": [
      "Pick off affected fruit so the plant puts energy into healthy ones",
      "Correct watering habits; new fruits usually come out healthy",
      "Add lime or calcium to the soil only if a soil test shows it is needed"
    ],
    "image": "images/c971511763bd63bd.jpg"
  },
  {
    "id": "1794038722653",
    "name": "Flea Beetle Damage",
    "plant": "Eggplant",
    "category": "Pest",
    "symptoms": "Many tiny round holes in leaves that look like shotgun pellets. Young plants can be badly damaged. Tiny dark beetles jump when you disturb the plant.",
    "cause": "Caused by flea beetles feeding on leaves. They are most active in warm, dry weather and attack seedlings and young plants the most.",
    "prevention": [
      "Cover seedlings with fine insect netting or row covers",
      "Keep weeds down around the plants",
      "Mulch to discourage beetles",
      "Plant a trap crop such as radish nearby"
    ],
    "treatment": [
      "Hand-check plants regularly and knock beetles off into soapy water",
      "Use neem oil or insecticidal soap on affected plants, following the label",
      "Healthy, well-watered plants usually outgrow light damage"
    ],
    "image": "images/13e82539e47344f7.jpg"
  },
  {
    "id": "1794038796073",
    "name": "Verticillium Wilt",
    "plant": "Eggplant",
    "category": "Fungal",
    "symptoms": "Yellowing between the leaf veins that often starts as V-shaped patches on lower leaves, followed by wilting (especially in the afternoon), browning and leaf drop. Cutting the stem may show brown streaks inside.",
    "cause": "Caused by a soil-borne fungus (Verticillium) that enters through the roots and blocks water movement. It survives in the soil for years and is worse in cool soil.",
    "prevention": [
      "Rotate with non-host crops such as corn or other grasses for several years",
      "Use resistant varieties or grafted plants when possible",
      "Use clean, disease-free seedlings and sanitize tools",
      "Remove and destroy infected plants and roots"
    ],
    "treatment": [
      "No cure once a plant is infected; remove and dispose of it",
      "Do not compost infected plants",
      "Avoid planting susceptible crops in that spot next season"
    ],
    "image": "images/1c82729393fe426b.jpg"
  },
  {
    "id": "1794038923419",
    "name": "Fruit and Shoot Borer",
    "plant": "Eggplant",
    "category": "Pest",
    "symptoms": "Wilting and drooping of young shoot tips, small entry holes in shoots and fruits, and fruits that are filled with larval tunnels and droppings (frass), making them unmarketable.",
    "cause": "Caused by the larvae (caterpillars) of the eggplant fruit and shoot borer moth, which tunnel into shoots and fruits. It is a common problem in warm, humid growing areas.",
    "prevention": [
      "Remove and destroy wilted shoots and damaged fruits regularly",
      "Install pheromone traps to monitor and catch moths",
      "Rotate crops and avoid growing eggplant continuously in the same field",
      "Keep fields clean of crop residues after harvest"
    ],
    "treatment": [
      "Cut and destroy infested shoots and fruits right away",
      "Biological sprays such as Bt or neem-based products may help, following the label",
      "Consult your local agriculture office for approved insecticides and timing"
    ],
    "image": "images/7908467624110604.jpg"
  },
  {
    "id": "1794039202935",
    "name": "Bud Rot",
    "plant": "Coconut",
    "category": "Fungal",
    "symptoms": "The youngest leaves turn yellow, then brown and collapse. The central growing bud becomes soft, discolored, and rotten. A foul smell may develop in advanced cases.",
    "cause": "Usually caused by Phytophthora palmivora, a water-loving microorganism that spreads through rain splash, contaminated plant material, and wet conditions.",
    "prevention": [
      "Maintain proper drainage around coconut trees.",
      "Avoid injuries to the growing point.",
      "Remove severely infected plant material following agricultural guidance.",
      "Keep the plantation clean and monitor young leaves regularly."
    ],
    "treatment": [
      "Contact your local agricultural technician immediately when the central bud shows signs of rotting.",
      "Remove and properly dispose of severely infected palms when recommended.",
      "Apply approved fungicides only according to local agricultural recommendations.",
      "Protect nearby healthy palms from possible infection."
    ],
    "image": "images/75727e04b887d93c.jpg"
  },
  {
    "id": "1794039365049",
    "name": "Coconut Leaf Blight",
    "plant": "Coconut",
    "category": "Fungal",
    "symptoms": "Leaves develop yellowish or brown patches that gradually enlarge. Severely affected leaflets become dry, brittle, and brown, making the coconut canopy look unhealthy.",
    "cause": "Can be associated with fungal pathogens, including Pestalotiopsis species. Poor growing conditions and plant stress can make damage worse.",
    "prevention": [
      "Keep the plantation clean.",
      "Remove severely affected fallen leaves.",
      "Maintain adequate spacing and air circulation.",
      "Provide balanced fertilizer and proper nutrition."
    ],
    "treatment": [
      "Remove badly affected leaves when appropriate.",
      "Dispose of infected plant debris properly.",
      "Improve plant nutrition and growing conditions.",
      "Seek local diagnosis before applying fungicides because similar symptoms can have different causes."
    ],
    "image": "images/94ce8a9d09851652.jpg"
  },
  {
    "id": "1794039577437",
    "name": "Cadang-Cadang Disease",
    "plant": "Coconut",
    "category": "Viral",
    "symptoms": "Older coconut leaves develop yellow-orange spots and streaks. Over time, the leaves become smaller, the crown becomes reduced, and the palm produces fewer or no nuts.",
    "cause": "Caused by Coconut cadang-cadang viroid (CCCVd), a very small infectious RNA pathogen. It is a serious coconut disease, particularly associated with the Philippines.",
    "prevention": [
      "Use healthy planting materials from reliable sources.",
      "Avoid moving potentially infected planting materials.",
      "Regularly inspect coconut plantations.",
      "Report suspected cases to agricultural authorities."
    ],
    "treatment": [
      "There is currently no established cure.",
      "Remove infected palms only under the guidance of agricultural authorities.",
      "Avoid using seeds or planting materials from suspected infected palms.",
      "Monitor surrounding coconut trees for symptoms."
    ],
    "image": "images/5410ba201a71af61.webp"
  },
  {
    "id": "1794039759164",
    "name": "Fusarium Wilt (Panama Disease)",
    "plant": "Banana",
    "category": "Fungal",
    "symptoms": "Older leaves turn yellow, starting from the edges. Leaves eventually wilt and hang around the pseudostem. Cutting the pseudostem may reveal brown or reddish discoloration inside.",
    "cause": "Caused by the soil-borne fungus Fusarium oxysporum f. sp. cubense. It survives in contaminated soil and can spread through infected planting materials, soil, and farm equipment.",
    "prevention": [
      "Use disease-free banana planting materials.",
      "Avoid transferring soil from infected plantations.",
      "Clean farm tools and footwear before moving between farms.",
      "Use resistant varieties suitable for the local area."
    ],
    "treatment": [
      "There is no reliable chemical cure once a plant is infected.",
      "Remove and properly contain infected plants following agricultural guidance.",
      "Avoid replanting susceptible bananas in contaminated soil.",
      "Consult agricultural technicians about resistant varieties."
    ],
    "image": "images/af0504649929bd87.jpeg"
  },
  {
    "id": "1794039885271",
    "name": "Black Sigatoka",
    "plant": "Banana",
    "category": "Fungal",
    "symptoms": "Small reddish-brown streaks appear on banana leaves and gradually develop into dark brown or black spots. Severely infected leaves dry out and die, reducing the plant's ability to produce healthy fruits.",
    "cause": "Caused by the fungus Pseudocercospora fijiensis. It spreads through airborne spores, especially under warm and humid conditions.",
    "prevention": [
      "Remove severely infected leaves when appropriate.",
      "Maintain good spacing and air circulation.",
      "Control weeds around banana plants.",
      "Monitor leaves regularly for early symptoms."
    ],
    "treatment": [
      "Remove heavily infected leaves and dispose of them properly.",
      "Maintain balanced fertilizer and proper plant nutrition.",
      "Apply locally approved fungicides when recommended.",
      "Follow fungicide rotation instructions to reduce resistance."
    ],
    "image": "images/23915f4cf2f22e97.webp"
  },
  {
    "id": "1794040265573",
    "name": "Banana Bunchy Top",
    "plant": "Banana",
    "category": "Viral",
    "symptoms": "New leaves become narrow, short, and crowded together at the top of the plant, forming a bunchy appearance. Dark green streaks may appear along the leaf veins and midribs.",
    "cause": "Caused by Banana bunchy top virus (BBTV), which is transmitted mainly by banana aphids and infected planting materials.",
    "prevention": [
      "Use virus-free planting materials.",
      "Inspect new banana plants before planting.",
      "Control banana aphid populations.",
      "Avoid moving infected suckers to other farms."
    ],
    "treatment": [
      "There is no cure for infected banana plants.",
      "Remove infected plants and suckers following agricultural recommendations.",
      "Control aphids to reduce further spread.",
      "Replace infected plants with certified healthy planting materials."
    ],
    "image": "images/19145ff5d93e5a6b.jpg"
  },
  {
    "id": "1794040432528",
    "name": "Anthracnose",
    "plant": "Mango",
    "category": "Fungal",
    "symptoms": "Dark brown or black spots appear on mango leaves, flowers, and fruits. Infected fruits may develop sunken lesions that enlarge as the fruit ripens. Flowers may turn brown and dry out.",
    "cause": "Caused by fungi in the Colletotrichum genus, particularly Colletotrichum gloeosporioides species complex. It spreads through rain splash and infected plant material.",
    "prevention": [
      "Prune trees to improve air circulation.",
      "Remove infected fruits and branches.",
      "Avoid excessive moisture around the canopy.",
      "Harvest and handle fruits carefully to prevent injuries."
    ],
    "treatment": [
      "Remove infected fruits and plant debris.",
      "Apply approved fungicides during vulnerable flowering and fruit-development stages when recommended.",
      "Handle harvested mangoes carefully.",
      "Use proper post-harvest storage practices."
    ],
    "image": "images/a5d6a4e9341bf28b.jpg"
  },
  {
    "id": "1794040572660",
    "name": "Mango Powdery Mildew",
    "plant": "Mango",
    "category": "Fungal",
    "symptoms": "White or grayish powder-like growth appears on young leaves, flower clusters, and developing fruits. Flowers may dry up and fall, resulting in poor fruit production.",
    "cause": "Caused by the fungus Oidium mangiferae. It commonly develops under favorable conditions involving high humidity and relatively dry weather.",
    "prevention": [
      "Prune trees to improve air circulation.",
      "Remove heavily infected plant parts.",
      "Avoid excessive nitrogen fertilizer.",
      "Monitor flower clusters during flowering season."
    ],
    "treatment": [
      "Remove severely infected plant parts when practical.",
      "Apply approved sulfur-based or other recommended fungicides.",
      "Follow the recommended timing during flowering.",
      "Avoid applying sulfur during excessively hot conditions or contrary to product instructions."
    ],
    "image": "images/f635584e35bc9bcb.jpg"
  },
  {
    "id": "1794040764705",
    "name": "Bacterial Black Spot",
    "plant": "Mango",
    "category": "Bacterial",
    "symptoms": "Small, water-soaked spots appear on mango leaves and fruits. They gradually become dark brown or black, sometimes with cracked or sunken surfaces. Severe infections can cause premature fruit drop.",
    "cause": "Caused by the bacterium Xanthomonas citri pv. mangiferaeindicae. It spreads through rain splash, infected planting materials, and wounds.",
    "prevention": [
      "Use healthy planting materials.",
      "Prune infected branches using clean tools.",
      "Avoid injuring fruits and branches.",
      "Maintain good orchard sanitation.",
      "Improve air circulation through proper pruning."
    ],
    "treatment": [
      "Remove severely infected fruits and branches.",
      "Dispose of infected plant debris properly.",
      "Apply locally approved copper-based products when recommended.",
      "Avoid moving infected planting materials to other orchards."
    ],
    "image": "images/98360b216ea318a0.jpg"
  },
  {
    "id": "1794041100470",
    "name": "Rice Blast",
    "plant": "Rice",
    "category": "Fungal",
    "symptoms": "Small spots develop on rice leaves and gradually become diamond-shaped lesions with gray or whitish centers and dark brown edges. Severe infection can also damage the neck of the panicle, causing empty or poorly filled grains.",
    "cause": "Caused by the fungus Magnaporthe oryzae. It spreads through spores under humid conditions, especially when plants receive excessive nitrogen fertilizer.",
    "prevention": [
      "Use resistant rice varieties.",
      "Avoid excessive nitrogen fertilizer.",
      "Maintain proper plant spacing.",
      "Remove infected crop residues and manage weeds."
    ],
    "treatment": [
      "Apply locally approved fungicides when recommended.",
      "Avoid excessive nitrogen application.",
      "Monitor plants during periods of high humidity.",
      "Follow proper water and fertilizer management."
    ],
    "image": "images/8cf1592cfdcae988.webp"
  },
  {
    "id": "1794041373634",
    "name": "Bacterial Leaf Blight",
    "plant": "Rice",
    "category": "Bacterial",
    "symptoms": "Water-soaked yellowish streaks appear near the tips and edges of rice leaves. These streaks gradually become yellow or white and extend down the leaf. Severely affected leaves dry out.",
    "cause": "Caused by the bacterium Xanthomonas oryzae pv. oryzae. It spreads through rain, irrigation water, infected plant material, and wounds.",
    "prevention": [
      "Use resistant rice varieties.",
      "Avoid excessive nitrogen fertilizer.",
      "Maintain proper field drainage.",
      "Use healthy seeds and seedlings.",
      "Remove volunteer rice plants and weeds where appropriate."
    ],
    "treatment": [
      "There is no reliable chemical cure for established bacterial leaf blight.",
      "Manage water levels properly.",
      "Avoid excessive fertilizer application.",
      "Remove heavily infected plants when practical.",
      "Use resistant varieties in the next planting season."
    ],
    "image": "images/dd3f068387de90cd.webp"
  },
  {
    "id": "1794041649289",
    "name": "Rice Sheath Blight",
    "plant": "Rice",
    "category": "Fungal",
    "symptoms": "Oval or irregular greenish-gray lesions appear near the waterline on the leaf sheaths. The lesions develop brown edges and may spread upward to leaves and neighboring plants.",
    "cause": "Caused by the fungus Rhizoctonia solani. It survives in soil and crop residues and spreads easily in dense, humid rice fields.",
    "prevention": [
      "Avoid excessive nitrogen fertilizer.",
      "Maintain proper spacing between rice plants.",
      "Manage weeds and crop residues.",
      "Avoid overly dense planting."
    ],
    "treatment": [
      "Remove or manage infected plant residues after harvest",
      "Improve field ventilation through appropriate spacing.",
      "Apply approved fungicides when necessary and recommended.",
      "Monitor the lower leaves and sheaths regularly."
    ],
    "image": "images/05baa349139ac33b.jpg"
  },
  {
    "id": "1794070408764",
    "name": "Citrus Canker",
    "plant": "Calamansi",
    "category": "Bacterial",
    "symptoms": "Small, raised brown spots develop on calamansi leaves, stems, and fruits. The spots become rough, corky lesions with yellow halos around them. Severely infected leaves may fall prematurely.",
    "cause": "Caused by the bacterium Xanthomonas citri subsp. citri. It spreads through wind-driven rain, infected planting materials, and contaminated tools.",
    "prevention": [
      "Use disease-free calamansi seedlings.",
      "Avoid planting trees too close together.",
      "Prune infected branches using disinfected tools.",
      "Maintain good airflow around the trees.",
      "Avoid working with wet plants."
    ],
    "treatment": [
      "Remove and properly dispose of severely infected branches.",
      "Disinfect pruning tools after use.",
      "Apply approved copper-based products when recommended.",
      "Consult an agricultural technician for severe infections."
    ],
    "image": "images/49def703b96c7ce6.jpg"
  },
  {
    "id": "1794070849139",
    "name": "Citrus Greening (Huanglongbing / HLB)",
    "plant": "Calamansi",
    "category": "Bacterial",
    "symptoms": "Leaves develop irregular yellow patterns that are not symmetrical on both sides of the midrib. Fruits may become small, misshapen, unevenly colored, and bitter. Infected branches may gradually die.",
    "cause": "Associated with the bacterium Candidatus Liberibacter asiaticus, which is transmitted mainly by the Asian citrus psyllid (Diaphorina citri).",
    "prevention": [
      "Use certified disease-free calamansi seedlings.",
      "Regularly inspect trees for yellowing and unusual leaf patterns.",
      "Monitor and manage Asian citrus psyllid populations.",
      "Remove volunteer citrus plants that may harbor the disease.",
      "Avoid transporting infected planting materials."
    ],
    "treatment": [
      "There is currently no reliable cure for infected trees.",
      "Remove severely infected trees following agricultural guidance.",
      "Manage psyllid populations using approved control methods.",
      "Replace infected trees with healthy planting materials."
    ],
    "image": "images/64700085ed6ad85f.webp"
  },
  {
    "id": "1794071089818",
    "name": "Citrus Leaf Miner",
    "plant": "Calamansi",
    "category": "Pest",
    "symptoms": "Young calamansi leaves develop thin, winding, silvery trails beneath the leaf surface. The affected leaves may curl, become distorted, and eventually dry out.",
    "cause": "Caused by the larvae of the citrus leaf miner moth (Phyllocnistis citrella). The larvae feed inside young leaves, creating winding tunnels.",
    "prevention": [
      "Regularly inspect new leaves for winding trails.",
      "Avoid excessive pruning that encourages too much tender new growth.",
      "Maintain healthy trees through balanced fertilization.",
      "Encourage beneficial insects that naturally control leaf miners."
    ],
    "treatment": [
      "Remove heavily damaged young leaves when practical.",
      "Protect beneficial insects and natural predators.",
      "Use horticultural oils or other approved treatments when recommended.",
      "Apply treatments to new leaf growth according to local agricultural guidance."
    ],
    "image": "images/8bebf162350602bf.webp"
  },
  {
    "id": "1794072416273",
    "name": "Northern Corn Leaf Blight",
    "plant": "Corn",
    "category": "Fungal",
    "symptoms": "Long, cigar-shaped gray-green or brown lesions appear on corn leaves. These lesions gradually enlarge and may cover large portions of the leaves. Severely infected leaves turn brown and dry out.",
    "cause": "Caused by the fungus Exserohilum turcicum. It spreads through airborne spores and infected crop residues, especially during warm and humid weather.",
    "prevention": [
      "Plant resistant corn varieties.",
      "Practice crop rotation with non-host crops.",
      "Remove or properly manage infected crop residues.",
      "Maintain proper spacing between plants.",
      "Monitor leaves regularly, especially during rainy periods."
    ],
    "treatment": [
      "Remove severely infected leaves when practical.",
      "Apply approved fungicides when necessary and recommended.",
      "Avoid excessive nitrogen fertilizer.",
      "Maintain balanced plant nutrition.",
      "Consult an agricultural technician for severe infections."
    ],
    "image": "images/dd1f0211c47b2a9d.webp"
  },
  {
    "id": "1794072737847",
    "name": "Corn Common Rust",
    "plant": "Corn",
    "category": "Fungal",
    "symptoms": "Small, raised reddish-brown or orange pustules appear on both sides of corn leaves. When touched, these pustules may release reddish-brown powder. Severe infections cause leaves to dry prematurely.",
    "cause": "Caused by the fungus Puccinia sorghi. Its spores spread through the air and infect corn leaves under favorable environmental conditions.",
    "prevention": [
      "Plant rust-resistant corn varieties.",
      "Remove volunteer corn plants that may harbor the fungus.",
      "Maintain proper plant spacing.",
      "Monitor leaves for early rust symptoms.",
      "Keep the field free from unnecessary weeds."
    ],
    "treatment": [
      "Apply approved fungicides when infection is severe and treatment is recommended.",
      "Remove heavily infected crop residues after harvest.",
      "Maintain proper fertilizer application.",
      "Monitor surrounding plants for new infections."
    ],
    "image": "images/ce58cdfe6a5fc2cc.jpg"
  },
  {
    "id": "1794073197750",
    "name": "Fall Armyworm Damage",
    "plant": "Corn",
    "category": "Pest",
    "symptoms": "Irregular holes and ragged edges appear on corn leaves. Young plants may show window-like feeding marks, while older caterpillars leave large holes and produce noticeable sawdust-like droppings inside the whorl. Severe attacks can destroy the growing point.",
    "cause": "Caused by the larvae of the fall armyworm (Spodoptera frugiperda). The adult moth lays eggs on corn leaves, and the emerging caterpillars feed on the leaves and growing points.",
    "prevention": [
      "Inspect corn plants regularly, especially the whorl.",
      "Plant at recommended times.",
      "Remove egg masses and young caterpillars when practical.",
      "Practice crop rotation.",
      "Encourage natural predators and beneficial insects."
    ],
    "treatment": [
      "Remove caterpillars manually when infestations are small.",
      "Use biological control products containing Bacillus thuringiensis (Bt) when appropriate.",
      "Apply locally registered insecticides when necessary.",
      "Target young larvae before they become difficult to control.",
      "Follow pesticide label instructions carefully."
    ],
    "image": "images/75196b471f831a54.jpg"
  },
  {
    "id": "1794074214011",
    "name": "Ginger Bacterial Wilt",
    "plant": "Ginger",
    "category": "Bacterial",
    "symptoms": "The leaves gradually turn yellow and wilt, starting with the lower leaves. The entire plant eventually collapses while the leaves remain attached. Cutting the ginger rhizome may reveal brown discoloration and a milky bacterial ooze.",
    "cause": "Caused by the bacterium Ralstonia solanacearum species complex. It spreads through contaminated soil, infected rhizomes, irrigation water, and farm tools.",
    "prevention": [
      "Use healthy, disease-free ginger rhizomes for planting.",
      "Avoid planting ginger in previously infected soil.",
      "Maintain proper drainage to prevent waterlogging.",
      "Clean and disinfect farm tools.",
      "Practice crop rotation with non-host crops."
    ],
    "treatment": [
      "Remove and properly dispose of infected plants and rhizomes.",
      "Avoid transferring contaminated soil to healthy areas.",
      "Do not use rhizomes from infected plants as planting materials.",
      "There is no reliable chemical cure for infected plants.",
      "Consult an agricultural technician before replanting affected areas."
    ],
    "image": "images/0f2f7e498c4efea0.jpg"
  },
  {
    "id": "1794074559611",
    "name": "Ginger Leaf Spot",
    "plant": "Ginger",
    "category": "Fungal",
    "symptoms": "Small yellowish or brown spots appear on ginger leaves. The spots gradually enlarge and may develop dark brown edges with pale centers. Severely affected leaves turn brown, dry out, and die prematurely.",
    "cause": "Often associated with fungi such as Phyllosticta zingiberi. The disease spreads through spores carried by wind and rain, especially under warm and humid conditions.",
    "prevention": [
      "Maintain proper spacing between ginger plants.",
      "Avoid excessive moisture on the leaves",
      "Remove infected leaves and plant debris.",
      "Provide good air circulation.",
      "Use healthy planting rhizomes."
    ],
    "treatment": [
      "Remove heavily infected leaves.",
      "Dispose of infected plant debris properly.",
      "Avoid overhead watering when possible.",
      "Apply locally approved fungicides when necessary and recommended.",
      "Monitor new leaves for recurring symptoms."
    ],
    "image": "images/d587684831209c6f.webp"
  },
  {
    "id": "1794074654380",
    "name": "Ginger Soft Rot (Rhizome Rot)",
    "plant": "Ginger",
    "category": "Fungal",
    "symptoms": "The leaves turn yellow, beginning at the tips, and gradually wilt and dry. The base of the stem becomes soft, while the underground rhizomes develop water-soaked, mushy, and rotten areas. In advanced cases, the entire plant collapses.",
    "cause": "Commonly caused by Pythium species, particularly Pythium myriotylum. These fungus-like organisms thrive in poorly drained, waterlogged soil and can spread through infected rhizomes and contaminated soil.",
    "prevention": [
      "Plant healthy and disease-free ginger rhizomes.",
      "Use well-drained soil or raised planting beds.",
      "Avoid overwatering and waterlogging.",
      "Remove infected plants immediately.",
      "Practice crop rotation and maintain field sanitation."
    ],
    "treatment": [
      "Remove and properly dispose of infected plants and rhizomes.",
      "Improve drainage around the planting area.",
      "Avoid reusing contaminated planting materials.",
      "Use approved treatments only when recommended by agricultural technicians.",
      "Allow affected soil to recover before planting ginger again."
    ],
    "image": "images/f7e0b47960a0d09e.webp"
  }
];