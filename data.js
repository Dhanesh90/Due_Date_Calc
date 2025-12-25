const pregnancyWeeklyData = {
    // --- FIRST TRIMESTER (Weeks 1-13) ---
    1: {
        sizeComparison: "Not pregnant yet", sizeIcon: "🥚",
        development: "The body prepares for a potential pregnancy.",
        detailedInfo: "Technically, your period has begun. Estrogen and progesterone levels rise, prompting the uterine lining to thicken. An egg is maturing in a follicle in your ovary.",
        tests: ["Start Prenatal Vitamins"],
        symptoms: ["Menstrual period", "Cramping", "Mood changes"],
        medicalTips: ["Take 400mcg of folic acid daily.", "Stop alcohol, nicotine, and drugs immediately.", "Ensure your partner adopts healthy habits too."],
        image: "assets/embryo.png"
    },
    2: {
        sizeComparison: "Microscopic Egg", sizeIcon: "🥚",
        development: "Ovulation occurs, setting the stage for conception.",
        detailedInfo: "Around Day 14, ovulation happens. If sperm meets the egg in the fallopian tube, fertilization occurs, creating a zygote. This is the most critical window for conception.",
        tests: ["Ovulation tracking"],
        symptoms: ["Increased cervical mucus", "Mild pelvic pain (Mittelschmerz)"],
        medicalTips: ["Track ovulation to identify your fertile window.", "Maintain a balanced, nutrient-rich diet.", "Stay hydrated."],
        image: "assets/embryo.png"
    },
    3: {
        sizeComparison: "Smaller than a Salt Grain", sizeIcon: "🧂",
        development: "Fertilization and initial division.",
        detailedInfo: "The fertilized egg, now a blastocyst, travels down the fallopian tube toward the uterus. It is a tiny ball of about 100 cells, dividing rapidly every few hours.",
        tests: ["Wait for missed period"],
        symptoms: ["Possible implantation spotting", "Fatigue"],
        medicalTips: ["Act as if you are already pregnant.", "Avoid high-mercury fish and unpasteurized foods.", "Continue prenatal vitamins."],
        image: "assets/embryo.png"
    },
    4: {
        sizeComparison: "Poppy Seed", sizeIcon: "🌱",
        development: "Implantation and hormonal surge (hCG).",
        detailedInfo: "The blastocyst implants into the uterine lining. The placenta begins to form. Your body starts producing hCG, which can be detected by a home pregnancy test by the end of this week.",
        tests: ["Home Pregnancy Test"],
        symptoms: ["Missed period", "Tender breasts", "Mild bloating"],
        medicalTips: ["Schedule your first prenatal visit immediately upon a positive test.", "Switch to gentle, pregnancy-safe skincare.", "Avoid excessive caffeine."],
        image: "assets/embryo.png"
    },
    5: {
        sizeComparison: "Sesame Seed", sizeIcon: "🌑",
        development: "The heart begins to beat and neural tube closes.",
        detailedInfo: "The embryo looks like a tadpole. The heart is beating at a steady rhythm. The neural tube (forming the brain and spinal cord) is closing. Structures for eyes and ears are forming.",
        tests: ["Confirm pregnancy with blood test if needed"],
        symptoms: ["Morning sickness", "Fatigue", "Frequent urination"],
        medicalTips: ["Eat small, frequent meals for nausea.", "Rest as much as your body demands.", "Avoid hot tubs and saunas."],
        image: "assets/embryo.png"
    },
    6: {
        sizeComparison: "Sweet Pea", sizeIcon: "🟢",
        development: "Facial features and limb buds appear.",
        detailedInfo: "The nose, mouth, and ears are taking shape. Tiny buds that will become arms and legs are visible. The intestines are developing, and the brain's hemispheres are forming.",
        tests: ["None"],
        symptoms: ["Morning sickness peak", "Aversions to strong smells"],
        medicalTips: ["Keep crackers by your bed for morning nausea.", "Sip ginger tea or use Vitamin B6 for relief.", "Wear a supportive bra for tender breasts."],
        image: "assets/embryo.png"
    },
    7: {
        sizeComparison: "Blueberry", sizeIcon: "🫐",
        development: "Double in size; brain develops rapidly.",
        detailedInfo: "The embryo is now about 10,000 times larger than at conception. Hands and feet are paddle-shaped. Nerve cells in the brain are branching out to connect.",
        tests: ["Dating Ultrasound (7-12 weeks)"],
        symptoms: ["Food cravings or aversions", "Acne", "Excessive saliva"],
        medicalTips: ["Avoid cat litter (toxoplasmosis risk).", "Wash all fruits and vegetables thoroughly.", "Drink 8-10 glasses of water daily."],
        image: "assets/embryo.png"
    },
    8: {
        sizeComparison: "Raspberry", sizeIcon: "🍇",
        development: "The distinct tail is gone; move around flutters.",
        detailedInfo: "The embryo is more human-looking now. Eyelids are forming, and the tip of the nose is visible. Fingers and toes are becoming distinct, though still webbed.",
        tests: ["First Prenatal Visit"],
        symptoms: ["Vivid dreams", "Heartburn", "Bloating"],
        medicalTips: ["Prepare questions for your first prenatal visit.", "Update your dentist about your pregnancy.", "Establish a gentle exercise routine (walking, swimming)."],
        image: "assets/embryo.png"
    },
    9: {
        sizeComparison: "Grape", sizeIcon: "🍇",
        development: "Heart valves and tooth buds form.",
        detailedInfo: "The heart is divided into four chambers and valves are forming. The baby can move its limbs, though you can't feel it yet. The placenta is now producing most of the progesterone.",
        tests: ["NIPT (Optional, from week 9-10)"],
        symptoms: ["Mood swings", "Nasal congestion", "Headaches"],
        medicalTips: ["Use a saline spray for congestion (check with doctor).", "Increase fiber to prevent constipation.", "Consider genetic screening options."],
        image: "assets/embryo.png"
    },
    10: {
        sizeComparison: "Kumquat", sizeIcon: "🍊",
        development: "Embryo becomes a fetus; vital organs function.",
        detailedInfo: "This marks the end of the embryonic period. Kidneys, liver, brain, and lungs are functioning. The fetus is actively swallowing amniotic fluid and kicking!",
        tests: ["NIPT / Cell-free DNA screening"],
        symptoms: ["Visible veins on breasts/abdomen", "Round ligament pain"],
        medicalTips: ["Switch to maternity clothes or use a belly band.", "Plan for your second trimester ultrasound.", "Include calcium-rich foods like yogurt or kale."],
        image: "assets/fetus_early.png"
    },
    11: {
        sizeComparison: "Fig", sizeIcon: "🟣",
        development: "Skin is transparent; hair/nails start growing.",
        detailedInfo: "The fetus is almost fully formed. It’s kicking and stretching vigorously. The head is currently half the length of its body, but the torso will catch up soon.",
        tests: ["Nuchal Translucency (NT) Scan (11-13 weeks)"],
        symptoms: ["Nausea may start to ease", "Brittle nails/luscious hair"],
        medicalTips: ["Schedule your NT scan if opted for.", "Moisturize your belly to soothe itchy, stretching skin.", "Avoid jerky movements or contact sports."],
        image: "assets/fetus_early.png"
    },
    12: {
        sizeComparison: "Plum", sizeIcon: "🟣",
        development: "Reflexes develop (sucking/curling toes).",
        detailedInfo: "The baby can curl its toes and make sucking motions. Kidney function increases, and the baby is passing urine into the amniotic fluid. Fingerprints are starting to form.",
        tests: ["Routine vitals check"],
        symptoms: ["Dizziness", "Energy returning", "Less frequent urination"],
        medicalTips: ["Start doing Kegel exercises daily.", "Eat iron-rich foods like spinach and lean meats.", "Sleep with a pillow between your legs for comfort."],
        image: "assets/fetus_early.png"
    },
    13: {
        sizeComparison: "Lemon", sizeIcon: "🍋",
        development: "Vocal cords form; baby has fingerprints.",
        detailedInfo: "Final week of the first trimester! The baby’s intestines have moved from the umbilical cord into the stomach. Unique fingerprints are now set on the tiny fingers.",
        tests: ["First trimester screening completion"],
        symptoms: ["Increased sex drive (often)", "Visible bump"],
        medicalTips: ["Celebrate completing the first trimester!", "Start researching childbirth and breastfeeding classes.", "Continue avoiding unpasteurized dairy and deli meats."],
        image: "assets/fetus_early.png"
    },

    // --- SECOND TRIMESTER (Weeks 14-27) ---
    14: {
        sizeComparison: "Peach", sizeIcon: "🍑",
        development: "Facial expressions and lanugo growth.",
        detailedInfo: "The baby can frown, squint, and grimace. Fine hair (lanugo) covers the body for warmth. The thyroid gland is now functioning and producing hormones.",
        tests: ["None"],
        symptoms: ["Energy 'burst'", "Increased appetite", "Round ligament pain"],
        medicalTips: ["Focus on high-quality proteins.", "Keep up with moderate physical activity.", "Start a pregnancy journal if you haven't."],
        image: "assets/fetus_early.png"
    },
    15: {
        sizeComparison: "Apple", sizeIcon: "🍎",
        development: "Taste buds form; sensing light.",
        detailedInfo: "The baby can sense light through fused eyelids and can taste the foods you eat via the amniotic fluid. The legs are now longer than the arms.",
        tests: ["Quad Screen (15-20 weeks)"],
        symptoms: ["Bleeding gums", "Nosebleeds", "Indigestion"],
        medicalTips: ["Practice gentle dental hygiene.", "Use a humidifier if you have nosebleeds.", "Sleep on your left side to improve circulation."],
        image: "assets/fetus_early.png"
    },
    16: {
        sizeComparison: "Avocado", sizeIcon: "🥑",
        development: "Stronger backbones; ears in position.",
        detailedInfo: "The baby can hold its head more upright. The heart is pumping about 25 quarts of blood a day. You may start to feel early flutters (quickening) this week.",
        tests: ["Amniocentesis (if recommended)"],
        symptoms: ["'Pregnancy Glow'", "Forgetfulness (Baby Brain)", "Backaches"],
        medicalTips: ["Invest in a good pregnancy pillow.", "Wear comfortable, low-heeled shoes.", "Stay organized with lists and reminders."],
        image: "assets/fetus_early.png"
    },
    17: {
        sizeComparison: "Pear", sizeIcon: "🍐",
        development: "Fat stores develop; skeleton hardens.",
        detailedInfo: "Adipose tissue (fat) is forming under the skin to provide heat. The skeleton is transitioning from flexible cartilage to hard bone. Sweat glands are developing.",
        tests: ["None"],
        symptoms: ["Itchy abdomen", "Vivid dreams", "Increased vaginal discharge"],
        medicalTips: ["Use cocoa butter or coconut oil for itchy skin.", "Ensure adequate Vitamin D and Calcium intake.", "Avoid standing for long periods."],
        image: "assets/fetus_early.png"
    },
    18: {
        sizeComparison: "Bell Pepper", sizeIcon: "🫑",
        development: "Baby can hear your heartbeat and voice.",
        detailedInfo: "The ears are placed in their final position. The baby can hear sounds from outside and the rush of your blood. Myelin (protective coating) provides insulation for nerves.",
        tests: ["Anatomy Scan (18-22 weeks)"],
        symptoms: ["Leg cramps", "Swollen feet", "Dizziness when standing"],
        medicalTips: ["Talk or sing to your baby; they can hear you!", "Elevate your feet to reduce swelling.", "Get up slowly from sitting or lying down."],
        image: "assets/fetus_early.png"
    },
    19: {
        sizeComparison: "Mango", sizeIcon: "🥭",
        development: "Sensory development (brain); vernix coating.",
        detailedInfo: "A greasy, white coating called vernix caseosa protects the baby's skin from the amniotic fluid. The brain is designating specific areas for smell, taste, hearing, vision, and touch.",
        tests: ["Anatomy Ultrasound"],
        symptoms: ["Lower abdominal pain", "Hip pain"],
        medicalTips: ["Sign up for a hospital tour or birth center visit.", "Establish a side-sleeping routine.", "Do gentle stretches for hip relief."],
        image: "assets/fetus_early.png"
    },
    20: {
        sizeComparison: "Banana", sizeIcon: "🍌",
        development: "Halfway there! vernix protects skin.",
        detailedInfo: "The halfway point! The baby is covered in vernix caseosa for protection. They are producing meconium (first bowel movement). The top of your uterus is now at your belly button.",
        tests: ["Anatomy Scan (Gender reveal possible)"],
        symptoms: ["Heartburn", "Swelling", "Stronger kicks"],
        medicalTips: ["Start thinking about your birth plan.", "Increase iron intake (27-30mg) to support blood volume.", "Stay hydrated to prevent Braxton Hicks."],
        image: "assets/fetus.png"
    },
    21: {
        sizeComparison: "Carrot", sizeIcon: "🥕",
        development: "Deliberate movements; sleep/wake cycles.",
        detailedInfo: "Kicks and jabs are becoming more frequent as the baby gains strength. The baby has established regular sleep and wake cycles. The digestive system is maturing.",
        tests: ["None"],
        symptoms: ["Braxton Hicks (false labor)", "Stretch marks", "Leaky breasts"],
        medicalTips: ["Wear a supportive maternity bra.", "Keep moisturizing your stretching skin.", "Learn the difference between Braxton Hicks and real labor."],
        image: "assets/fetus.png"
    },
    22: {
        sizeComparison: "Papaya", sizeIcon: "🥭",
        development: "Eyes formed; baby looks like a newborn.",
        detailedInfo: "The baby looks like a miniature newborn, though the eyes lack pigment. The pancreas is developing and producing hormones. Lips and eyebrows are distinct.",
        tests: ["None"],
        symptoms: ["Protruding belly button", "Back pain", "Leg cramps"],
        medicalTips: ["Eat magnesium-rich foods for leg cramps.", "Maintain good posture when sitting.", "Continue low-impact prenatal yoga or exercise."],
        image: "assets/fetus.png"
    },
    23: {
        sizeComparison: "Grapefruit", sizeIcon: "🍊",
        development: "Lungs develop surfactant-producing cells.",
        detailedInfo: "The lungs are preparing for life outside by producing surfactant, which helps the tiny air sacs (alveoli) stay open. The baby's inner ear is now developed enough to sense balance.",
        tests: ["None"],
        symptoms: ["Red palms/soles", "Linea nigra (dark line on belly)"],
        medicalTips: ["Play music for your baby.", "Watch for signs of preterm labor (cramping, pelvic pressure).", "Stay cool and avoid overheating."],
        image: "assets/fetus.png"
    },
    24: {
        sizeComparison: "Corn", sizeIcon: "🌽",
        development: "Viability milestone; lungs maturing rapidly.",
        detailedInfo: "This is a major milestone! A baby born now has a chance of survival with intensive care. The baby is gaining about 6 ounces a week. Sweat glands are fully formed.",
        tests: ["Glucose Challenge Screening (24-28 weeks)"],
        symptoms: ["Dry/itchy eyes", "Swollen ankles", "Backaches"],
        medicalTips: ["Schedule and prepare for your glucose test.", "Use eye drops if your eyes feel dry.", "Wear compression socks for swelling."],
        image: "assets/fetus_kicking.png"
    },
    25: {
        sizeComparison: "Cauliflower", sizeIcon: "🥦",
        development: "Capillaries form; nostrils open.",
        detailedInfo: "Small blood vessels (capillaries) are forming under the skin, giving the baby a pinkish glow. The baby's nostrils are opening and they are practicing 'breathing' amniotic fluid.",
        tests: ["Glucose Screening"],
        symptoms: ["Hemorrhoids", "Constipation", "Restless legs"],
        medicalTips: ["Eat high-fiber foods to manage constipation.", "Take warm baths for muscle aches.", "Sleep on your left side to maximize blood flow."],
        image: "assets/fetus_kicking.png"
    },
    26: {
        sizeComparison: "Zucchini", sizeIcon: "🥒",
        development: "Eyes can open and blink; brain waves detected.",
        detailedInfo: "The baby's eyes open for the first time! Brain waves are regular and the baby can react to light and sound. The lungs are still immature but developing air sacs.",
        tests: ["Glucose Screening"],
        symptoms: ["Insomnia", "Rib pain", "Shortness of breath"],
        medicalTips: ["Establish a relaxing bedtime routine.", "Practice deep breathing exercises.", "Use a belly support belt for rib pain."],
        image: "assets/fetus_kicking.png"
    },
    27: {
        sizeComparison: "Head of Lettuce", sizeIcon: "🥬",
        development: "Rhythmic breathing; brain ridges form.",
        detailedInfo: "The brain is becoming more complex with the development of the cerebral cortex. The baby can dream. This week marks the end of the second trimester.",
        tests: ["Rh factor check (if Rh negative)"],
        symptoms: ["Leg cramps", "Increased swelling", "Shortness of breath"],
        medicalTips: ["Start interviewing pediatricians.", "Discuss cord blood banking with your partner.", "Count the 'bursts' of movement you feel."],
        image: "assets/fetus_kicking.png"
    },

    // --- THIRD TRIMESTER (Weeks 28-40+) ---
    28: {
        sizeComparison: "Eggplant", sizeIcon: "🍆",
        development: "Dreaming (REM sleep) occurs; eyes have lashes.",
        detailedInfo: "Welcome to the third trimester! The baby can blink and dream. The brain's surface is becoming wrinkled with fissures. Bone marrow has taken over blood production.",
        tests: ["Tdap Vaccine (27-36 weeks)"],
        symptoms: ["Sciatica", "Shortness of breath", "Braxton Hicks"],
        medicalTips: ["Get your Tdap vaccine if scheduled.", "Count daily kicks; aim for 10 movements in 2 hours.", "Avoid lying flat on your back."],
        image: "assets/fetus_kicking.png"
    },
    29: {
        sizeComparison: "Butternut Squash", sizeIcon: "🥜",
        development: "Muscles and lungs maturing; head grows.",
        detailedInfo: "The baby is gaining white fat for energy and warmth. The head is growing to accommodate the expanding brain. Movement may feel more like rolls and pokes now.",
        tests: ["Kick counts"],
        symptoms: ["Varicose veins", "Constipation", "Heartburn"],
        medicalTips: ["Elevate your legs when sitting.", "Drink plenty of water to manage constipation.", "Eat small, frequent meals for heartburn."],
        image: "assets/fetus_kicking.png"
    },
    30: {
        sizeComparison: "Cabbage", sizeIcon: "🥬",
        development: "Eyes distinguish light; space getting tight.",
        detailedInfo: "The baby's eyes can now distinguish between light and dark and follow a source. The baby is growing larger, possibly extending under your rib cage. Brain development is rapid.",
        tests: ["Kick counts"],
        symptoms: ["Mood swings return", "Fatigue", "Trouble sleeping"],
        medicalTips: ["Research pain relief options for delivery.", "Look into cord blood banking.", "Monitor posture to help with backaches."],
        image: "assets/fetus_kicking.png"
    },
    31: {
        sizeComparison: "Coconut", sizeIcon: "🥥",
        development: "Five senses fully developed; longer sleep.",
        detailedInfo: "The baby can process information from all five senses. They are sleeping longer stretches. Weight gain is picking up speed as the baby prepares for birth.",
        tests: ["None"],
        symptoms: ["Frequent urination", "Leaking colostrum (early milk)"],
        medicalTips: ["Buy nursing bras and breast pads.", "Practice relaxation and visualization.", "Finalize your hospital bag list."],
        image: "assets/fetus_kicking.png"
    },
    32: {
        sizeComparison: "Jicama", sizeIcon: "🥔",
        development: "Practicing breathing movements; nails formed.",
        detailedInfo: "The baby is practicing breathing by inhaling amniotic fluid. Fingernails have grown to the ends of the fingers. All five senses are working.",
        tests: ["Bi-weekly checkups start"],
        symptoms: ["Shortness of breath", "Heartburn", "Pelvic pressure"],
        medicalTips: ["Install the car seat and have it inspected.", "Review signs of labor (Real vs. Braxton Hicks).", "Finalize daycare or help plans."],
        image: "assets/baby.png"
    },
    33: {
        sizeComparison: "Pineapple", sizeIcon: "🍍",
        development: "Immune system strengthening (antibodies pass).",
        detailedInfo: "Antibodies are passing from your blood to the baby's to provide immunity after birth. The skull bones remain pliable to help fit through the birth canal.",
        tests: ["None"],
        symptoms: ["Overheating", "Headaches", "Insomnia"],
        medicalTips: ["Avoid overheating; stay in cool environments.", "Drink plenty of fluids to avoid dehydration.", "Try prenatal massage for discomfort."],
        image: "assets/baby.png"
    },
    34: {
        sizeComparison: "Cantaloupe", sizeIcon: "🍈",
        development: "Baby positions head-down; lungs nearly ready.",
        detailedInfo: "Most babies settle into a head-down (vertex) position now. The central nervous system and lungs are nearly fully mature. Fat continues to fill out the skin.",
        tests: ["None"],
        symptoms: ["Pelvic pressure", "Blurred vision (report to MD)", "Swelling"],
        medicalTips: ["Watch for signs of preeclampsia (sudden swelling, headaches).", "Complete your nursery organization.", "Practice labor breathing."],
        image: "assets/baby.png"
    },
    35: {
        sizeComparison: "Honeydew", sizeIcon: "🍈",
        development: "Building iron stores; kidneys fully developed.",
        detailedInfo: "The baby’s kidneys are fully developed and the liver can process some waste. The baby is gaining about an ounce of fat every day.",
        tests: ["Group B Strep (GBS) Test (35-37 weeks)"],
        symptoms: ["Frequent urination", "Occasional colostrum leakage"],
        medicalTips: ["Finalize your postpartum care kit.", "Ensure you have a pediatrician selected.", "Discuss GBS test results with your doctor."],
        image: "assets/baby.png"
    },
    36: {
        sizeComparison: "Romaine Lettuce", sizeIcon: "🥗",
        development: "Shedding lanugo; digestive system ready.",
        detailedInfo: "The baby is shedding the fuzzy lanugo hair and vernix. The digestive system is fully ready for breast milk or formula. The head may drop into the pelvis (lightening).",
        tests: ["Weekly checkups start"],
        symptoms: ["Pelvic pressure (Lightening)", "Nesting instinct"],
        medicalTips: ["Finish packing your hospital bag.", "Meal prep for your first week home.", "Keep your phone charged and handy."],
        image: "assets/baby.png"
    },
    37: {
        sizeComparison: "Winter Melon", sizeIcon: "🍉",
        development: "Early Term; coordinated grasp.",
        detailedInfo: "The baby is considered 'early term' this week. They have a firm grasp and are practicing for life on the outside. All organs are fully functioning.",
        tests: ["Cervical check (optional)"],
        symptoms: ["Spotting", "Increased discharge", "Lower back pain"],
        medicalTips: ["Keep your gas tank full.", "Walk frequently to help baby's head engage.", "Rest as much as you can."],
        image: "assets/baby.png"
    },
    38: {
        sizeComparison: "Leek", sizeIcon: "🥬",
        development: "Vocal cords work; iris pigment develops.",
        detailedInfo: "All body systems are 'go'. The baby has a firm grasp. Eye color is often blue or gray (true color develops 6-12 months after birth).",
        tests: ["None"],
        symptoms: ["Anxiety / Excitement", "Braxton Hicks increase"],
        medicalTips: ["Finalize plans for older children or pets.", "Relax with breathing and music.", "Double-check your car seat installation."],
        image: "assets/baby.png"
    },
    39: {
        sizeComparison: "Watermelon", sizeIcon: "🍉",
        development: "Full Term; baby's skin thickens.",
        detailedInfo: "The baby is 'full term'! Fat continues to accumulate under the skin to help regulate temperature. The chest sticks out as the lungs mature.",
        tests: ["None"],
        symptoms: ["Contractions", "Water breaking (less common start)"],
        medicalTips: ["Time your contractions (5-1-1 rule).", "Rest between bouts of activity.", "Trust your body's ability to birth."],
        image: "assets/baby.png"
    },
    40: {
        sizeComparison: "Pumpkin", sizeIcon: "🎃",
        development: "Happy Due Date! Skull remains pliable.",
        detailedInfo: "Happy Due Date! Bones have hardened, but the skull remains soft/pliable for birth. You may experience 'crowning' soon. Only 5% of babies arrive exactly on time.",
        tests: ["Non-stress test (if overdue)"],
        symptoms: ["Labor signs!", "Impatience", "Strong contractions"],
        medicalTips: ["Learn techniques to fight the urge to push too early.", "Understand the APGAR test.", "Stay calm and trust your body."],
        image: "assets/baby.png"
    }
};

