const pregnancyWeeklyData = {
    // Weeks 1-4: Early Development
    1: { development: "Your body is preparing for ovulation. Technically, you're not pregnant yet!", tests: ["Start Prenatal Vitamins"], symptoms: ["Menstrual period"], image: "assets/embryo.png" },
    2: { development: "Ovulation occurs. This is the prime time for conception.", tests: ["Ovulation predictor kit (optional)"], symptoms: ["Increased cervical mucus", "Mild cramping"], image: "assets/embryo.png" },
    3: { development: "Fertilization! The sperm meets the egg and forms a zygote.", tests: ["None"], symptoms: ["Spotting (Implantation bleeding)"], image: "assets/embryo.png" },
    4: { development: "Implantation in the uterine lining. The poppy seed-sized blastocyst is now an embryo.", tests: ["Home Pregnancy Test"], symptoms: ["Missed period", "Mild cramps"], image: "assets/embryo.png" },

    // Weeks 5-13: First Trimester
    5: { development: "The neural tube (brain/spinal cord) is forming. The heart begins to beat!", tests: ["Schedule first prenatal appointment"], symptoms: ["Fatigue", "Breast tenderness", "Nausea"], image: "assets/embryo.png" },
    6: { development: "Baby is the size of a sweet pea. Facial features are beginning to shape.", tests: ["None"], symptoms: ["Morning sickness", "Frequent urination"], image: "assets/embryo.png" },
    7: { development: "Baby has doubled in size to a blueberry. Arm and leg buds appear.", tests: ["Early ultrasound (dating scan)"], symptoms: ["Food aversions", "Nausea peaks"], image: "assets/embryo.png" },
    8: { development: "Baby is a kidney bean. Fingers and toes are webbed but forming.", tests: ["First Prenatal Visit (History, Vitals, Labs)"], symptoms: ["Fatigue", "Acne"], image: "assets/embryo.png" },
    9: { development: "Baby is a grape. The tail is disappearing. Heartbeat is audible on Doppler.", tests: ["NIPT (Non-Invasive Prenatal Test) - optional from week 9/10"], symptoms: ["Mood swings", "Bloating"], image: "assets/embryo.png" },
    10: { development: "Baby is a strawberry. Vital organs are functioning.", tests: ["NIPT screening"], symptoms: ["Round ligament pain (mild)"], image: "assets/embryo.png" },
    11: { development: "Baby is a fig. Skin is see-through. Moving around actively!", tests: ["Nuchal Translucency Scan (11-14 weeks)"], symptoms: ["Nausea may improve"], image: "assets/embryo.png" },
    12: { development: "Baby is a plum. Reflexes are developing (opening/closing fingers).", tests: ["Nuchal Translucency Scan"], symptoms: ["Energy levels returning"], image: "assets/embryo.png" },
    13: { development: "Baby is a lemon. Fingerprints are forming.", tests: ["None"], symptoms: ["Visible bump (maybe)"], image: "assets/fetus.png" },

    // Weeks 14-27: Second Trimester
    14: { development: "Baby is a peach. You might feel flutters (quickening).", tests: ["None"], symptoms: ["Less nausea", "Increased appetite"], image: "assets/fetus.png" },
    15: { development: "Baby is an apple. Light sensitivity is developing.", tests: ["Quad Screen (15-20 weeks)"], symptoms: ["Nasal congestion", "Bleeding gums"], image: "assets/fetus.png" },
    16: { development: "Baby is an avocado. Heart pumps 25 quarts of blood a day.", tests: ["Amniocentesis (if recommended)"], symptoms: ["Back pain", "Glowing skin"], image: "assets/fetus.png" },
    17: { development: "Baby is a pomegranate. Skeleton is hardening from rubbery cartilage to bone.", tests: ["None"], symptoms: ["Vivid dreams", "Crazy appetite"], image: "assets/fetus.png" },
    18: { development: "Baby is an artichoke. Ears are in position; baby can hear you!", tests: ["Anatomy Scan (18-22 weeks)"], symptoms: ["Dizziness", "Leg cramps"], image: "assets/fetus.png" },
    19: { development: "Baby is a mango. Vernix caseosa (cheesy coating) covers the skin.", tests: ["Anatomy Scan"], symptoms: ["Hip pain"], image: "assets/fetus.png" },
    20: { development: "Baby is a banana. You're halfway there!", tests: ["Anatomy Scan (Gender reveal possible)"], symptoms: ["Heartburn", "Swelling"], image: "assets/fetus.png" },
    21: { development: "Baby is a carrot. Eyelids are finished.", tests: ["None"], symptoms: ["Braxton Hicks contractions"], image: "assets/fetus.png" },
    22: { development: "Baby is a papaya. Lips and eyebrows are distinct.", tests: ["None"], symptoms: ["Stretch marks", "Protruding belly button"], image: "assets/fetus.png" },
    23: { development: "Baby is a grapefruit. Can sense movement well.", tests: ["None"], symptoms: ["Linea nigra (dark line on belly)"], image: "assets/fetus.png" },
    24: { development: "Baby is an ear of corn. Lungs are developing branches.", tests: ["Glucose Challenge Screening (24-28 weeks)"], symptoms: ["Dry eyes"], image: "assets/fetus.png" },
    25: { development: "Baby is a cauliflower. Fat is being added.", tests: ["Glucose Screening"], symptoms: ["Hemorrhoids", "Constipation"], image: "assets/fetus.png" },
    26: { development: "Baby is a zucchini. Eyes can open and blink.", tests: ["Glucose Screening"], symptoms: ["Insomnia"], image: "assets/fetus.png" },
    27: { development: "Baby is a head of cauliflower. Brain activity increases significantly.", tests: ["Rh factor screening (if Rh negative)"], symptoms: ["Leg cramps", "Backaches"], image: "assets/baby.png" },

    // Weeks 28-40+: Third Trimester
    28: { development: "Baby is an eggplant. Dreaming (REM sleep) occurs.", tests: ["Tdap Vaccine (27-36 weeks)"], symptoms: ["Shortness of breath"], image: "assets/baby.png" },
    29: { development: "Baby is a butternut squash. Muscles and lungs maturing.", tests: ["Kick counts"], symptoms: ["Varicose veins"], image: "assets/baby.png" },
    30: { development: "Baby is a cabbage. Memory is developing.", tests: ["Kick counts"], symptoms: ["Mood swings return"], image: "assets/baby.png" },
    31: { development: "Baby is a coconut. Five senses are fully developed.", tests: ["None"], symptoms: ["Frequent urination"], image: "assets/baby.png" },
    32: { development: "Baby is a jicama. Practicing breathing movements.", tests: ["Bi-weekly checkups start"], symptoms: ["Leaking colostrum"], image: "assets/baby.png" },
    33: { development: "Baby is a pineapple. Immune system is strengthening.", tests: ["None"], symptoms: ["Overheating"], image: "assets/baby.png" },
    34: { development: "Baby is a cantaloupe. Boys' testicles descend.", tests: ["None"], symptoms: ["Blurred vision (watch for preeclampsia)"], image: "assets/baby.png" },
    35: { development: "Baby is a honeydew. Building iron stores.", tests: ["Group B Strep Test (35-37 weeks)"], symptoms: ["Pelvic pressure"], image: "assets/baby.png" },
    36: { development: "Baby is a papaya. Shedding lanugo (fuzzy hair).", tests: ["Weekly checkups start", "Baby positioning check"], symptoms: ["Lightning crotch"], image: "assets/baby.png" },
    37: { development: "Baby is a romaine lettuce. Considered 'early term'.", tests: ["Cervical check (optional)"], symptoms: ["Spotting", "Mucus plug loss"], image: "assets/baby.png" },
    38: { development: "Baby is a winter melon. Vocal cords work.", tests: ["None"], symptoms: ["Nesting instinct"], image: "assets/baby.png" },
    39: { development: "Baby is a watermelon. Skin is pink/newborn color.", tests: ["None"], symptoms: ["Contractions"], image: "assets/baby.png" },
    40: { development: "Baby is a pumpkin. Happy Due Date!", tests: ["Non-stress test (if overdue)"], symptoms: ["Labor signs!"], image: "assets/baby.png" },
    41: { development: "Late term. Still baking!", tests: ["Biophysical Profile"], symptoms: ["Impatience!"], image: "assets/baby.png" },
    42: { development: "Post term.", tests: ["Induction discussion"], symptoms: ["Ready to pop"], image: "assets/baby.png" }
};
