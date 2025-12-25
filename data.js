const pregnancyWeeklyData = {
    // Weeks 1-4: Early Development
    1: {
        sizeComparison: "Not pregnant yet", sizeIcon: "🥚",
        development: "Your body is preparing for ovulation/conception.",
        detailedInfo: "Technically, you are not pregnant yet. This week is the start of your period. Your uterine lining is shedding to prepare for a new cycle, and your body is gearing up to release a mature egg.",
        tests: ["Start Prenatal Vitamins"],
        symptoms: ["Menstrual period", "Cramping"],
        medicalTips: ["Start taking prenatal vitamins immediately.", "Avoid alcohol, smoking, and recreational drugs.", "adopt a balanced diet and exercise routine."],
        image: "assets/embryo.png"
    },
    2: {
        sizeComparison: "Microscopic Egg", sizeIcon: "🥚",
        development: "Ovulation occurs. Prime time for conception.",
        detailedInfo: "An egg is released from your ovary (ovulation) and travels down the fallopian tube. If it meets sperm, fertilization happens! The lining of your uterus thickens to receive a potential fertilized egg.",
        tests: ["Ovulation predictor kit (optional)"],
        symptoms: ["Increased cervical mucus", "Mild cramping"],
        medicalTips: ["Act as if you are already pregnant to protect the baby.", "Track your cycle to find your fertile window."],
        image: "assets/embryo.png"
    },
    3: {
        sizeComparison: "Smaller than a Salt Grain", sizeIcon: "🧂",
        development: "Fertilization! The sperm meets the egg and forms a zygote.",
        detailedInfo: "If sperm meets the egg, fertilization happens! The fertilized egg (zygote) begins dividing rapidly as it travels down the fallopian tube toward the uterus.",
        tests: ["None"],
        symptoms: ["Spotting (Implantation bleeding)"],
        medicalTips: ["Continue prenatal vitamins.", "Eat a balanced diet rich in iron and calcium."],
        image: "assets/embryo.png"
    },
    4: {
        sizeComparison: "Poppy Seed", sizeIcon: "🌱",
        development: "Implantation in the uterine lining. The blastocyst is now an embryo.",
        detailedInfo: "The ball of cells (blastocyst) implants into your uterine lining. The placenta begins to form to nourish the baby. This is often when you can get a positive home pregnancy test.",
        tests: ["Home Pregnancy Test"],
        symptoms: ["Missed period", "Mild cramps", "Breast tenderness"],
        medicalTips: ["If you get a positive test, call your doctor to schedule your first appointment.", "Avoid raw meat and unpasteurized dairy."],
        image: "assets/embryo.png"
    },

    // Weeks 5-13: First Trimester
    5: {
        sizeComparison: "Sesame Seed", sizeIcon: "🥓",
        development: "Heart begins to beat. Neural tube forming.",
        detailedInfo: "The embryo looks like a tadpole. The neural tube (brain/spinal cord) is closing, and the tiny heart begins to beat. Structures for eyes and ears are starting to form.",
        tests: ["Schedule first prenatal appointment"],
        symptoms: ["Fatigue", "Breast tenderness", "Nausea (Morning Sickness)"],
        medicalTips: ["Arrange your first prenatal visit.", "Narrow down your healthcare provider choice.", "Prepare for morning sickness."],
        image: "assets/embryo.png"
    },
    6: {
        sizeComparison: "Sweet Pea", sizeIcon: "🥗",
        development: "Facial features are beginning to shape.",
        detailedInfo: "The nose, mouth, and ears are starting to take shape. Intestines and brain are developing. Little buds for arms and legs appear.",
        tests: ["None"],
        symptoms: ["Morning sickness", "Frequent urination", "Fatigue"],
        medicalTips: ["Ginger or Vitamin B6 may help with nausea.", "Drink plenty of water."],
        image: "assets/embryo.png"
    },
    7: {
        sizeComparison: "Blueberry", sizeIcon: "🫐",
        development: "Baby has doubled in size. Arm and leg buds appear.",
        detailedInfo: "The embryo is about 10,000 times bigger than at conception. Hands and feet are emerging from the limb buds like little paddles.",
        tests: ["Early ultrasound (dating scan)"],
        symptoms: ["Food aversions", "Nausea peaks", "Acne"],
        medicalTips: ["Avoid cleaning cat litter boxes (toxoplasmosis risk).", "Wear a supportive bra for tender breasts."],
        image: "assets/embryo.png"
    },
    8: {
        sizeComparison: "Raspberry", sizeIcon: "🍇",
        development: "Fingers and toes are webbed but forming.",
        detailedInfo: "The tail is gone. The embryo is starting to look more human. Eyelids form. Nerve cells in the brain are branching out to connect with one another.",
        tests: ["First Prenatal Visit (History, Vitals, Labs)"],
        symptoms: ["Fatigue", "Acne", "Heightened sense of smell"],
        medicalTips: ["Review your family medical history for your doctor visits.", "Check with your doctor before taking any OTC medications."],
        image: "assets/embryo.png"
    },
    9: {
        sizeComparison: "Grape", sizeIcon: "🍇",
        development: "Heartbeat is audible on Doppler. Organs are developing.",
        detailedInfo: "Basic physiology is in place. The heart is divided into four chambers. Valves are starting to form. The baby can move its limbs.",
        tests: ["NIPT (Non-Invasive Prenatal Test) - optional"],
        symptoms: ["Mood swings", "Bloating", "Constipation"],
        medicalTips: ["Increase fiber intake to help with constipation.", "Consider genetic screening options."],
        image: "assets/embryo.png"
    },
    10: {
        sizeComparison: "Kumquat", sizeIcon: "🍊",
        development: "Vital organs functioning. Nails appearing.",
        detailedInfo: "You are now in the fetal period! Kidneys, liver, brain, and lungs are functioning. Fingers lose their webbing, and nails/hair start to appear. The baby is actively swallowing and kicking.",
        tests: ["NIPT screening"],
        symptoms: ["Round ligament pain", "Visible veins"],
        medicalTips: ["Plan for your second prenatal visit.", "Consider low-impact exercise like swimming.", "Ask your doctor about 'quickening'."],
        image: "assets/fetus_early.png"
    },
    11: {
        sizeComparison: "Fig", sizeIcon: "🍌",
        development: "Skin is see-through. Moving around actively!",
        detailedInfo: "The baby is almost fully formed. It's kicking and stretching, though you can't feel it yet. The head is arguably the biggest part of the body.",
        tests: ["Nuchal Translucency Scan (11-14 weeks)"],
        symptoms: ["Nausea may improve", "Hair and nail growth"],
        medicalTips: ["Schedule your nuchal translucency scan if relevant.", "Keep moisturizing your growing belly."],
        image: "assets/fetus_early.png"
    },
    12: {
        sizeComparison: "Plum", sizeIcon: "🟣",
        development: "Reflexes are developing. Fingerprints are forming.",
        detailedInfo: "The baby can curl its toes and make sucking motions. Kidney function is increasing, passing urine into the amniotic fluid.",
        tests: ["Nuchal Translucency Scan"],
        symptoms: ["Energy levels returning", "Dizziness"],
        medicalTips: ["Start doing Kegel exercises.", "Plan for your second trimester screening."],
        image: "assets/fetus_early.png"
    },
    13: {
        sizeComparison: "Lemon", sizeIcon: "🍋",
        development: "Vocal cords are forming.",
        detailedInfo: "Last week of the first trimester! The baby has unique fingerprints. Intestines have moved from the umbilical cord into the stomach.",
        tests: ["None"],
        symptoms: ["Visible bump (maybe)", "Increased sex drive"],
        medicalTips: ["Celebrate completing the first trimester!", "Start looking into childbirth classes."],
        image: "assets/fetus_early.png"
    },

    // Weeks 14-27: Second Trimester
    14: {
        sizeComparison: "Peach", sizeIcon: "🍑",
        development: "Baby can make facial expressions. Lanugo (hair) grows.",
        detailedInfo: "Fine hair (lanugo) covers the body to keep it warm. The baby can frown, squint, and grimace. You might feel less nauseous now.",
        tests: ["None"],
        symptoms: ["Less nausea", "Increased appetite", "Round ligament pain"],
        medicalTips: ["Focus on nutrient-dense foods for your increased appetite.", "Stay active."],
        image: "assets/fetus_early.png"
    },
    15: {
        sizeComparison: "Apple", sizeIcon: "🍎",
        development: "Light sensitivity is developing.",
        detailedInfo: "The baby can sense light even though eyes are fused shut. Taste buds are fully functional.",
        tests: ["Quad Screen (15-20 weeks)"],
        symptoms: ["Nasal congestion", "Bleeding gums", "Indigestion"],
        medicalTips: ["Practice good oral hygiene; pregnancy can affect gums.", "Sleep on your side."],
        image: "assets/fetus_early.png"
    },
    16: {
        sizeComparison: "Avocado", sizeIcon: "🥑",
        development: "Heart pumps 25 quarts of blood a day.",
        detailedInfo: "Backbones and muscles are getting stronger. The baby can hold its head up. The umbilical cord is fully developed.",
        tests: ["Amniocentesis (if recommended)"],
        symptoms: ["Back pain", "Glowing skin", "Forgetfulness ('Baby Brain')"],
        medicalTips: ["Use a pregnancy pillow for better sleep support.", "Stay organized with lists."],
        image: "assets/fetus_early.png"
    },
    17: {
        sizeComparison: "Pear", sizeIcon: "🍐",
        development: "Skeleton is hardening from cartilage to bone.",
        detailedInfo: "Fat stores begin to develop under the baby's skin. The umbilical cord is growing thicker and stronger.",
        tests: ["None"],
        symptoms: ["Vivid dreams", "Crazy appetite", "Itchy skin"],
        medicalTips: ["Moisturize itchy skin.", "Invest in comfortable shoes."],
        image: "assets/fetus_early.png"
    },
    18: {
        sizeComparison: "Bell Pepper", sizeIcon: "🫑",
        development: "Ears are in position; baby can hear you!",
        detailedInfo: "The baby's ears stand out from the head. They can hear your heartbeat and loud noises outside the womb. You may feel 'flutters'.",
        tests: ["Anatomy Scan (18-22 weeks)"],
        symptoms: ["Dizziness", "Leg cramps", "Swollen feet"],
        medicalTips: ["Talk or sing to your baby!", "Elevate feet to reduce swelling."],
        image: "assets/fetus_early.png"
    },
    19: {
        sizeComparison: "Mango", sizeIcon: "🥭",
        development: "Vernix caseosa covers the skin.",
        detailedInfo: "A waxy coating (vernix) protects the baby's sensitive skin from the amniotic fluid. Sensory development in the brain is exploding.",
        tests: ["Anatomy Scan"],
        symptoms: ["Hip pain", "Abdominal aches"],
        medicalTips: ["Stretch your hips and back.", "Sign up for a hospital tour."],
        image: "assets/fetus_early.png"
    },
    20: {
        sizeComparison: "Banana", sizeIcon: "🍌",
        development: "Halfway there! Vernix protects skin.",
        detailedInfo: "Halfway point! The baby is covered in 'vernix caseosa' (cheesy varnish) to protect skin from amniotic fluid. They are producing meconium (first bowel movement). Hair and lashes are growing.",
        tests: ["Anatomy Scan (Gender reveal possible)"],
        symptoms: ["Heartburn", "Swelling", "Snoring"],
        medicalTips: ["Start thinking about your birth plan.", "Consider a pregnancy journal.", "Increase iron intake (27-30mg) to prevent anemia."],
        image: "assets/fetus.png"
    },
    21: {
        sizeComparison: "Carrot", sizeIcon: "🥕",
        development: "Eyelids are finished. Baby moves more.",
        detailedInfo: "Movements are becoming deliberate kicks and jabs. The baby sleeps and wakes in cycles.",
        tests: ["None"],
        symptoms: ["Braxton Hicks contractions", "Leaky breasts"],
        medicalTips: ["Stay hydrated to reduce Braxton Hicks.", "Wear breast pads if needed."],
        image: "assets/fetus.png"
    },
    22: {
        sizeComparison: "Papaya", sizeIcon: "🥣",
        development: "Lips and eyebrows are distinct.",
        detailedInfo: "The baby looks like a miniature newborn. The eyes are formed, but the iris lacks pigment. The pancreas is producing hormones.",
        tests: ["None"],
        symptoms: ["Stretch marks", "Protruding belly button"],
        medicalTips: ["Keep tracking baby's movements.", "Continue eating iron-rich foods."],
        image: "assets/fetus.png"
    },
    23: {
        sizeComparison: "Grapefruit", sizeIcon: "🍊",
        development: "Baby can sense movement well.",
        detailedInfo: "The baby can feel you dancing or moving. The lungs are developing 'branches' of the respiratory tree and cells that produce surfactant.",
        tests: ["None"],
        symptoms: ["Linea nigra (dark line on belly)", "Red palms"],
        medicalTips: ["Play music for your baby.", "Watch for signs of preterm labor."],
        image: "assets/fetus.png"
    },
    24: {
        sizeComparison: "Corn", sizeIcon: "🌽",
        development: "Viability milestone. Lungs developing.",
        detailedInfo: "This is a major milestone for viability. The baby is gaining weight steadily. Organs are maturing rapidly.",
        tests: ["Glucose Challenge Screening (24-28 weeks)"],
        symptoms: ["Dry eyes", "Itchy palms"],
        medicalTips: ["Prepare for your glucose test (sugary drink).", "Use eye drops for dry eyes."],
        image: "assets/fetus_kicking.png"
    },
    25: {
        sizeComparison: "Cauliflower", sizeIcon: "🥦",
        development: "Fat is being added. Skin is smoothing out.",
        detailedInfo: "Baby fat is filling in the wrinkles. Hair has color and texture. The nostrils open up.",
        tests: ["Glucose Screening"],
        symptoms: ["Hemorrhoids", "Constipation", "Restless legs"],
        medicalTips: ["Eat high-fiber foods.", "Soak in a warm bath for aches."],
        image: "assets/fetus_kicking.png"
    },
    26: {
        sizeComparison: "Zucchini", sizeIcon: "🥒",
        development: "Eyes can open and blink.",
        detailedInfo: "The baby's eyes open for the first time! They can blink and see vague shapes and light changes. Brain waves are stronger.",
        tests: ["Glucose Screening"],
        symptoms: ["Insomnia", "Rib pain"],
        medicalTips: ["Establish a relaxing bedtime routine.", "Practice breathing exercises."],
        image: "assets/fetus_kicking.png"
    },
    27: {
        sizeComparison: "Head of Lettuce", sizeIcon: "🥬",
        development: "Brain activity increases significantly.",
        detailedInfo: "The brain is now more complex with ridges and grooves. The baby can dream. This marks the end of the second trimester.",
        tests: ["Rh factor screening (if Rh negative)"],
        symptoms: ["Leg cramps", "Backaches", "Shortness of breath"],
        medicalTips: ["Start interviewing pediatricians.", "Discuss cord blood banking options."],
        image: "assets/fetus_kicking.png"
    },

    // Weeks 28-40+: Third Trimester
    28: {
        sizeComparison: "Eggplant", sizeIcon: "🍆",
        development: "Dreaming (REM sleep) occurs. Eyes have lashes.",
        detailedInfo: "Welcome to the third trimester! The baby can blink and dream. It's getting cramped in there.",
        tests: ["Tdap Vaccine (27-36 weeks)"],
        symptoms: ["Shortness of breath", "Sciatica"],
        medicalTips: ["Get your Tdap vaccine.", "Count daily kicks."],
        image: "assets/fetus_kicking.png"
    },
    29: {
        sizeComparison: "Butternut Squash", sizeIcon: "🥜",
        development: "Muscles and lungs maturing.",
        detailedInfo: "The baby is gaining white fat for energy and warmth. The head is growing to accommodate the developing brain.",
        tests: ["Kick counts"],
        symptoms: ["Varicose veins", "Constipation"],
        medicalTips: ["Elevate legs and wear compression socks.", "Monitor baby's movement patterns."],
        image: "assets/fetus_kicking.png"
    },
    30: {
        sizeComparison: "Cabbage", sizeIcon: "🥬",
        development: "Eyes distinguish light. Space getting tight.",
        detailedInfo: "The baby's eyes can now distinguish between light and dark and follow a source. The baby is growing larger, possibly extending under your rib cage. Mood swings may return for you.",
        tests: ["Kick counts"],
        symptoms: ["Mood swings return", "Fatigue", "Trouble sleeping"],
        medicalTips: ["Research pain relief options for delivery.", "Look into cord blood banking.", "Monitor posture for backaches."],
        image: "assets/fetus_kicking.png"
    },
    31: {
        sizeComparison: "Coconut", sizeIcon: "🥥",
        development: "Five senses are fully developed.",
        detailedInfo: "The baby can process information from all five senses. It's sleeping longer stretches. Weight gain is picking up speed.",
        tests: ["None"],
        symptoms: ["Frequent urination", "Leaking colostrum"],
        medicalTips: ["Buy nursing bras.", "Practice relaxation techniques."],
        image: "assets/fetus_kicking.png"
    },
    32: {
        sizeComparison: "Jicama", sizeIcon: "🥔",
        development: "Practicing breathing movements.",
        detailedInfo: "The baby is practicing breathing by inhaling amniotic fluid. Fingernails have grown to the ends of the fingers.",
        tests: ["Bi-weekly checkups start"],
        symptoms: ["Leaking colostrum", "Heartburn"],
        medicalTips: ["Install the car seat.", "Review signs of labor."],
        image: "assets/baby.png"
    },
    33: {
        sizeComparison: "Pineapple", sizeIcon: "🍍",
        development: "Immune system is strengthening.",
        detailedInfo: "Antibodies are passing from you to the baby. The skull bones are pliable to help fit through the birth canal.",
        tests: ["None"],
        symptoms: ["Overheating", "Headaches"],
        medicalTips: ["Take it easy; avoid overheating.", "Drink plenty of fluids."],
        image: "assets/baby.png"
    },
    34: {
        sizeComparison: "Cantaloupe", sizeIcon: "🍈",
        development: "Baby positions head-down.",
        detailedInfo: "Most babies settle into a head-down position (vertex). The central nervous system is maturing. Lungs are nearly fully formed.",
        tests: ["None"],
        symptoms: ["Blurred vision (watch for preeclampsia)", "Pelvic pressure"],
        medicalTips: ["Know the signs of preeclampsia (swelling, vision changes).", "Finalize nursery."],
        image: "assets/baby.png"
    },
    35: {
        sizeComparison: "Honeydew", sizeIcon: "🍈",
        development: "Building iron stores.",
        detailedInfo: "The kidneys are fully developed. The liver can process some waste. The baby is gaining about an ounce a day.",
        tests: ["Group B Strep Test (35-37 weeks)"],
        symptoms: ["Pelvic pressure", "Frequent urination"],
        medicalTips: ["Create a checklist for after birth.", "Discuss GBS test results with your doctor."],
        image: "assets/baby.png"
    },
    36: {
        sizeComparison: "Romaine Lettuce", sizeIcon: "🥗",
        development: "Shedding lanugo. Lungs ready.",
        detailedInfo: "The baby is shedding the fuzzy hair (lanugo) and waxy coating (vernix). Digestive system is fully ready for milk.",
        tests: ["Weekly checkups start", "Baby positioning check"],
        symptoms: ["Lightning crotch (sharp pelvic pain)", "Nesting"],
        medicalTips: ["Finish packing hospital bag.", "Meal prep for postpartum."],
        image: "assets/baby.png"
    },
    37: {
        sizeComparison: "Winter Melon", sizeIcon: "🍉",
        development: "Early Term! Practice breathing.",
        detailedInfo: "Considered 'early term'. The baby is practicing for life on the outside. It's getting very tight in the womb.",
        tests: ["Cervical check (optional)"],
        symptoms: ["Spotting", "Mucus plug loss"],
        medicalTips: ["Keep your gas tank full.", "Watch for contractions."],
        image: "assets/baby.png"
    },
    38: {
        sizeComparison: "Leek", sizeIcon: "🧅",
        development: "Vocal cords work. Ready to cry.",
        detailedInfo: "All systems are go. The baby has a firm grasp. Eye color is likely blue or gray (true color develops later).",
        tests: ["None"],
        symptoms: ["Nesting instinct", "Anxiety"],
        medicalTips: ["Relax and sleep while you can.", "Finalize plans for older siblings/pets."],
        image: "assets/baby.png"
    },
    39: {
        sizeComparison: "Watermelon", sizeIcon: "🍉",
        development: "Full Term. Changing skin color.",
        detailedInfo: "The baby develops a thicker skin layer. It's fully ready to meet you. The chest sticks out.",
        tests: ["None"],
        symptoms: ["Contractions", "Water breaking"],
        medicalTips: ["Time your contractions (5-1-1 rule).", "Double check car seat installation."],
        image: "assets/baby.png"
    },
    40: {
        sizeComparison: "Pumpkin", sizeIcon: "🎃",
        development: "Happy Due Date! Skull is pliable.",
        detailedInfo: "Happy Due Date! Bones have hardened, but the skull remains soft/pliable for birth. You may experience 'crowning' soon. Only 5% of babies arrive exactly on time.",
        tests: ["Non-stress test (if overdue)"],
        symptoms: ["Labor signs!", "Impatience", "Contractions"],
        medicalTips: ["Learn techniques to fight the urge to push too early.", "Understand the APGAR test.", "Stay calm and patient."],
        image: "assets/baby.png"
    },
    41: {
        sizeComparison: "Late Arrival", sizeIcon: "🕒",
        development: "Late term. Still baking!",
        detailedInfo: "The baby continues to gain weight. Your doctor will monitor closely to ensure the placenta is still functioning well.",
        tests: ["Biophysical Profile", "Non-stress test"],
        symptoms: ["Impatience!", "Discomfort"],
        medicalTips: ["Discuss induction options.", "Keep counting kicks."],
        image: "assets/baby.png"
    },
    42: {
        sizeComparison: "Overdue", sizeIcon: "⏰",
        development: "Post term.",
        detailedInfo: "Generally, induction is recommended by now to ensure safety. The baby's skin might be dry or peeling.",
        tests: ["Induction discussion"],
        symptoms: ["Ready to pop"],
        medicalTips: ["Follow doctor's induction advice.", "You'll meet your baby very soon!"],
        image: "assets/baby.png"
    }
};

