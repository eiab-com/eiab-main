import dayjs, { Dayjs } from "dayjs";

interface BikingAdventure {
  
  title: string;
  imageSrc: string;
  altText: string;
  shortDescription: string;
  longDescription: string;
  startDate: Dayjs | Date | string;
  endDate: Dayjs | Date | string;
  keyHighlights: string[];
  rideDuration: string;
  highestAltitude: string;
  suitableFor: string;
  totalDistance: string;
  startingPoint: string;
  accommodationType: string;
  pickupPoint: string;
  photoGallery: string[];
  bikeModels: string[];
  difficultyLevel: string;
  averageDailyRide: string;
  region: string;
  ridePrice: string;
  pillionPrice: string;
  deposit: string;
  groupSize: string;
  disabled?: boolean;
  infoPackUrl?: string;
  partOfIndia?:'north' | 'south' | 'east'| 'west' | 'northeast' | 'northwest' | 'southeast' | 'southwest';
  state?: string;

  itinerary: {
    day: number;
    title: string;
    distance?: string;
    highlights: string[];
  }[]; // New Itinerary Field
}

const bikingAdventuresData: BikingAdventure[] = [
  {
    
    title: "Spiti Valley Expedition (Bike & Car)",
    state: 'Himachal Pradesh',
    partOfIndia: 'north',
    imageSrc:
      "https://images.pexels.com/photos/12804831/pexels-photo-12804831.jpeg",
    altText: "Spiti Valley Travel Expedition",
    shortDescription:
      "A 9-day travel expedition through Spiti Valley designed for both motorcycle and 4x4 drivers — raw landscapes, high passes and remote villages.",
    longDescription:
      "This Spiti Valley travel expedition is focused on exploration by both two-wheelers and four-wheel-drive vehicles. Over 9 days you’ll traverse dramatic mountain roads, high-altitude passes and isolated settlements while enjoying the flexibility of riding or driving. The route highlights remote villages, ancient monasteries and alpine lakes with ample opportunities for photography, cultural encounters and technical driving/riding on varied surfaces.\n\n\
      The program includes experienced route captains for both bike and car groups, a support vehicle for luggage and rider/driver assistance, mechanical backup, and thoughtfully chosen stops for rest and viewpoint access. Expect daily stretches of technical riding/driving, river crossings and stony terrain — all planned to balance challenge with safe, memorable exploration.",
    startDate: dayjs("2026-08-22T06:00:00"),
    endDate: dayjs("2026-09-01T17:00:00"),
    groupSize: "6-12 riders/drivers",
    infoPackUrl:
      "https://drive.google.com/file/d/1peFIAMJ-KeooIvklLYLffSvgb3SI280P/view?usp=sharing",
    keyHighlights: [
      "Traverse Kinnaur & Spiti landscapes by bike or 4x4",
      "Visit Chitkul — India’s last inhabited roadside village",
      "Explore ancient monasteries: Tabo & Dhankar",
      "Cross the dramatic Chicham suspension bridge",
      "Camp beside Chandra Taal (Moon Lake) or access by short drive",
      "Conquer Kunzum Pass with both riding and driving sections",
      "Route captain, backup vehicle and mechanic support",
    ],
    ridePrice: " £ 2899",
    pillionPrice: " £ 2599",
    deposit: " £ 899",
    rideDuration: "9 days on the road",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced bike & 4x4 drivers",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30844725/pexels-photo-30844725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844715/pexels-photo-30844715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844728/pexels-photo-30844728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844712/pexels-photo-30844712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar (for two-wheelers)",
      "Mahindra Thar / Jeep Compass / similar 4x4 (for four-wheelers)",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Meet the crew and fellow riders/drivers",
          "Vehicle check and briefing for both bike & car groups",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Gentle mountain drive/ride to warm up on twisty roads",
          "Short scenic stops and vehicle checks",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Enter Kinnaur Valley with varied road surfaces",
          "Photo stops along the Baspa River",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Short technical sections suitable for experienced drivers/riders",
          "Explore traditional mountain villages",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "Transition to Spiti’s high-altitude terrain",
          "Visit the 1,000-year-old Tabo Monastery",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Scenic valley traverses and the Chicham bridge viewpoint",
          "Short off-pavement driving/riding sections",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "Local exploration and cultural stops",
          "Visit Hikkim post office — send a postcard",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Cross Kunzum Pass; technical descent to Chandra Taal",
          "Optional overnight camp beside the lake or roadside rest",
        ],
      },
      {
        day: 8,
        title: "Manali Local Day",
        highlights: [
          "Vehicle maintenance window and easy sightseeing",
          "Relaxation and local market walk",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Final scenic stretch along the Beas valley",
          "Trip debrief and farewell",
        ],
      },
    ],
  },
  {
    
    title: "Leh - Ladakh Road & Ride Expedition",
    partOfIndia: 'north',
    state: 'Jammu and Kashmir',
    imageSrc:
      "https://images.pexels.com/photos/5201944/pexels-photo-5201944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Leh - Ladakh Travel Expedition",
    shortDescription:
      "An 11-day high-altitude travel expedition across Ladakh for riders and 4x4 drivers — extreme passes, moonlike landscapes and remote roads.",
    longDescription:
      "This Leh–Ladakh expedition is an exploration-first journey tailored to those who want to experience the high-altitude roads whether on a motorcycle or in a capable 4x4. The itinerary balances acclimatization with challenging ride/drive days over the region’s legendary passes. Expect dusty plains, rocky passes, river fords and long open stretches with jaw-dropping vistas. The support team manages logistics, mechanical assistance and alternate routing for car groups when necessary.",
    startDate: dayjs("2026-09-09T07:00:00"),
    endDate: dayjs("2026-09-19T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1YFNI0mYc8geTUk7fxNz7TjshjSsfaf1G/view?usp=sharing",
    disabled: false,
    keyHighlights: [
      "Cross Khardung La & Umling La with both bike and car capabilities",
      "Drive/ride through Nubra Valley and Pangong’s shoreline",
      "Experience stark high-altitude landscapes and clear night skies",
      "Visit remote monasteries and small settlements along the route",
      "Desert-like valleys and unique geological features",
      "Backup vehicle, mechanic support and experienced road captains",
    ],
    groupSize: "6-12 riders/drivers",
    ridePrice: " £ 3355",
    pillionPrice: " £ 2955",
    deposit: " £ 955",
    rideDuration: "11 days on the road",
    highestAltitude: "19,024 ft (Umling La Pass)",
    suitableFor: "Intermediate to advanced bike & 4x4 explorers",
    totalDistance: "1400 miles",
    startingPoint: "Leh",
    accommodationType: "Hotels,Homestays & Camps",
    pickupPoint: "Leh Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30844720/pexels-photo-30844720.jpeg",
      "https://images.pexels.com/photos/30743695/pexels-photo-30743695/free-photo-of-man-enjoying-scenic-mountain-lake-view.jpeg",
      "https://images.pexels.com/photos/30743694/pexels-photo-30743694.jpeg",
      "https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30743691/pexels-photo-30743691/free-photo-of-aerial-view-of-thiksey-monastery-in-ladakh-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar (motorcycles)",
      "Mahindra Thar / Fortuner / similar (4x4 support & driver options)",
    ],
    difficultyLevel: "Moderate to Challenging",
    averageDailyRide: "150-250 km",
    region: "North",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Acclimatization",
        highlights: [
          "Acclimatization walk and light local exploration",
          "Vehicle checks and fuel planning",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        highlights: [
          "Visit Shanti Stupa and Leh Market",
          "Short scenic loops to aid acclimatization",
        ],
      },
      {
        day: 3,
        title: "Leh → Kargil",
        distance: "135 miles",
        highlights: [
          "High-altitude riding/driving through passes like Fotu La",
          "Historic stops including Kargil War Memorial",
        ],
      },
      {
        day: 4,
        title: "Kargil → Padum",
        distance: "190 miles",
        highlights: [
          "Long road day into Zanskar region with varied surfaces",
          "Manage rest and refuelling for both bikes and cars",
        ],
      },
      {
        day: 5,
        title: "Padum Local",
        highlights: [
          "Short local loops and cultural visits to monasteries",
          "Vehicle maintenance window",
        ],
      },
      {
        day: 6,
        title: "Padum → Lamayuru",
        distance: "125 miles",
        highlights: [
          "Iconic ‘moonland’ approach and roadside viewpoints",
        ],
      },
      {
        day: 7,
        title: "Lamayuru → Nubra Valley",
        distance: "175 miles",
        highlights: [
          "Cross Khardung La en route to Nubra",
          "Sand dunes and valley drives/rides",
        ],
      },
      {
        day: 8,
        title: "Nubra → Pangong Lake",
        distance: "170 miles",
        highlights: [
          "Shyok valley stretches and lakeside camp options",
          "Evening by the lake with clear sky star viewing",
        ],
      },
      {
        day: 9,
        title: "Pangong → Hanle",
        distance: "200 miles",
        highlights: [
          "Long drive/ride to remote Hanle for unique landscapes",
          "Optional astronomy observatory visit (timed)",
        ],
      },
      {
        day: 10,
        title: "Hanle → Umling La → Hanle",
        distance: "130 miles (round trip)",
        highlights: [
          "Day trip to Umling La — experience the world’s highest motorable road",
        ],
      },
      {
        day: 11,
        title: "Hanle → Leh",
        distance: "200 miles",
        highlights: [
          "Return to Leh and trip closure",
          "Final maintenance checks and debrief",
        ],
      },
    ],
  },
  {
    
    title: "Northeast India Road & Ride",
    partOfIndia: 'northeast',
    state: 'Assam & Meghalaya',
    imageSrc:
      "https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg",
    altText: "Northeast India Travel Expedition",
    shortDescription:
      "A 10-day travel route across Assam and Meghalaya tailored for both bikes and capable cars — waterfalls, clear rivers and cultural stops.",
    longDescription:
      "The Northeast India Road & Ride expedition is an immersive travel experience focused on exploring lush hills, dramatic waterfalls and cultural highlights by motorcycle or car. Over 10 days you’ll ride/drive scenic sashaying roads, take short off-road detours where safe, and visit iconic natural sites like Dawki’s Umngot River and the living root bridges region. The itinerary emphasises flexible exploration — short drives/rides between highlights and time to soak in local culture.",
    startDate: dayjs("2026-10-10T06:00:00"),
    endDate: dayjs("2026-10-20T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1BIuGQJrGoQ-BL3ewNu24rOBsNtS0lsts/view?usp=drive_link",
    ridePrice: " £ 3399",
    pillionPrice: " £ 2799",
    deposit: " £ 995",
    groupSize: "6-10 riders/drivers",
    keyHighlights: [
      "Ride/drive to Dawki’s crystal-clear Umngot River",
      "Visit Mawlynnong — Asia’s cleanest village",
      "Explore waterfalls & limestone caves around Cherrapunji",
      "Optional wildlife viewing near Kaziranga (car-friendly approach)",
      "Highland passes and scenic valley driving/riding",
      "Experienced local guides and vehicle support",
    ],
    rideDuration: "10 days on the road",
    highestAltitude: "15,200 ft (Bumla Pass)",
    suitableFor: "Intermediate to experienced bike & 4x4 explorers",
    totalDistance: "850 miles",
    startingPoint: "Guwahati",
    accommodationType: "Hotels, homestays & guesthouses",
    pickupPoint: "Guwahati Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30277768/pexels-photo-30277768/free-photo-of-scenic-waterfall-in-lush-tropical-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/19469039/pexels-photo-19469039/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Toyota Fortuner / Tata Safari / similar for scenic drives",
    ],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "100-150 miles",
    region: "Northeast",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        highlights: [
          "Introductory briefing and vehicle checks",
          "Short city loops and local market visit",
        ],
      },
      {
        day: 2,
        title: "Guwahati → Cherrapunji",
        distance: "100 miles",
        highlights: [
          "Drive/ride into Meghalaya’s misty hills",
          "Visit Elephant Falls and other scenic stops",
        ],
      },
      {
        day: 3,
        title: "Cherrapunji → Shillong",
        distance: "40 miles",
        highlights: [
          "Dawki day trip to Umngot River",
          "Mawlynnong village visit",
        ],
      },
      {
        day: 4,
        title: "Shillong → Tezpur (via Kaziranga)",
        distance: "160 miles",
        highlights: [
          "Optional vehicle-based wildlife approach to Kaziranga",
          "Scenic river valley stretches",
        ],
      },
      {
        day: 5,
        title: "Tezpur → Dirang",
        distance: "120 miles",
        highlights: [
          "Valley roads and short cultural stops en route",
        ],
      },
      {
        day: 6,
        title: "Dirang → Tawang",
        distance: "90 miles",
        highlights: [
          "Approach to Tawang with highland vistas",
          "Local market and monastery visit",
        ],
      },
      {
        day: 7,
        title: "Tawang & Bumla Pass day",
        distance: "35 miles",
        highlights: [
          "Short ride/drive to Bumla Pass (border viewpoint)",
          "Local lakes and plateau exploration",
        ],
      },
      {
        day: 8,
        title: "Tawang → Bomdilla",
        distance: "120 miles",
        highlights: [
          "Scenic valley driving/riding and historical stops",
        ],
      },
      {
        day: 9,
        title: "Bomdilla → Guwahati",
        distance: "180 miles",
        highlights: [
          "Long scenic return with relaxed pace",
        ],
      },
      {
        day: 10,
        title: "Departure from Guwahati",
        highlights: [
          "Wrap-up, short sightseeing or shopping",
          "Drop-off at Guwahati Airport",
        ],
      },
    ],
  },
  {
    
    title: "Leh - Ladakh Road & Ride (Future Departure)",
    partOfIndia: 'north',
    state: 'Jammu and Kashmir',

    imageSrc:
      "https://images.pexels.com/photos/5201944/pexels-photo-5201944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Leh - Ladakh Travel Expedition (2027)",
    shortDescription:
      "Planned 11-day road & ride expedition for 2027 — identical exploration focus as our Leh–Ladakh program, open to both bike and 4x4 participants.",
    longDescription:
      "This is a future-dated Leh–Ladakh travel expedition offering the same high-altitude exploration for both motorcycle riders and 4x4 drivers. The program is structured to offer acclimatisation, long scenic drives/rides, and access to high passes while providing mechanical and medical backup. Ideal for those who prefer the freedom of self-drive or guided motorcycle travel in one of India’s most dramatic regions.",
    startDate: dayjs("2027-09-09T07:00:00"),
    endDate: dayjs("2027-09-19T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1YFNI0mYc8geTUk7fxNz7TjshjSsfaf1G/view?usp=sharing",
    keyHighlights: [
      "High-altitude roads suitable for both bikes and 4x4s",
      "Remote valley exploration and lakeside stops",
      "Cultural visits to key monasteries along the route",
      "Professional support and route management",
    ],
    ridePrice: " £ 3355",
    pillionPrice: " £ 2955",
    deposit: " £ 955",
    groupSize: "6-12 riders/drivers",
    rideDuration: "11 days on the road",
    highestAltitude: "19,024 ft (Umling La Pass)",
    suitableFor: "Intermediate to advanced bike & 4x4 explorers",
    totalDistance: "1400 miles",
    startingPoint: "Leh",
    accommodationType: "Hotels,Homestays & Camps",
    pickupPoint: "Leh Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30844720/pexels-photo-30844720.jpeg",
      "https://images.pexels.com/photos/30743695/pexels-photo-30743695/free-photo-of-man-enjoying-scenic-mountain-lake-view.jpeg",
      "https://images.pexels.com/photos/30743694/pexels-photo-30743694.jpeg",
      "https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30743691/pexels-photo-30743691/free-photo-of-aerial-view-of-thiksey-monastery-in-ladakh-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Mahindra Thar / Jeep Compass / similar for 4x4 groups",
    ],
    difficultyLevel: "Moderate",
    averageDailyRide: "150-250 km",
    region: "North",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Acclimatization in Leh",
        highlights: [
          "Acclimatization and vehicle prep",
          "Local light loops for altitude adjustment",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        highlights: [
          "Short scenic routes and cultural visits",
        ],
      },
      {
        day: 3,
        title: "Leh → Kargil",
        distance: "135 miles",
        highlights: [
          "Long pass crossings and historic stops",
        ],
      },
      {
        day: 4,
        title: "Kargil → Padum",
        distance: "190 miles",
        highlights: [
          "Zanskar approaches and varied road conditions",
        ],
      },
      {
        day: 5,
        title: "Padum Local",
        highlights: [
          "Rest day and local exploration",
        ],
      },
      {
        day: 6,
        title: "Padum → Lamayuru",
        distance: "125 miles",
        highlights: [
          "Unique landscapes en route to Lamayuru",
        ],
      },
      {
        day: 7,
        title: "Lamayuru → Nubra",
        distance: "175 miles",
        highlights: [
          "Cross Khardung La and experience dune valleys",
        ],
      },
      {
        day: 8,
        title: "Nubra → Pangong",
        distance: "170 miles",
        highlights: [
          "Lakeside evening and camp/park options",
        ],
      },
      {
        day: 9,
        title: "Pangong → Hanle",
        distance: "200 miles",
        highlights: [
          "Remote desert-plateau driving/riding",
        ],
      },
      {
        day: 10,
        title: "Hanle → Umling La → Hanle",
        distance: "130 miles (round trip)",
        highlights: [
          "Day trip to Umling La for high-altitude experience",
        ],
      },
      {
        day: 11,
        title: "Hanle → Leh",
        distance: "200 miles",
        highlights: [
          "Return leg and trip closure",
        ],
      },
    ],
  },
  {
    
    title: "Snow White Spiti — Road & Ride",
    partOfIndia: 'north',
    state: 'Himachal Pradesh',
    imageSrc:
      "https://images.pexels.com/photos/23522680/pexels-photo-23522680/free-photo-of-key-gompa-monastery-in-mountains-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Snow White Spiti Travel Expedition",
    shortDescription:
      "A winter-flavored Spiti travel expedition for both bikes and 4x4s — snow-dusted passes, stark vistas and technical driving/riding days.",
    longDescription:
      "Snow White Spiti is a version of our Spiti itinerary that highlights higher-elevation scenery and cooler-season conditions while keeping the same travel-first approach for bikes and four-wheel vehicles. The experience focuses on route technique for snow-dusted stretches, scenic outlooks and short exploratory runs to iconic viewpoints. Support vehicles and mechanical backup are included to ensure safe progress through more fragile seasonal conditions.",
    startDate: dayjs("2027-04-17T06:00:00"),
    endDate: dayjs("2027-04-27T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1peFIAMJ-KeooIvklLYLffSvgb3SI280P/view?usp=sharing",
    keyHighlights: [
      "Explore Spiti’s winter-scrubbed valleys by bike or 4x4",
      "Visit Chitkul and highland viewpoints",
      "Tabo & Dhankar monasteries with crisp winter light",
      "Cross Chicham bridge and high passes with support",
      "Optional lakeside stop at Chandra Taal",
      "Route captain, backup vehicle and trained mechanics",
    ],
    ridePrice: " £ 2899",
    pillionPrice: " £ 2599",
    deposit: " £ 899",
    groupSize: "6-12 riders/drivers",
    rideDuration: "9 days on the road",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced bike & 4x4 explorers",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30844725/pexels-photo-30844725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844715/pexels-photo-30844715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844728/pexels-photo-30844728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844712/pexels-photo-30844712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Mahindra Thar / Tata Harrier / similar (4x4 winter-capable)",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Meet the crew and cross-check vehicle winter kit",
          "Briefing on winter driving/riding techniques",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Warm-up stretch on twisty roads",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Scenic ascent into colder valley conditions",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Short technical sections and village explorations",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "High-altitude approach and monastery visits",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Chicham bridge viewpoint and route-specific stops",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "Local culture and optional short off-road sections",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Kunzum Pass crossing and lakeside stop",
        ],
      },
      {
        day: 8,
        title: "Manali Easy Day",
        highlights: [
          "Vehicle checks, rest and light sightseeing",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Final transit and trip wrap-up",
        ],
      },
    ],
  },
  {
    
    title: "Spiti Valley — Multi-vehicle Departure",
    partOfIndia: 'north',
    state: 'Himachal Pradesh',
    imageSrc:
      "https://images.pexels.com/photos/12804831/pexels-photo-12804831.jpeg",
    altText: "Spiti Valley Travel Expedition (2027)",
    shortDescription:
      "A repeat-dated 9-day travel expedition focusing on both motorcycles and 4x4 vehicles with the same exploration-first approach.",
    longDescription:
      "This entry is a later-dated departure of our Spiti travel expedition, identical in design to the other Spiti programs but scheduled as an additional season departure. Ideal for those who want the same high-altitude exploration experience with flexible vehicle choices—ride or drive depending on preference.",
    startDate: dayjs("2027-08-22T06:00:00"),
    endDate: dayjs("2027-09-01T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1peFIAMJ-KeooIvklLYLffSvgb3SI280P/view?usp=sharing",
    keyHighlights: [
      "Multiple departure dates for bike and 4x4 travellers",
      "Kunzum Pass and Chandra Taal access",
      "Cultural stops and scenic valley drives/rides",
      "Full logistical and mechanical support",
    ],
    ridePrice: " £ 2899",
    pillionPrice: " £ 2599",
    deposit: " £ 899",
    groupSize: "6-12 riders/drivers",
    rideDuration: "9 days on the road",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced bike & 4x4 explorers",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30844725/pexels-photo-30844725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844715/pexels-photo-30844715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844728/pexels-photo-30844728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/30844712/pexels-photo-30844712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Mahindra Thar / Jeep Compass / similar (4x4)",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Check-in, meet crew and confirm vehicle readiness",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Easy scenic transit and warm-up",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Valley transit with photography stops",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Village visits and short technical stretches",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "Highland approach and heritage monastery visit",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Bridge crossing and valley viewpoints",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "Local exploration with optional micro-routes",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Pass crossing and lakeside stop",
        ],
      },
      {
        day: 8,
        title: "Manali Easy Day",
        highlights: [
          "Maintenance, rest and local strolls",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Final transit and farewell",
        ],
      },
    ],
  },
  {
    
    title: "Northeast India Road & Ride (Alternate)",
    partOfIndia: 'northeast',
    state: 'Assam & Meghalaya',
    imageSrc:
      "https://images.pexels.com/photos/14137630/pexels-photo-14137630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Northeast India Travel Expedition (Alternate)",
    shortDescription:
      "Alternate-dated 10-day travel route across Assam & Meghalaya for bikes and cars, covering waterfalls, clear rivers and cultural stops.",
    longDescription:
      "An alternate departure of the Northeast Road & Ride route with the same travel-first focus — accessible by both motorcycles and four-wheel vehicles. Expect winding roads, scenic river crossings and local cultural touchpoints. The program supports mixed vehicle groups and emphasizes safe, scenic exploration over long, technical treks.",
    startDate: dayjs("2027-10-10T06:00:00"),
    endDate: dayjs("2027-10-20T17:00:00"),
    infoPackUrl:
      "https://drive.google.com/file/d/1BIuGQJrGoQ-BL3ewNu24rOBsNtS0lsts/view?usp=sharing",
    keyHighlights: [
      "Dawki Umngot River and Mawlynnong village",
      "Cherrapunji waterfalls and viewpoints",
      "Kaziranga approach for wildlife by car-friendly access",
      "Local cultural experiences and short technical routes",
    ],
    ridePrice: " £ 3399",
    pillionPrice: " £ 2799",
    deposit: " £ 995",
    groupSize: "6-10 riders/drivers",
    rideDuration: "10 days on the road",
    highestAltitude: "15,200 ft (Bumla Pass)",
    suitableFor: "Intermediate to experienced bike & 4x4 explorers",
    totalDistance: "850 miles",
    startingPoint: "Guwahati",
    accommodationType: "Hotels, homestays & guesthouses",
    pickupPoint: "Guwahati Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30277768/pexels-photo-30277768/free-photo-of-scenic-waterfall-in-lush-tropical-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/19469039/pexels-photo-19469039/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Toyota Fortuner / Mahindra Thar for 4x4 groups",
    ],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "100-150 miles",
    region: "Northeast",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        highlights: [
          "Meet-up and vehicle briefing",
        ],
      },
      {
        day: 2,
        title: "Guwahati → Cherrapunji",
        distance: "100 miles",
        highlights: [
          "Waterfall runs and viewpoint stops",
        ],
      },
      {
        day: 3,
        title: "Cherrapunji → Shillong",
        distance: "40 miles",
        highlights: [
          "Dawki & Mawlynnong visits",
        ],
      },
      {
        day: 4,
        title: "Shillong → Tezpur (via Kaziranga)",
        distance: "160 miles",
        highlights: [
          "Kaziranga optional approach (car-friendly)",
        ],
      },
      {
        day: 5,
        title: "Tezpur → Dirang",
        distance: "120 miles",
        highlights: [
          "Valley stretches and short detours",
        ],
      },
      {
        day: 6,
        title: "Dirang → Tawang",
        distance: "90 miles",
        highlights: [
          "Approach to Tawang with scenic roads",
        ],
      },
      {
        day: 7,
        title: "Tawang & Bumla Pass",
        distance: "35 miles",
        highlights: [
          "Short border-proximate drive/ride to Bumla",
        ],
      },
      {
        day: 8,
        title: "Tawang → Bomdilla",
        distance: "120 miles",
        highlights: [
          "Historic stops and valley views",
        ],
      },
      {
        day: 9,
        title: "Bomdilla → Guwahati",
        distance: "180 miles",
        highlights: [
          "Long transit back to base",
        ],
      },
      {
        day: 10,
        title: "Departure from Guwahati",
        highlights: [
          "Final wrap-up and airport drop-off",
        ],
      },
    ],
  },
  {
    
    title: "South India Road & Ride Expedition",
    partOfIndia: 'south',
    state: 'Tamil Nadu & Kerala',
    imageSrc:
      "https://images.pexels.com/photos/1576858/pexels-photo-1576858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "South India Travel Expedition",
    shortDescription: "A 10-day south India travel expedition tailored for both two- and four-wheeled explorers.",
    longDescription:
      "This South India Road & Ride expedition focuses on coastal and hill routes across Tamil Nadu and Kerala that are enjoyable by motorcycle and by car. Expect coastal highways, winding ghats, spice-scented towns and backcountry roads that encourage slow exploration. The itinerary is vehicle-agnostic: two-wheel riders will enjoy twisty ghats and coastal stretches, while 4x4 drivers can take optional off-road detours and scenic picnic stops.",
    startDate: dayjs("2027-10-20T17:00:00"),
    endDate: dayjs("2027-10-20T17:00:00"),
    disabled: false,
    keyHighlights: [
      "Coastal highways and scenic ghats suited to bikes and cars",
      "Cultural stops in temple towns and spice routes",
      "Backcountry detours and beachside vantage points",
      "Local food experiences and short guided loops",
    ],
    ridePrice: " ££££",
    pillionPrice: " ££££",
    deposit: " ££££",
    groupSize: "6-10 riders/drivers",
    rideDuration: "10 days on the road",
    highestAltitude: "( Details to be updated ) ",
    suitableFor: "Intermediate to experienced bike & car explorers",
    totalDistance: "850 miles",
    startingPoint: "Chennai (or flexible on request)",
    accommodationType: "Hotels, homestays & guesthouses",
    pickupPoint: "Chennai Airport",
    photoGallery: [
      "https://images.pexels.com/photos/30277768/pexels-photo-30277768/free-photo-of-scenic-waterfall-in-lush-tropical-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/19469039/pexels-photo-19469039/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Toyota Innova / Mahindra Scorpio / similar for group drives",
    ],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "100-150 miles",
    region: "South",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Chennai",
        highlights: [
          "Meet & greet, vehicle checks and briefing",
        ],
      },
      {
        day: 2,
        title: "Chennai → Pondicherry",
        distance: "100 miles",
        highlights: [
          "Coastal highway ride/drive with cultural stops",
        ],
      },
      {
        day: 3,
        title: "Pondicherry → Thanjavur",
        distance: "150 miles",
        highlights: [
          "Temple town visits and local cuisine stops",
        ],
      },
      {
        day: 4,
        title: "Thanjavur → Madurai",
        distance: "120 miles",
        highlights: [
          "Scenic inland stretches and historic sites",
        ],
      },
      {
        day: 5,
        title: "Madurai → Munnar",
        distance: "140 miles",
        highlights: [
          "Ghat roads and tea-plantation viewpoints",
        ],
      },
      {
        day: 6,
        title: "Munnar Local",
        highlights: [
          "Short scenic loops and viewpoint visits",
        ],
      },
      {
        day: 7,
        title: "Munnar → Kochi",
        distance: "160 miles",
        highlights: [
          "Coastal approach and harbor-side exploration",
        ],
      },
      {
        day: 8,
        title: "Kochi Local",
        highlights: [
          "Vehicle maintenance window and city exploration",
        ],
      },
      {
        day: 9,
        title: "Kochi → Varkala",
        distance: "120 miles",
        highlights: [
          "Beachside ride/drive with sunset viewpoints",
        ],
      },
      {
        day: 10,
        title: "Departure from Trivandrum",
        highlights: [
          "Final wrap and airport drop-off",
        ],
      },
    ],
  },
];


