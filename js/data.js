// DATA: the starting (sample) diseases. The model copies these into state the first time the app runs.
export const CATEGORIES = ['Fungal', 'Bacterial', 'Viral', 'Pest', 'Weather', 'Soil / Nutrient'];

export const SEED_DISEASES = [{
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
    },
    {
        "id": "1794075000001",
        "name": "Black Pod",
        "plant": "Cacao",
        "category": "Fungal",
        "symptoms": "Brown to black spots develop on cacao pods and can spread across the whole pod within days. White fuzzy growth may appear in humid weather, and the beans inside rot.",
        "cause": "Caused by Phytophthora species, commonly Phytophthora palmivora. The pathogen spreads in wet conditions through rain splash, infected pods, and contaminated farm tools.",
        "prevention": [
            "Inspect trees and pods regularly, especially during rainy weather.",
            "Remove infected pods and crop debris from the farm.",
            "Prune trees to improve airflow and reduce prolonged moisture.",
            "Maintain good drainage and avoid injuring pods."
        ],
        "treatment": [
            "Remove and destroy infected pods promptly.",
            "Harvest ripe pods regularly and keep the farm clear of diseased material.",
            "Use only locally approved fungicides when recommended, following the product label.",
            "Ask an agricultural technician for advice during severe outbreaks."
        ],
        "image": "black.jpg"
    },
    {
        "id": "1794075000002",
        "name": "Cacao Pod Borer",
        "plant": "Cacao",
        "category": "Pest",
        "symptoms": "Pods ripen unevenly or too early and may show yellow-orange patches while still green. Inside, the beans are small, flat, and stuck together, with tunnels and feeding damage.",
        "cause": "Caused by cacao pod borer larvae (Conopomorpha cramerella), which tunnel into pods and feed on the beans.",
        "prevention": [
            "Inspect cacao pods regularly and harvest ripe pods promptly.",
            "Remove and destroy infested pods and old pod husks.",
            "Prune trees to make pods easier to inspect and improve airflow.",
            "Use pod sleeving or monitoring traps where recommended locally."
        ],
        "treatment": [
            "Harvest and destroy infested pods; do not leave them in the field.",
            "Break open harvested pods promptly and dispose of husks safely.",
            "Use locally approved control products only when recommended and follow the label.",
            "Consult an agricultural technician about area-wide control."
        ],
        "image": "podborer.jpg"
    },
    {
        "id": "1794075000003",
        "name": "Vascular Streak Dieback",
        "plant": "Cacao",
        "category": "Fungal",
        "symptoms": "Leaves on one or two branches turn yellow while green patches remain, then fall and leave bare branches. Twigs die back, and cutting an affected branch may reveal brown streaks in the wood.",
        "cause": "Caused by the fungus Ceratobasidium theobromae, which infects cacao branches and disrupts water movement through the plant.",
        "prevention": [
            "Inspect cacao trees often for yellowing limited to individual branches.",
            "Use healthy planting material and locally recommended tolerant varieties.",
            "Prune trees to maintain airflow and reduce excess shade.",
            "Clean pruning tools between trees."
        ],
        "treatment": [
            "Prune affected branches well below visible symptoms.",
            "Remove and destroy infected branches; do not leave them in the plantation.",
            "Disinfect pruning tools after working on affected trees.",
            "Seek local agricultural advice if symptoms continue to spread."
        ],
        "image": "streak.jpg"
    },
    {
        "id": "1794075000004",
        "name": "Purple Blotch",
        "plant": "Onion",
        "category": "Fungal",
        "symptoms": "Small, sunken white-to-purple spots appear on leaves and flower stalks. They enlarge into purple-brown blotches with yellow edges; affected leaves may dry and die back.",
        "cause": "Usually caused by the fungus Alternaria porri. Disease is favored by warm, humid conditions and long periods of leaf wetness.",
        "prevention": [
            "Rotate onions with unrelated crops and remove infected crop residue.",
            "Provide adequate spacing and airflow between plants.",
            "Water at the base and avoid keeping foliage wet overnight.",
            "Use healthy seed or planting material."
        ],
        "treatment": [
            "Remove and dispose of severely affected leaves and plant debris.",
            "Avoid overhead watering and improve airflow around plants.",
            "Apply a fungicide labeled for onion purple blotch only when locally recommended.",
            "Follow the product label and local agricultural guidance."
        ],
        "image": "purple.jpg"
    },
    {
        "id": "1794075000005",
        "name": "Bacterial Soft Rot",
        "plant": "Onion",
        "category": "Bacterial",
        "symptoms": "Bulbs become soft, watery, and mushy, often starting at the neck. Outer scales may turn pale yellow or brown, and rotting bulbs often develop a strong unpleasant odor.",
        "cause": "Commonly caused by soft-rot bacteria such as Pectobacterium carotovorum. Bacteria enter through wounds and spread more readily in wet conditions or during poor storage.",
        "prevention": [
            "Avoid bruising or cutting bulbs during harvest and handling.",
            "Harvest when conditions are dry and cure bulbs thoroughly before storage.",
            "Store only sound bulbs in a cool, dry, well-ventilated place.",
            "Clean tools and storage containers, and rotate crops."
        ],
        "treatment": [
            "Remove and discard rotting bulbs; do not store or plant them.",
            "Separate affected bulbs from healthy ones to limit spread.",
            "Clean and dry storage containers and improve ventilation.",
            "There is no reliable cure for bulbs that have already rotted."
        ],
        "image": "soft.jpg"
    },
    {
        "id": "1794075000006",
        "name": "Onion Yellow Dwarf Virus",
        "plant": "Onion",
        "category": "Viral",
        "symptoms": "Yellow stripes run along the leaves. Leaves become flat, twisted, or crinkled and then droop. Plants remain stunted and produce small bulbs.",
        "cause": "Caused by Onion yellow dwarf virus (OYDV), which spreads through infected onion or garlic planting material and aphids.",
        "prevention": [
            "Plant virus-free sets, seedlings, or cloves.",
            "Remove volunteer onions and garlic that can harbor the virus.",
            "Inspect plants regularly and remove suspected infected plants.",
            "Manage aphids using locally recommended methods."
        ],
        "treatment": [
            "There is no cure for virus-infected plants.",
            "Remove and dispose of affected plants to reduce sources of infection.",
            "Do not save bulbs from infected plants as planting material.",
            "Use healthy planting stock for the next crop."
        ],
        "image": "virus.jpg"
    },
    {
        "id": "1794075000007",
        "name": "Phytophthora Root Rot & Patch Canker",
        "plant": "Durian",
        "category": "Fungal",
        "symptoms": "Roots become dark and decayed, the canopy may thin or yellow, and branches can wilt or die back. Trunk or root-collar lesions may ooze reddish-brown gum and expand into cankers.",
        "cause": "Caused by Phytophthora species, commonly associated with durian root rot and patch canker. The water-loving pathogen spreads in wet soil and is favored by poor drainage and root or trunk injuries.",
        "prevention": [
            "Plant on well-drained soil and prevent water from pooling around trunks.",
            "Use healthy planting material and avoid injuring roots and trunks.",
            "Keep mulch away from direct contact with the trunk.",
            "Inspect the root collar and canopy regularly, especially during wet weather."
        ],
        "treatment": [
            "Improve drainage and reduce excess irrigation.",
            "Remove loose, severely damaged bark only with local expert guidance.",
            "Sanitize tools used on affected trees.",
            "Consult an agricultural technician about locally approved treatments and whether a tree can be saved."
        ],
        "image": "phyyy.jpg"
    },
    {
        "id": "1794075000008",
        "name": "Pink Disease",
        "plant": "Durian",
        "category": "Fungal",
        "symptoms": "Branches develop bark lesions with pale or pinkish fungal growth. Bark may crack or peel, and the affected branch can wilt and die back above the infection.",
        "cause": "Caused by the fungus Erythricium salmonicolor (also known as Corticium salmonicolor). It commonly affects branches in warm, humid conditions, particularly in dense canopies.",
        "prevention": [
            "Prune to improve airflow and reduce prolonged moisture in the canopy.",
            "Inspect branches regularly for discolored bark or fungal growth.",
            "Use clean pruning tools and avoid moving infected plant material.",
            "Maintain tree health and avoid unnecessary wounds."
        ],
        "treatment": [
            "Prune infected branches well below the visible lesion when practical.",
            "Remove and dispose of infected branches away from the orchard.",
            "Disinfect tools after pruning affected trees.",
            "Seek local agricultural advice for trunk infections or severe cases."
        ],
        "image": "pink.jpg"
    },
    {
        "id": "1794075000009",
        "name": "Anthracnose",
        "plant": "Durian",
        "category": "Fungal",
        "symptoms": "Leaves may develop dark, irregular spots that enlarge and dry. Infected shoots can die back, while fruit may show dark sunken lesions, especially during wet weather.",
        "cause": "Usually associated with Colletotrichum fungi. Spores spread from infected plant material by rain splash and are favored by warm, humid conditions.",
        "prevention": [
            "Prune to improve airflow and allow foliage to dry.",
            "Remove infected leaves, twigs, and fruit from the orchard.",
            "Avoid overhead irrigation where possible.",
            "Use healthy planting material and clean tools."
        ],
        "treatment": [
            "Remove and dispose of infected plant parts.",
            "Avoid handling plants while foliage is wet.",
            "Use locally approved fungicides only when recommended and follow the label.",
            "Ask an agricultural technician to confirm the diagnosis if symptoms are severe."
        ],
        "image": "antha.jpg"
    },
    {
        "id": "1794075000010",
        "name": "Downy Mildew",
        "plant": "Cucumber",
        "category": "Fungal",
        "symptoms": "Angular yellow or pale-green spots appear on the upper leaf surface, often limited by veins. In humid conditions, gray-purple growth may form underneath, and leaves can brown and die.",
        "cause": "Caused by Pseudoperonospora cubensis, a fungus-like pathogen. It spreads by airborne spores and develops rapidly in humid conditions with wet leaves.",
        "prevention": [
            "Grow resistant varieties when available.",
            "Provide good spacing and airflow, and water at the base of plants.",
            "Remove crop debris and volunteer cucurbits after harvest.",
            "Monitor leaves frequently during humid or rainy weather."
        ],
        "treatment": [
            "Remove severely affected leaves when practical.",
            "Avoid overhead watering and reduce prolonged leaf wetness.",
            "Use only locally approved fungicides when recommended and follow the label.",
            "Consult local agricultural guidance because fungicide choice depends on local resistance and registration."
        ],
        "image": "downy.webp"
    },
    {
        "id": "1794075000011",
        "name": "Cucumber Mosaic Virus",
        "plant": "Cucumber",
        "category": "Viral",
        "symptoms": "Leaves show light and dark green mosaic patterns, distortion, or narrowing. Plants may be stunted, and fruits can become mottled, misshapen, or uneven in color.",
        "cause": "Caused by cucumber mosaic virus (CMV), which is transmitted by aphids and can also spread through infected plants and some weeds.",
        "prevention": [
            "Use healthy seed and seedlings.",
            "Remove infected plants and nearby weeds that can host the virus.",
            "Use reflective mulch or other locally recommended methods to discourage aphids.",
            "Clean hands and tools after handling suspected infected plants."
        ],
        "treatment": [
            "There is no cure for virus-infected plants.",
            "Remove and dispose of infected plants to reduce sources of infection.",
            "Manage weeds and aphids using locally recommended methods.",
            "Do not save seed from plants with suspected virus symptoms."
        ],
        "image": "mosaic.jpg"
    },
    {
        "id": "1794075000012",
        "name": "Melon Fly",
        "plant": "Cucumber",
        "category": "Pest",
        "symptoms": "Young fruits develop puncture marks, become deformed or discolored, and may rot. Cutting affected fruit can reveal tunnels and larvae inside.",
        "cause": "Caused by melon fly (Bactrocera cucurbitae) larvae, which hatch from eggs laid in cucurbit fruits and feed inside them.",
        "prevention": [
            "Collect and destroy infested and fallen fruit promptly.",
            "Harvest fruits regularly and do not leave overripe fruit in the field.",
            "Use fruit bagging or bait traps where practical and recommended locally.",
            "Remove cucurbit crop residues after harvest."
        ],
        "treatment": [
            "Remove and destroy infested fruits; do not leave them on the ground.",
            "Use approved bait or trapping methods according to local guidance.",
            "Protect developing fruits with bags where feasible.",
            "Consult an agricultural technician about locally registered controls."
        ],
        "image": "flt.png"
    },
    {
        "id": "1794075000013",
        "name": "Papaya Ringspot Virus",
        "plant": "Papaya",
        "category": "Viral",
        "symptoms": "Leaves develop yellow-green mosaic patterns and may become narrow or distorted. Dark streaks can appear on leaf stalks and stems, and fruits may have characteristic rings or mottled patches.",
        "cause": "Caused by papaya ringspot virus (PRSV), which is spread mainly by aphids and infected papaya or cucurbit hosts.",
        "prevention": [
            "Use healthy planting material and inspect seedlings before planting.",
            "Remove infected papaya plants promptly to reduce virus sources.",
            "Control weeds and volunteer cucurbits that may host the virus.",
            "Use locally recommended barriers or practices to reduce aphid movement."
        ],
        "treatment": [
            "There is no cure for virus-infected papaya plants.",
            "Remove and dispose of infected plants following local guidance.",
            "Do not move planting material from affected plants.",
            "Replant with healthy stock and consult local agricultural authorities."
        ],
        "image": "ring.webp"
    },
    {
        "id": "1794075000014",
        "name": "Papaya Mealybug",
        "plant": "Papaya",
        "category": "Pest",
        "symptoms": "White, waxy clusters of insects gather on leaves, stems, and fruit. Infested plants may show yellowing, leaf distortion, stunting, and sticky honeydew that can develop black sooty mold.",
        "cause": "Caused by papaya mealybug (Paracoccus marginatus), a sap-feeding insect that can spread on infested plants and plant parts.",
        "prevention": [
            "Inspect new plants and plant parts before bringing them into the field.",
            "Check leaf undersides, stems, and fruit regularly for waxy colonies.",
            "Remove small infestations and badly infested plant parts where practical.",
            "Protect natural enemies and avoid unnecessary broad-spectrum insecticide use."
        ],
        "treatment": [
            "Isolate or remove heavily infested plants when practical.",
            "Wash small infestations off with water or remove them by hand.",
            "Use locally approved treatments only when recommended; ensure coverage of affected plant parts.",
            "Contact local agricultural services about biological control and severe infestations."
        ],
        "image": "melly.jpg"
    },
    {
        "id": "1794075000015",
        "name": "Boron Deficiency (Bumpy Fruit)",
        "plant": "Papaya",
        "category": "Soil / Nutrient",
        "symptoms": "Fruit may develop uneven, bumpy surfaces or irregular shapes. New growth can be distorted, and developing fruit may show poor set or internal damage.",
        "cause": "A physiological disorder associated with insufficient plant-available boron. Soil conditions, leaching, drought, or unsuitable pH can limit boron uptake; similar fruit symptoms can have other causes.",
        "prevention": [
            "Use a soil or plant tissue test to confirm boron deficiency.",
            "Maintain even soil moisture and good soil condition.",
            "Apply boron only at a test-based, locally recommended rate because excess boron can injure plants.",
            "Check soil pH and correct it based on a soil test."
        ],
        "treatment": [
            "Confirm the diagnosis with an agricultural technician or laboratory test.",
            "Apply boron only if deficiency is confirmed and follow local rate recommendations.",
            "Avoid applying extra fertilizer without a test; boron has a narrow safe range.",
            "Monitor new growth and fruit after correcting the underlying soil issue."
        ],
        "image": "bumpy.png"
    },
    {
        "id": "1794075000016",
        "name": "Powdery Mildew",
        "plant": "Squash",
        "category": "Fungal",
        "symptoms": "White, powder-like patches develop on leaf surfaces and may spread across leaves and stems. Leaves can yellow, dry, and die early, reducing fruit production.",
        "cause": "Usually caused by powdery mildew fungi such as Podosphaera xanthii. Spores spread through the air, and the disease often develops in warm conditions with humid nights.",
        "prevention": [
            "Plant resistant varieties when available.",
            "Space plants to improve airflow and provide adequate sunlight.",
            "Remove heavily infected leaves and crop debris.",
            "Avoid excessive nitrogen fertilizer and monitor plants regularly."
        ],
        "treatment": [
            "Remove severely affected leaves when practical.",
            "Use locally approved fungicides or other labeled products when recommended.",
            "Follow product instructions and avoid applying treatments in damaging heat.",
            "Consult an agricultural technician if the disease spreads rapidly."
        ],
        "image": "swuash.jpg"
    },
    {
        "id": "1794075000017",
        "name": "Blossom End Rot",
        "plant": "Squash",
        "category": "Soil / Nutrient",
        "symptoms": "A sunken, dark, leathery patch develops on the blossom end of young squash fruit. Affected fruit may stop growing or rot secondarily.",
        "cause": "A non-infectious disorder caused by inadequate calcium reaching the developing fruit, often due to uneven watering or root stress rather than too little calcium in the soil.",
        "prevention": [
            "Water consistently while fruits are forming.",
            "Mulch to help keep soil moisture even.",
            "Avoid damaging roots during cultivation.",
            "Check soil pH and nutrients before adding lime or calcium."
        ],
        "treatment": [
            "Remove affected fruit so the plant can focus on healthy growth.",
            "Correct irregular watering and reduce root stress.",
            "Test the soil before applying calcium or lime.",
            "New fruit often develops normally once growing conditions improve."
        ],
        "image": "endrot.jpg"
    },
    {
        "id": "1794075000018",
        "name": "Pickleworm",
        "plant": "Squash",
        "category": "Pest",
        "symptoms": "Small holes and moist frass may appear in buds, flowers, stems, or fruit. Damaged squash fruit can become tunneled, rot, or become unmarketable.",
        "cause": "Caused by pickleworm (Diaphania nitidalis) caterpillars, which feed inside cucurbit flowers and fruits.",
        "prevention": [
            "Inspect flowers and young fruits frequently for eggs, entry holes, and frass.",
            "Remove and destroy infested flowers and fruits.",
            "Use row covers before flowering where appropriate, removing them to allow pollination.",
            "Clear crop residues after harvest and rotate crops."
        ],
        "treatment": [
            "Pick off and destroy infested fruits and caterpillars when populations are small.",
            "Protect young plants with row covers before flowering.",
            "Use locally registered controls targeting young larvae when recommended.",
            "Follow product labels and local agricultural guidance to protect pollinators."
        ],
        "image": "worm.jpg"
    }
];