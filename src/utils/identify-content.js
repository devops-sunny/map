export const identifyContent = (name, a) => {
  if (name == "Bihar OFC") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      "</span></p>"
    );
  }
  if (name == "Mobile Tower" || name == "Golden Corridor" || name == "River") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:<span style="color:black">' +
      a.type +
      "</span></p>"
    );
  }
  if (name == "Uncovered Villages") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:<span style="color:black">' +
      a.vilnam_soi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.tname +
      "</span></p>"
    );
  }

  if (name == "Water Areodroms") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px"> Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      "</span></p>"
    );
  }
  if (name == "Helipad") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px"> Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Layer:<span style="color:black">' +
      a.layer +
      "</span></p>"
    );
  }
  if (name == "All") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      "</span></p>"
    );
  }

  if (name == "AirPort") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (name == "Cluster") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.comp_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.tname +
      "</span></p>"
    );
  }

  if (name == "MultiModel(Telecom)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      "</span></p>"
    );
  }

  if (name == "Covered Area") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gid:<span style="color:black">' +
      a.gid +
      "</span></p>"
    );
  }
  if (name == "MultiModel(Railway)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.NAME +
      "</span></p>"
    );
  }
  if (name == "MultiModel(Aviation)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px"> Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Layer:<span style="color:black">' +
      a.layer +
      "</span></p>"
    );
  }

  if (name == "OFC") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.vname +
      "</span></p>"
    );
  }
  if (name == "UnCovered Area") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Forest Layer") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.layer_name +
      "</span></p>"
    );
  }

  if (name == "Gujarat") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Forest Sno:<span style="color:black">' +
      a.f_sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Forest Type:<span style="color:black">' +
      a.f_type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Forest Area (ha):<span style="color:black">' +
      a.fg_area_ha +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Section:<span style="color:black">' +
      a.section +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Division:<span style="color:black">' +
      a.division +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Talukla:<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.vname +
      "</span></p>"
    );
  }

  if (name == "Plots") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plots Category:<span style="color:black">' +
      a.plotcat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.st_name +
      "</span></p>"
    );
  }

  if (name == "Ahemdabad" || name == "Banaskantha" || name == "Patan") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }
  if (
    name == "Capital Cities" ||
    name == "Bangladesh Boundary" ||
    name == "Myanmar Boundary"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "Aspirational District") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name11 +
      "</span></p>"
    );
  }
  if (name == "UP Defence Corridor" || name == "TN Defence Corridor") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (
    name == "Medical 2014" ||
    name == "Pharma 2014" ||
    name == "Medical-Pharma 2020"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "Mega Food Parks 2014" ||
    name == "Mega Food Parks 2020" ||
    name == "Mega Food Parks 2024" ||
    name == "APC-2024"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "Fishing Seafood Cluster 2014" ||
    name == "Fishing Seafood Cluster 2020" ||
    name == "Fishing Seafood Cluster 2024"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      "</span></p>"
    );
  }

  if (
    name == "Delhi Mumbai Industrial Corridor" ||
    name == "Amritsar Kolkata Industrial Corridor" ||
    name == "East Coast Economic Corridor" ||
    name == "Vizag Chennai Industrial Corridor" ||
    name == "Chennai Bengaluru Industrial Corridor" ||
    name == "Extension of CBIC to Kochi via Coimbatore" ||
    name == "Hyderabad Bengaluru Industrial Corridor" ||
    name == "Bengaluru Mumbai Industrial Corridor" ||
    name == "Hyderabad Warangal Industrial Corridor" ||
    name == "Hyderabad Nagpur Industrial Corridor" ||
    name == "Delhi Nagpur Industrial Corridor" ||
    name == "Phase I" ||
    name == "Phase II" ||
    name == "Phase III" ||
    name == "Phase IV"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "Electronic Manufacturing Clusters 2014" ||
    name == "Electronic Manufacturing Clusters 2020" ||
    name == "Electronic Manufacturing Clusters 2024"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "SEZ 2020" ||
    name == "SEZ 2024" ||
    name == "2020" ||
    name == "Drainage" ||
    name == "Water Aerodromes"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "NHAI 2014" ||
    name == "2020" ||
    name == "Sea Route" ||
    name == "Power Plant" ||
    name == "Railway Blockstation "
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  }

  if (name == "Railway Yard ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Division:<span style="color:black">' +
      a.division +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Ministry_n:<span style="color:black">' +
      a.ministry_n +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Zone:<span style="color:black">' +
      a.zone +
      "</span></p>"
    );
  }

  if (name == "Airport Location") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  }
  if (name == "Airport Area") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  }

  if (name == "Waterways layer") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.nationalwa +
      "</span></p>"
    );
  }
  if (name == "Traffic Survey NHAI") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      "</span></p>"
    );
  }
  if (name == "Waterbody") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      "</span></p>"
    );
  }

  if (name == "Port") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">PortName:<span style="color:black">' +
      a.port +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:<span style="color:black">' +
      a.type_of_do +
      "</span></p>"
    );
  }

  if (name == "Railway Land") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.locality +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">MinistryName:<span style="color:black">' +
      a.ministry_name +
      "</span></p>"
    );
  }

  if (name == "Gauge Conversion") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">state:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.name_of_project +
      "</span></p>"
    );
  }

  if (
    name == "Waterways Line2014" ||
    name == "Waterways Line2020" ||
    name == "Waterways Line2024" ||
    name == "Crude Line" ||
    name == "Corridors carrying - Cement" ||
    name == "Corridors carrying - Coal" ||
    name == "Waterways Point2020" ||
    name == "Waterways Point2024" ||
    name == "Waterways Point2014" ||
    name == "MultiModel(Port)"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (
    name == "Airports 2014" ||
    name == "Airports 2020" ||
    name == "Heliports 2020" ||
    name == "Airports 2024" ||
    name == "Heliports 2024" ||
    name == "Aerodromes" ||
    name == "Greenfield Airports"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (
    name == "Major Ports 2014" ||
    name == "Minor Ports 2014" ||
    name == "Minor Ports 2020" ||
    name == "Major Ports 2024" ||
    name == "Minor Ports 2024" ||
    name == "Port Led 2014" ||
    name == "Port Led 2020" ||
    name == "Port Led 2024" ||
    name == "Sagarmala"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "Kaladan Project" ||
    name == "No of villages without mobile Services" ||
    name == "Operational Till 2014" ||
    name == "Additional Pipeline by 2020" ||
    name == "Under Construction 2024"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "Network Line 2014 " ||
    name == "Network Line 2020 " ||
    name == "Network Line 2024 " ||
    name == "Solar Parks"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (name == "Haryana Orbital Rail Project (121.7 km)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ObjectId:<span style="color:black">' +
      a.objectid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Shape_Leng:<span style="color:black">' +
      a.shape_leng +
      "</span></p>"
    );
  }

  if (name == "Vertical clearance above flood level") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state_name +
      "</span></p>"
    );
  }

  if (name == "Industry Park") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.park_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.st_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">DistrictName:<span style="color:black">' +
      a.dist_name +
      "</span></p>"
    );
  }

  if (name == "Block Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">BName:<span style="color:black">' +
      a.blockname +
      "</span></p>"
    );
  }

  if (name == "Forest") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (name == "Saltpan") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SaltWork:<span style="color:black">' +
      a.salt_work +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">village:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Monument") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">HeritageType:<span style="color:black">' +
      a.heritagetype +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">village:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Wasteland") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }

  if (name == "Airport") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">village:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Watershed") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Express way & Doubling of Railway line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district_n +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      "</span></p>"
    );
  }

  if (name == "Godown") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Organiza:<span style="color:black">' +
      a.organiza_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Locality:<span style="color:black">' +
      a.locality +
      "</span></p>"
    );
  }
  if (name == "Logistics Park") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sr:<span style="color:black">' +
      a.Sr +
      "</span></p>"
    );
  }

  if (name == "Warehouse") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Ministry:<span style="color:black">' +
      a.ministry_n +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Locality:<span style="color:black">' +
      a.locality +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district_n +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">taluka_nam:<span style="color:black">' +
      a.taluka_nam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Villagenam:<span style="color:black">' +
      a.villagenam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Organiza:<span style="color:black">' +
      a.organiza_2 +
      "</span></p>"
    );
  }

  if (name == "APMC E-naam Mandi") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mandli Name:<span style="color:black">' +
      a.mandli_nam +
      "</span></p>"
    );
  }

  if (name == "Steel Plant ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (name == "Block Boundary CMIS" || name == "CMSP Blocks") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">BlockName:<span style="color:black">' +
      a.blockname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field:<span style="color:black">' +
      a.coalfieldn +
      "</span></p>"
    );
  }

  if (name == "Coal Field CMIS " || name == "Land Reclamation CMIS ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field:<span style="color:black">' +
      a.coalfield +
      "</span></p>"
    );
  }

  if (name == "National Highway " || name == "Economic Corridor logistic") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "State Highway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.state_name +
      "</span></p>"
    );
  }

  if (name == "National Corridor ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      "</span></p>"
    );
  }

  if (name == "Toll Plaza ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">TollName:<span style="color:black">' +
      a.tollplazan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ProjectName:<span style="color:black">' +
      a.project_na +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">TallCollection:<span style="color:black">' +
      a.tollcollec +
      "</span></p>"
    );
  }

  if (
    name == "Metro -Banglore" ||
    name == "Metro-Pune" ||
    name == "Railway Station"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">StateName:<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  }

  if (
    name == "NHAI 2014" ||
    name == "2020" ||
    name == "NEIP" ||
    name == "Railway Line"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "WORK COMPLETED 2014-2020" ||
    name == "Rail 2020" ||
    name == "ONGOING WORK-2024" ||
    name == "International Rail"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (
    name == "NEIP" ||
    name == "North South DFC" ||
    name == "East Coast DFC" ||
    name == "FEEDER ROUTES OF IR"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "Expressways") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Corridor:<span style="color:black">' +
      a.corridor +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length km:<span style="color:black">' +
      a.leng_km +
      "</span></p>"
    );
  }

  if (name == "International Road (via Bangladesh)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }

  if (name == "NSEW2014" || name == "Economic Corridor") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">National Corridor:<span style="color:black">' +
      a.corridor_t +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Alignment:<span style="color:black">' +
      a.alignment +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length(kms):<span style="color:black">' +
      a.leng_km +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Implementation Agency:<span style="color:black">' +
      a.impleagenc +
      "</span></p>"
    );
  } else if (name == "MMLP") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Agency:<span style="color:black">' +
      a.imp_agen +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Landstatus:<span style="color:black">' +
      a.landsatus +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">NH:<span style="color:black">' +
      a.proxi_nh +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Rail:<span style="color:black">' +
      a.prox_rail +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Airport:<span style="color:black">' +
      a.prox_airpo +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port:<span style="color:black">' +
      a.prox_port +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Brief Status:<span style="color:black">' +
      a.brifstatus +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Remarks:<span style="color:black">' +
      a.remarks +
      "</span></p>"
    );
  } else if (
    name == "Rail 2020" ||
    name == "Metro Rail" ||
    name == "Hariyana Orbital Rail Project (121.7 km)"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  } else if (
    name == "Metro" ||
    name == "Bangalore Sub urban Rail Projects ( 148.17 km)"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description:<span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  } else if (name == "New Line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Railway:<span style="color:black">' +
      a.rly +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">PH:<span style="color:black">' +
      a.ph +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.len_comm_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length (in Km):<span style="color:black">' +
      a.length_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length as on 01.04.20 (in Km):<span style="color:black">' +
      a.bal_len_04 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_upto +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw forward as on 1.4.2020 (Rs. in Cr.):<span style="color:black">' +
      a.throw_forw +
      "</span></p>"
    );
  } else if (name == "Doubling Projects") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Executing Agency:<span style="color:black">' +
      a.execu_agen +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of sanction/inclusion:<span style="color:black">' +
      a.year_inclu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Priority:<span style="color:black">' +
      a.priority +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.len_comm_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length (in Km):<span style="color:black">' +
      a.length +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length as on 01.04.20 (in Km):<span style="color:black">' +
      a.bal_len_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Updated Anticipitated Cost (Cr):<span style="color:black">' +
      a.updat_anti +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_up_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw forward as on 1.4.2020 (Rs. in Cr.):<span style="color:black">' +
      a.thro_for_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Outlay for 2020-21(Cr):<span style="color:black">' +
      a.outla__20_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_upto_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw Forward as on 01.04.20(Cr)-2:<span style="color:black">' +
      a.thro_forw2 +
      "</span></p>"
    );
  } else if (
    name == "Doubling (24to29)" ||
    name == "Doubling (march24)" ||
    name == "Gauge Conversion (24to29)" ||
    name == "Gauge Conversion(march24)"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Rly/Executing Agency:<span style="color:black">' +
      a.rly_executing_agency +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.name_of_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of Inclusion in Budget:<span style="color:black">' +
      a.year_of_inclusionin_budget +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length of Main Project (Km):<span style="color:black">' +
      a.total_length_of_main_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length of the main project Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.length_main_project_commissioned_upto_mar20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length of main Project (Km):<span style="color:black">' +
      a.balance_length_main_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Anticipitated Cost(in Cr):<span style="color:black">' +
      a.anticipitated_cost +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Expenditure upto Mar 20(Cr.):<span style="color:black">' +
      a.expenditure +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Likely to be commissioned by:<span style="color:black">' +
      a.projectlikely_commissionedby +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw Forward as on 01.04.20 (Cr):<span style="color:black">' +
      a.throw_forward_on_01_04_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sanction Status:<span style="color:black">' +
      a.sanction_status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name1 +
      "</span></p>"
    );
  } else if (name == "New Line (march24)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Rly/Executing Agency:<span style="color:black">' +
      a.rly_executing_agency +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.name_of_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of Inclusion in Budget:<span style="color:black">' +
      a.year_of_inclusionin_budget +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length of Main Project (Km):<span style="color:black">' +
      a.total_length_of_main_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length of the main project Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.length_main_project_commissioned_upto_mar20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length of main Project (Km):<span style="color:black">' +
      a.balance_length_main_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Anticipitated Cost(in Cr):<span style="color:black">' +
      a.anticipitated_cost +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Expenditure upto Mar 20(Cr.):<span style="color:black">' +
      a.expenditure +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Likely to be commissioned by:<span style="color:black">' +
      a.projectlikely_commissionedby +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw Forward as on 01.04.20 (Cr):<span style="color:black">' +
      a.throw_forward_on_01_04_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sanction Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name1 +
      "</span></p>"
    );
  }
  /////////////////////////////////////////////////////////////////////
  if (name == "Jio" || name == "Airtel" || name == "TATA") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      "</span></p>"
    );
  } else if (name == "MMLP") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Railway:<span style="color:black">' +
      a.rly +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project Dhasa:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of sanction/inclusion:<span style="color:black">' +
      a.sanction_i +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length of Project (Km):<span style="color:black">' +
      a.length_km +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length commissioned (Km):<span style="color:black">' +
      a.len_comm +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance Length (Km):<span style="color:black">' +
      a.bal_len +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_mar20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw forward as on 1.4.2020 (Rs. in Cr.):<span style="color:black">' +
      a.thr_forw +
      "</span></p>"
    );
  } else if (name == "Canal expressway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length (kms):<span style="color:black">' +
      a.leng_km +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.srno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Implementation Agency:<span style="color:black">' +
      a.impleagenc +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Lattitude:<span style="color:black">' +
      a.latitude +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Logtitude:<span style="color:black">' +
      a.longitude +
      "</span></p>"
    );
  } else if (name == "Canal" || name == "NH (ROB)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gid:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state
    );
  } else if (name == "Forest sanctuary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Executing Agency:<span style="color:black">' +
      a.execu_agen +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of sanction/inclusion:<span style="color:black">' +
      a.year_inclu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Priority:<span style="color:black">' +
      a.priority +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.len_comm_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length (in Km):<span style="color:black">' +
      a.length +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length as on 01.04.20 (in Km):<span style="color:black">' +
      a.bal_len_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Updated Anticipitated Cost (Cr):<span style="color:black">' +
      a.updat_anti +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_up_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw forward as on 1.4.2020 (Rs. in Cr.):<span style="color:black">' +
      a.thro_for_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Outlay for 2020-21(Cr):<span style="color:black">' +
      a.outla__20_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_upto_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw Forward as on 01.04.20(Cr)-2:<span style="color:black">' +
      a.thro_forw2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Lattitude:<span style="color:black">' +
      a.latitude +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Logtitude:<span style="color:black">' +
      a.longitude +
      "</span></p>"
    );
  } else if (name == "Monuments") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.s_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Executing Agency:<span style="color:black">' +
      a.execu_agen +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Project:<span style="color:black">' +
      a.project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year of sanction/inclusion:<span style="color:black">' +
      a.year_inclu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Priority:<span style="color:black">' +
      a.priority +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Length Commissioned upto March 20 (in Km):<span style="color:black">' +
      a.len_comm_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Length (in Km):<span style="color:black">' +
      a.length +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Balance length as on 01.04.20 (in Km):<span style="color:black">' +
      a.bal_len_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Updated Anticipitated Cost (Cr):<span style="color:black">' +
      a.updat_anti +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_up_20 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw forward as on 1.4.2020 (Rs. in Cr.):<span style="color:black">' +
      a.thro_for_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Outlay for 2020-21(Cr):<span style="color:black">' +
      a.outla__20_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Exp. upto March 2020 (Rs. in Cr.):<span style="color:black">' +
      a.exp_upto_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Throw Forward as on 01.04.20(Cr)-2:<span style="color:black">' +
      a.thro_forw2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Lattitude:<span style="color:black">' +
      a.latitude +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Logtitude:<span style="color:black">' +
      a.longitude +
      "</span></p>"
    );
  } else if (name == "Express way & Doubling of Railway line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.village +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Categary:<span style="color:black">' +
      a.categary +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area:<span style="color:black">' +
      a.area_acres +
      "</span></p>"
    );
  } else if (name == "Project Sanctioned ") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">No of Project:&nbsp;<span style="color:black">' +
      a.no_of_project +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Amount Sanctioned:&nbsp;<span style="color:black">' +
      a.amount_sanctioned +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Amount Released:&nbsp;<span style="color:black">' +
      a.amount_released +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Amount Utilized:&nbsp;<span style="color:black">' +
      a.amount_utilized +
      "</span></p>"
    );
  } else if (
    name == "Details of Project Sanctioned " ||
    name == "Buddhist Circuit" ||
    name == "Coastal Circuit" ||
    name == "Eco Circuit" ||
    name == "Heritage Circuit" ||
    name == "Himalayan Circuit" ||
    name == "Krishna Circuit" ||
    name == "North East Circuit" ||
    name == "Ramayana Circuit" ||
    name == "Rural Circuit" ||
    name == "Spiritual Circuit" ||
    name == "Tirthankar Circuit" ||
    name == "Tribal Circuit" ||
    name == "Wildlife Circuit"
  ) {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Circuit:&nbsp;<span style="color:black">' +
      a.circuit +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Amount Released:&nbsp;<span style="color:black">' +
      a.amount_released +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Amount Utilized:&nbsp;<span style="color:black">' +
      a.amount_utilized +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sanctioned Year:&nbsp;<span style="color:black">' +
      a.sanctioned_year +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Physical Progress:&nbsp;<span style="color:black">' +
      a.physical_progress +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Name:&nbsp;<span style="color:black">' +
      a.project_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Final Progress:&nbsp;<span style="color:black">' +
      a.final_progress +
      "</span></p>"
    );
  }

  if (name == "LNG Terminals") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:&nbsp;<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Data Period:&nbsp;<span style="color:black">' +
      a.data_perio +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">No Jettie:&nbsp;<span style="color:black">' +
      a.num_jettie +
      "</span></p>"
    );
  }
  if (name == "LPG Bottling Plants") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Capacity:&nbsp;<span style="color:black">' +
      a.op_bot_cap +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Number of Shift:&nbsp;<span style="color:black">' +
      a.num_shifts +
      "</span></p>"
    );
  }
  if (name == "Petroleum Prod Terminals") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Hsd Tank C:&nbsp;<span style="color:black">' +
      a.hsd_tank_c +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Ms Tank C:&nbsp;<span style="color:black">' +
      a.ms_tank_ca +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Other Tank:&nbsp;<span style="color:black">' +
      a.other_tank +
      "</span></p>"
    );
  }
  if (name == "Refineries") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Company Name:&nbsp;<span style="color:black">' +
      a.company_na +
      "</span></p>"
    );
  }

  //16 -11
  if (name == "Petroleum Block Point") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Name:&nbsp;<span style="color:black">' +
      a.block_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Operator:&nbsp;<span style="color:black">' +
      a.operator +
      "</span></p>"
    );
  }
  if (name == "Petroleum Block Polygon") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Name:&nbsp;<span style="color:black">' +
      a.block_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Covered:&nbsp;<span style="color:black">' +
      a.district_covered +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Covered:&nbsp;<span style="color:black">' +
      a.taluka_covered +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Area (Sq.Km.):&nbsp;<span style="color:black">' +
      a.areasqkm +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Forest Area (Sq Km):&nbsp;<span style="color:black">' +
      a.forest_total +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Agriculture Area (Sq.Km.):&nbsp;<span style="color:black">' +
      a.agriculture_area +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Settlement Extent Area (Sq.Km.):&nbsp;<span style="color:black">' +
      a.settlement_area +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">River Area (Sq.Km.):&nbsp;<span style="color:black">' +
      a.river_area +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Waterbody Area (Sq.Km.):&nbsp;<span style="color:black">' +
      a.waterbody_area +
      "</span></p>"
    );
  }
  if (name == "Ethanol Plants") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Utility:&nbsp;<span style="color:black">' +
      a.utility +
      "</span></p>"
    );
  }
  if (name == "Natural Gas Pipeline") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Owner:&nbsp;<span style="color:black">' +
      a.owner +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Line Name:&nbsp;<span style="color:black">' +
      a.line_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:&nbsp;<span style="color:black">' +
      a.status +
      "</span></p>"
    );
  }
  if (name == "Petroleum Products Pipeline") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Line Name:&nbsp;<span style="color:black">' +
      a.line_name +
      "</span></p>"
    );
  }
  if (name == "Sedimetry Basin") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Basin Name:&nbsp;<span style="color:black">' +
      a.basin_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:&nbsp;<span style="color:black">' +
      a.category +
      "</span></p>"
    );
  }
  if (name == "Refineries1") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Company Name:&nbsp;<span style="color:black">' +
      a.company_na +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:&nbsp;<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">DC TMTPA:&nbsp;<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">DV TMTPA:&nbsp;<span style="color:black">' +
      a.category +
      "</span></p>"
    );
  }
  if (name == "Active Block") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Name:&nbsp;<span style="color:black">' +
      a.block +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">File Name:&nbsp;<span style="color:black">' +
      a.file_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area:&nbsp;<span style="color:black">' +
      a.area +
      "</span></p>"
    );
  }

  if (name == "Well Header") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Well Name:&nbsp;<span style="color:black">' +
      a.well +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Well Type:&nbsp;<span style="color:black">' +
      a.w_type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Operator:&nbsp;<span style="color:black">' +
      a.operator +
      "</span></p>"
    );
  }
  if (name == "Transmission Line") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Cables:<span style="color:black">' +
      a.cables +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Voltage:<span style="color:black">' +
      a.voltage +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Voltage 1:<span style="color:black">' +
      a.voltage_1 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Operator:<span style="color:black">' +
      a.operator +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Circuits:<span style="color:black">' +
      a.circuits +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Wires:<span style="color:black">' +
      a.wires +
      "</span></p>"
    );
  }
  if (name == "Biomass Power NOP") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW) :<span style="color:black">' +
      a.ins_cap +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Data Upto:<span style="color:black">' +
      a.data_up_to +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Function:<span style="color:black">' +
      a.pri_ful +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.tec +
      "</span></p>"
    );
  }

  if (name == "Small Hydro Power NOP") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW):<span style="color:black">' +
      a.ins_cap +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Fuel:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Biomass Power") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Capacity MW :<span style="color:black">' +
      a.capacitymw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Data Upto:<span style="color:black">' +
      a.data_upto +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Power Plan:<span style="color:black">' +
      a.power_plan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Function:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Mode Wise Renewable Energy") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Biomass Power Plant No:<span style="color:black">' +
      a.bpp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Biomass Power Plant Installed Capacity (MW):<span style="color:black">' +
      a.bppic_mw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Small Hydro Power Plant No:<span style="color:black">' +
      a.shpp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Small Hydro Power Plants Installed Capacity MW:<span style="color:black">' +
      a.shppic_mw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Small Power Plant No:<span style="color:black">' +
      a.spp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Small Power Plant Installed Capacity MW:<span style="color:black">' +
      a.sppic_mw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Renewable Energy Power Plants No:<span style="color:black">' +
      a.trepp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Renewable Energy Power Plants Installed Capacity MW:<span style="color:black">' +
      a.treppic_mw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Waste to Energy Power Plant No:<span style="color:black">' +
      a.wepp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Waste to Energy Power Plant Installed Capacity MW:<span style="color:black">' +
      a.weppic_mw +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Wpp No:<span style="color:black">' +
      a.wpp_no +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Wppic MW:<span style="color:black">' +
      a.wppic_mw +
      "</span></p>"
    );
  }

  if (name == "Small Hydro Power") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW):<span style="color:black">' +
      a.installed +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Power Plants (No.):<span style="color:black">' +
      a.power_plan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Fuel:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Solar Power") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW):<span style="color:black">' +
      a.installed_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Power Plants (No.):<span style="color:black">' +
      a.power_plan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Fuel:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Waste To Energy") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW):<span style="color:black">' +
      a.installed_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Power Plants (No.):<span style="color:black">' +
      a.power_plan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Fuel:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Wind Power") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installed Capacity (MW):<span style="color:black">' +
      a.installed +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Power Plants (No.):<span style="color:black">' +
      a.power_plan +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Primary Fuel:<span style="color:black">' +
      a.primary_fu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Technology:<span style="color:black">' +
      a.technology +
      "</span></p>"
    );
  }

  if (name == "Coal Power Plants") {
    return (
      '</span></span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity (MW):<span style="color:black">' +
      a.instl_cpct +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plant Name:<span style="color:black">' +
      a.plant_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Utility Name:<span style="color:black">' +
      a.utlitynam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Utility Code:<span style="color:black">' +
      a.utlty_code +
      "</span></p>"
    );
  }
  if (name == "Diesel Power Plants") {
    return (
      '</span></span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity (MW):<span style="color:black">' +
      a.instl_cpct +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plant Name:<span style="color:black">' +
      a.plant_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Ut Name:<span style="color:black">' +
      a.ut_name +
      "</span></p>"
    );
  }
  if (name == "Hydro Electric Power Plants") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Dam Name:<span style="color:black">' +
      a.dam_name +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Fid:<span style="color:black">' +
      a.fid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ID:<span style="color:black">' +
      a.id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity(MW):<span style="color:black">' +
      a.instl_cpct +
      "</span></p>"
    );
  }
  if (name == "Natural Gas Power Plants") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Fid:<span style="color:black">' +
      a.fid +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ID:<span style="color:black">' +
      a.id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity(MW):<span style="color:black">' +
      a.instl_cpct +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plant Name:<span style="color:black">' +
      a.plant_name +
      "</span></p>"
    );
  }
  if (name == "Pumped Storage Hydro Power Plants") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Fid:<span style="color:black">' +
      a.fid +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ID:<span style="color:black">' +
      a.id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity(MW):<span style="color:black">' +
      a.instl_cpct +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plant Name:<span style="color:black">' +
      a.plant_name +
      "</span></p>"
    );
  }
  if (name == "Small Hydro Electric Power Plants") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Department:<span style="color:black">' +
      a.deparment +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Fid:<span style="color:black">' +
      a.fid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">ID:<span style="color:black">' +
      a.id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Installation Capacity(MW):<span style="color:black">' +
      a.instll_cpc +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Name:<span style="color:black">' +
      a.proj_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Year:<span style="color:black">' +
      a.year +
      "</span></p>"
    );
  }

  if (name == "Block Boundary Cmis") {
    return (
      '</span></span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Name:<span style="color:black">' +
      a.blockname +
      '</p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area Sqkm:<span style="color:black">' +
      a.area_sqkm +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area Sqmtr:<span style="color:black">' +
      a.area_sqmtr +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Cat Desh:<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category N:<span style="color:black">' +
      a.coal_code +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field N:<span style="color:black">' +
      a.coalfieldn +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Subsidiary:<span style="color:black">' +
      a.subsidiary +
      "</span></p>"
    );
  }
  if (name == "Cmsp Blocks") {
    return (
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Block Name:<span style="color:black">' +
      a.blockname +
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.catagory +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field:<span style="color:black">' +
      a.coalfield +
      "</span></p>"
    );
  }
  if (name == "Coal Field Cmis") {
    return (
      '</span></span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Code:<span style="color:black">' +
      a.coal_code +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field:<span style="color:black">' +
      a.coalfield +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Object Id:<span style="color:black">' +
      a.objectid +
      +'</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Subsidiary:<span style="color:black">' +
      a.subsidiary +
      "</span></p>"
    );
  }
  if (name == "Land Reclamation Cmis") {
    return (
      '</span></p></span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Coal Field:<span style="color:black">' +
      a.coalfield +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Object Id:<span style="color:black">' +
      a.objectid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Name:<span style="color:black">' +
      a.projectnam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Subsidiary:<span style="color:black">' +
      a.subsidiary +
      "</span></p>"
    );
  }

  if (name == "ModeWise Electricity Generation") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Nuclear:<span style="color:black">' +
      a.g_e_g_o_nu +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Renewable:<span style="color:black">' +
      a.g_e_g_o_re +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Diesel:<span style="color:black">' +
      a.g_e_ge_o_d +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Gas:<span style="color:black">' +
      a.g_e_ge_o_g +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Hydro:<span style="color:black">' +
      a.g_e_ge_o_h +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Gross Electricity Generation of Steam:<span style="color:black">' +
      a.g_e_ge_o_s +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Proved:<span style="color:black">' +
      a.proved +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Gross Electricity Generation of Thermal:<span style="color:black">' +
      a.t_g_e_goth +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Gross Electricity Generation:<span style="color:black">' +
      a.to_g_e_ge +
      "</span></p>"
    );
  }

  if (name == "Estimated Reserves Of Crude Oil") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Estimated Reserves of Crude Oil:<span style="color:black">' +
      a.e_r_o_cru +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Distribution of Crude Oil Reserves (%):<span style="color:black">' +
      a.dis_o_cru_ +
      "</span></p>"
    );
  }

  if (name == "Estimated Reserves Of Natural Gas") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Estimated Reserves of Natural Gas:<span style="color:black">' +
      a.es_r_o_n_g +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Distribution of Natural Gas Reserves (%):<span style="color:black">' +
      a.d_of_n_g_r +
      "</span></p>"
    );
  }

  if (name == "Estimated Reserves Of Lignite") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Proved:<span style="color:black">' +
      a.proved +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Indicated:<span style="color:black">' +
      a.indicated +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Inferred:<span style="color:black">' +
      a.interred +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Distribution of Lignite Reserves (%):<span style="color:black">' +
      a.di_of_li_r +
      "</span></p>"
    );
  }

  if (name == "Estimated Reserves Of Coal") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:<span style="color:black">' +
      a.sname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Proved:<span style="color:black">' +
      a.proved +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Indicated:<span style="color:black">' +
      a.indicated +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Inferred:<span style="color:black">' +
      a.interred +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Distribution of Coal Reserves (%):<span style="color:black">' +
      a.dis_of_co_ +
      "</span></p>"
    );
  }

  if (name == "Energy Consumption(GWh)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Region:<span style="color:black">' +
      a.region +
      "</span></p>"
    );
  }

  if (name == "Coastal Revenue Survey Number") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Suvery No: <span style="color:black">' +
      a.sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.village +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }

  if (name == "Aqua Culture") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.villag +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mpeda ID : <span style="color:black">' +
      a.mpeda_id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">MPEDA Registration: <span style="color:black">' +
      a.mpeda_regi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">MPEDA Registration Number: <span style="color:black">' +
      a.mpeda_regn +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">MPEDA date: <span style="color:black">' +
      a.mpeda_date +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Water source : <span style="color:black">' +
      a.water_src +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Water Supply Count: <span style="color:black">' +
      a.w_sal_cont +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Water Discharge: <span style="color:black">' +
      a.w_dischare +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Water source : <span style="color:black">' +
      a.water_src +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Under Cultivation: <span style="color:black">' +
      a.under_cult +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">species Cultivation: <span style="color:black">' +
      a.spec_cult +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Cultivation Technology: <span style="color:black">' +
      a.cult_tech +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Farm ID  : <span style="color:black">' +
      a.farm_id +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name Of Farmer : <span style="color:black">' +
      a.name_farme +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Original Owner	: <span style="color:black">' +
      a.orig_owner +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Owner Of Farm: <span style="color:black">' +
      a.owner_farm +
      "</span></p>"
    );
  }

  if (name == "Deparment Survey Number") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Suvery_no: <span style="color:black">' +
      a.sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.dname +
      "</span></p>"
    );
  }

  if (name == "Mangrove") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category: <span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area Ha: <span style="color:black">' +
      a.area_ha +
      "</span></p>"
    );
  }

  if (name == "Potential Mudflats") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo: <span style="color:black">' +
      a.sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.village +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area Ha: <span style="color:black">' +
      a.area_ha +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mud Type: <span style="color:black">' +
      a.mud_type +
      "</span></p>"
    );
  }

  if (name == "Saltpan") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category: <span style="color:black">' +
      a.category +
      "</span></p>"
    );
  }

  if (name == "Fish Landing Center") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Center: <span style="color:black">' +
      a.center +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }

  if (name == "Coastal District") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "Coastal Taluka") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      "</span></p>"
    );
  }
  if (name == "Coastal Regulation Zone (CRZ)") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name: <span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "Erosion Line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Costal: <span style="color:black">' +
      a.costal +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.vname +
      "</span></p>"
    );
  }
  if (name == "High Tide Line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name: <span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Feature: <span style="color:black">' +
      a.featuretyp +
      "</span></p>"
    );
  }

  if (name == "National Highway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "State Highway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "Major District Road") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "All Road") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "District Head Quarter") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Id:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.vname +
      "</span></p>"
    );
  }
  if (name == "Taluka Head Quarter") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.vname +
      "</span></p>"
    );
  }
  if (name == "Village Location") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.newvname +
      "</span></p>"
    );
  }
  if (name == "Costal Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      "</span></p>"
    );
  }
  if (name == "Railway Station") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Station: <span style="color:black">' +
      a.railwaysta +
      "</span></p>"
    );
  }
  if (name == "Hazira Port Railway Line") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Description: <span style="color:black">' +
      a.descriptio +
      "</span></p>"
    );
  }
  if (name == "Hazira Port Railway Point") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name: <span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "Forest") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.dname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:<span style="color:black">' +
      a.tname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village:<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Survey No:<span style="color:black">' +
      a.sno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Range:<span style="color:black">' +
      a.range +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Division:<span style="color:black">' +
      a.division +
      "</span></p>"
    );
  }
  if (name == "EcoSensitive Zone") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Status:<span style="color:black">' +
      a.status +
      "</span></p>"
    );
  }
  if (name == "Sanctury National Park") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Categary:<span style="color:black">' +
      a.categary +
      "</span></p>"
    );
  }
  if (name == "Port") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">SrNo:<span style="color:black">' +
      a.gid +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:<span style="color:black">' +
      a.name_of_po +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.cat +
      "</span></p>"
    );
  }
  if (name == "Port Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name: <span style="color:black">' +
      a.p_name +
      "</span></p>"
    );
  }

  if (name == "Sanctuary National Park") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name: <span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State: <span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }

  if (name == "Eco Sensitive Zone") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name: <span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State: <span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }

  if (name == "India Major Lease 2020") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mine Name: <span style="color:black">' +
      a.mine_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Lease: <span style="color:black">' +
      a.name_of_le +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mine Code: <span style="color:black">' +
      a.mine_code +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Lease Area: <span style="color:black">' +
      a.area1 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Miniral Name: <span style="color:black">' +
      a.mineral_na +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Region: <span style="color:black">' +
      a.region +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State: <span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.vil_name11 +
      "</span></p>"
    );
  }

  if (name == "Minor Lease") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mine Name: <span style="color:black">' +
      a.minename +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name of Lease: <span style="color:black">' +
      a.name_of_le +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Mine Code: <span style="color:black">' +
      a.mine_code +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Miniral Name: <span style="color:black">' +
      a.name_of_mi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Lease Area: <span style="color:black">' +
      a.lease_area +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Zone: <span style="color:black">' +
      a.zone +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Region: <span style="color:black">' +
      a.region +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State: <span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District: <span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka: <span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village: <span style="color:black">' +
      a.village +
      "</span></p>"
    );
  }

  if (name == "Industrial Park Location") {
    //alert();
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Park Name:&nbsp;<span style="color:black">' +
      a.park_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State :&nbsp;<span style="color:black">' +
      a.st_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dist_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.sub_dist +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village :&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area (Hec.):&nbsp;<span style="color:black">' +
      a.total_land +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Park Owner:&nbsp;<span style="color:black">' +
      a.adm_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Plots:&nbsp;<span style="color:black">' +
      a.totalplots +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Land Type:&nbsp;<span style="color:black">' +
      a.land_cat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Industrial Sector:&nbsp;<span style="color:black">' +
      a.sector +
      "</span></p>"
    );
  }
  if (name == "Industrial Park Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Park Name:&nbsp;<span style="color:black">' +
      a.park_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State :&nbsp;<span style="color:black">' +
      a.st_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.dist_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka:&nbsp;<span style="color:black">' +
      a.sub_dist +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village :&nbsp;<span style="color:black">' +
      a.vname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area (Hec.):&nbsp;<span style="color:black">' +
      a.total_land +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Park Owner:&nbsp;<span style="color:black">' +
      a.adm_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Total Plots:&nbsp;<span style="color:black">' +
      a.totalplots +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Land Type:&nbsp;<span style="color:black">' +
      a.land_cat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Industrial Sector:&nbsp;<span style="color:black">' +
      a.sector +
      "</span></p>"
    );
  }

  if (name == "Industrial Plot Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.st_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plot Owner:&nbsp;<span style="color:black">' +
      a.owner +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Owner Contact No.:&nbsp;<span style="color:black">' +
      a.ownphone +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Owner Email:&nbsp;<span style="color:black">' +
      a.ownemail +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plot number:&nbsp;<span style="color:black">' +
      a.plotno +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plot Type:&nbsp;<span style="color:black">' +
      a.plotcat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plot Size(Hec.):&nbsp;<span style="color:black">' +
      a.plotsize +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Plot Status:&nbsp;<span style="color:black">' +
      a.plotstatus +
      "</span></p>"
    );
  }

  if (name == "Adapter Charger Manufacturing Unit") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">S_No_:&nbsp;<span style="color:black">' +
      a.s_no_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:&nbsp;<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Company:&nbsp;<span style="color:black">' +
      a.company +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Unit:&nbsp;<span style="color:black">' +
      a.no__of_uni +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:&nbsp;<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Latitude:&nbsp;<span style="color:black">' +
      a.lat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Longitude:&nbsp;<span style="color:black">' +
      a.long +
      "</span></p>"
    );
  }

  if (name == "USB Cable Manufacturing Unit") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">S_No_:&nbsp;<span style="color:black">' +
      a.s_no_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:&nbsp;<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Company:&nbsp;<span style="color:black">' +
      a.company +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Unit:&nbsp;<span style="color:black">' +
      a.no__of_uni +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:&nbsp;<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Latitude:&nbsp;<span style="color:black">' +
      a.lat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Longitude:&nbsp;<span style="color:black">' +
      a.long +
      "</span></p>"
    );
  }

  if (name == "Wired Headset Manufacturing Unit") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">S_No_:&nbsp;<span style="color:black">' +
      a.s_no_ +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Type:&nbsp;<span style="color:black">' +
      a.type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Company:&nbsp;<span style="color:black">' +
      a.company +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Unit:&nbsp;<span style="color:black">' +
      a.no__of_uni +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Location:&nbsp;<span style="color:black">' +
      a.location +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Latitude:&nbsp;<span style="color:black">' +
      a.lat +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Longitude:&nbsp;<span style="color:black">' +
      a.long +
      "</span></p>"
    );
  }

  if (name == "Staging") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p> <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Standardiz:&nbsp;<span style="color:black">' +
      a.standardiz +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sheet Referance:&nbsp;<span style="color:black">' +
      a.sheet_ref +
      '</span></p> <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Data From:&nbsp;<span style="color:black">' +
      a.data_from +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Name:&nbsp;<span style="color:black">' +
      a.project_na +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">project Pillar:&nbsp;<span style="color:black">' +
      a.project_pi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Category:&nbsp;<span style="color:black">' +
      a.project_ca +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Implement:&nbsp;<span style="color:black">' +
      a.implementi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Code:&nbsp;<span style="color:black">' +
      a.project_co +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Start Date:&nbsp;<span style="color:black">' +
      a.start_date +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">End Date:&nbsp;<span style="color:black">' +
      a.end_date +
      "</span></p>"
    );
  }

  if (name == "Shipping") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.state +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p> <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sheet Referance:&nbsp;<span style="color:black">' +
      a.sheet_ref +
      '</span></p> <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Data From:&nbsp;<span style="color:black">' +
      a.data_from +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Name:&nbsp;<span style="color:black">' +
      a.project_na +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">project Pillar:&nbsp;<span style="color:black">' +
      a.project_pi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Category:&nbsp;<span style="color:black">' +
      a.project_ca +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Implement:&nbsp;<span style="color:black">' +
      a.implementi +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Project Code:&nbsp;<span style="color:black">' +
      a.project_co +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Start Date:&nbsp;<span style="color:black">' +
      a.start_date +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">End Date:&nbsp;<span style="color:black">' +
      a.end_date +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Standardiz:&nbsp;<span style="color:black">' +
      a.standardiz +
      "</span></p>"
    );
  }

  if (name == "Port Shipping") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p>  <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  if (name == "Major Ports") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p>  <p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  if (name == "Major Existing Port 2014") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Major Proposed Port") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Minor Existing Port 2014") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Minor Existing Port 2020") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Minor Proposed Port") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Sagarmala") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }

  if (name == "Railway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:&nbsp;<span style="color:black">' +
      a.name +
      "</span></p>  "
    );
  }
  if (name == "Major Port Location") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  if (name == "Major Port Amenities") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Place Name:&nbsp;<span style="color:black">' +
      a.place +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  if (name == "Major Port Land") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.state_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district_n +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka_nam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.villagenam +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Organization:&nbsp;<span style="color:black">' +
      a.organiza_2 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Landuse:&nbsp;<span style="color:black">' +
      a.landuse +
      "</span></p>"
    );
  }

  if (name == "Major Port Landuse") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Landuse type:&nbsp;<span style="color:black">' +
      a.landuse_type +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  if (name == "Major Port Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }
  if (name == "Major Port Road") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">State Name:&nbsp;<span style="color:black">' +
      a.stname +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District Name:&nbsp;<span style="color:black">' +
      a.district +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Taluka Name:&nbsp;<span style="color:black">' +
      a.taluka +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Village Name:&nbsp;<span style="color:black">' +
      a.vil_name11 +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Road Name:&nbsp;<span style="color:black">' +
      a.name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Name:&nbsp;<span style="color:black">' +
      a.port_name +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Port Adress:&nbsp;<span style="color:black">' +
      a.port_addre +
      "</span></p>"
    );
  }

  //kpt
  if (name == "Landuse DPT") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      "</span></p>"
    );
  }
  if (name == "Lease DPT") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Feature:<span style="color:black">' +
      a.feature_class +
      "</span></p>"
    );
  }
  if (name == "Plot Boundary") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Ward:<span style="color:black">' +
      a.ward +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Sheet:<span style="color:black">' +
      a.sheet +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Region:<span style="color:black">' +
      a.region +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">District:<span style="color:black">' +
      a.district +
      "</span></p>"
    );
  }
  if (name == "On going DILR Survey") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "Pending Survey") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Name:<span style="color:black">' +
      a.name +
      "</span></p>"
    );
  }
  if (name == "DPT Limit Railway") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area:<span style="color:black">' +
      a.area +
      "</span></p>"
    );
  }
  if (name == "DPT Limit Road") {
    return (
      '<p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Category:<span style="color:black">' +
      a.category +
      '</span></p><p style="color:green;font-size: 17px;padding:3px;border-radius:30px;padding-left:14px">Area:<span style="color:black">' +
      a.area +
      "</span></p>"
    );
  }

  delete a["minx"];
  delete a["miny"];
  delete a["maxx"];
  delete a["maxy"];
  delete a["gid"];
  delete a["wkt"];
  delete a["id"];
  delete a["create_date"];
  delete a["update_date"];
  delete a["userid"];
  delete a["username"];
  delete a["airfield_id"];
  delete a["geom"];
  delete a["action"];

  let data = JSON.stringify(a).replaceAll(
    '{"',
    '<tr><td style="text-transform: capitalize;color: #31549b; font-weight: bold; border: 2px solid #31549b;">'
  );
  data = data.replaceAll("}", "");

  data = data.replaceAll(
    '":',
    '</td>  <td style="border: 2px solid #31549b;">'
  );

  data = data.replaceAll(
    ',"',
    '</td></tr><tr><td style="text-transform: capitalize;color: #31549b; font-weight: bold; border: 2px solid #31549b;">'
  );
  data = data.replaceAll("_", " ");
  data = data.replaceAll("null", " ");
  data = data.replaceAll("null", " ");
  return (
    ' <table  style="color:black;border: 3px solid #31549b;" class="table table-primary table-striped">' +
    data +
    "</table>"
  );
};

export const identifySymbol = (layer, check) => {
  var name = layer.get("name");

  if (check == true) {
    if (
      // name != "Aerial" &&
      name != "High Resolution Image" &&
      name != "satellite image" &&
      name != "Village" &&
      name != "Taluka" &&
      name != "District" &&
      name != "State"
    ) {
      document.getElementById("IdentifySymbol").style.display = "block";
      document.getElementById("IdentifySymbol").innerHTML =
        "Identify On Layer: " + name;
    } else {
      document.getElementById("IdentifySymbol").style.display = "none";
    }
  } else {
    if (
      // name != "Aerial" &&
      name != "High Resolution Image" &&
      name != "satellite image" &&
      name != "Village" &&
      name != "Taluka" &&
      name != "District" &&
      name != "State"
    ) {
      document.getElementById("IdentifySymbol").style.display = "none";
    }
  }
};