export default bikingAdventuresData;

// Why Us Section - Updated with biking focus
const whyUsCardData = [
  {
    title: "Curated Riding Routes",
    description:
      "Routes perfected over a decade for the ultimate biking experience",
    imageSrc:
      "https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Curated Routes Icon",
  },
  {
    title: "Premium Adventures",
    description: `Royal Enfield Himalayan 411/450 Royal Enfield Bullet 350/500`,
    imageSrc:
      "https://images.pexels.com/photos/8425811/pexels-photo-8425811.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Adventure Bikes Icon",
  },
  {
    title: "Rider Support",
    description:
      "24/7 support with expert mechanics, medical backup & riding guides",
    imageSrc:
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200",
    altText: "Rider Support Icon",
  },
{
  title:"4x4 Vehicle [ NEW ! ]",
  description:'We provide 4x4 vehicles for your journey',
  imageSrc:'https://images.pexels.com/photos/34716428/pexels-photo-34716428.jpeg',
  altText:'4x4 Vehicle Icon',

}
];

const testimonials = [
  {
    id: 1,
    name: "Vinayak and Samarth",
    location: "Chester and Oxford",
    text: "As the co-founders of this motorcycle tour company, we have a passion for riding that spans over 8 years. With this experience, we create unique and unforgettable biking journeys that showcase the best of India.",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg?auto=compress&cs=tinysrgb&w=1200", // Update path
  },

  {
    id: 6,
    name: "Julian Withers",
    location: "Northwich",
    text: "An extraordinary first experience in India! The team's historical insights and problem-solving made our challenging off-road adventure unforgettable. The Royal Enfield 450s handled beautifully.",
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//WhatsApp%20Image%202026-02-25%20at%208.58.57%20PM.jpeg", // Update path
  },
  {
    id: 7,
    name: "Brent Jackson",
    location: "Oxford",
    text: "My best motorcycle tour yet! Flawless execution with authentic experiences like home-cooked family dinners. Expert guides revealed hidden gems in every city we explored.",
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//e7f560a0-8f07-49fa-99f9-5ccccfaf1468.jpeg", // Update path
  },
];

const stories = [
  {
    id: 6,
    name: "Julian Withers",
    location: "Northwich",
    text: `
    I am writing to Thank Explore India and beyond for such a wonderful trip .
    It was my first time to India and not knowing to much about the location we were riding through 
    it was an over and beyond my expectations. The staff at India  and beyond were great friendly and 
    very helpful explaining the history of  each reign as we rode through it , and  solved any problems which arose .
    The Royal Enfield 450 Himalayan bikes were great . 
    The roads at times were challenging but great fun. 
    If you like off road ( tracks)  and a good challenge this is for you .   
    `,
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//WhatsApp%20Image%202026-02-25%20at%208.58.57%20PM.jpeg", // Update path
  },
  {
    id: 7,
    name: "Brent Jackson",
    location: "Oxford",
    text: `I am now back from my tour with explore India and beyond amd I have to say it was my best motorcycle tour yet. I have done the Ladak region before and was excited to be going with this new company.
The tour leader and guide and his assistant we excellent and very caring and helpful.
We had no breakdowns and not even a flat tyre ! The tour went smoothly and the places we stayed I know without the guides I would never have found.
Having dinner with an Indian family in their house with home cooked food on a wood stove was just one of the many authentic highlights. 
The pace was good and the road were challenging but not too much. 
Lunches on the road were also fabulous and full of new experiences. 
When we hit the bigger cities were treated to tours and insight again something that I ha e not experienced before. 
I can highly reccomend this company and I will be travelling with them again`,
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//e7f560a0-8f07-49fa-99f9-5ccccfaf1468.jpeg", // Update path
  },
];
export { whyUsCardData, bikingAdventuresData, testimonials, stories };
