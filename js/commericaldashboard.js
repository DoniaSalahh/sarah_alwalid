








// let currentPage = 1;


// async function getTotalNumberOfItems() {
//     try {
//         let response = await axios.get('https://inmaa.vercel.app/commercial');
//         let totalItems = response.data.data.length;
//         return totalItems;
//     } catch (error) {
//         console.error("An error occurred while fetching the total number of items:", error);
//         return 0;
//     }
// }


// async function fetchPage(page) {
//     try {
//         let res = await axios.get(`https://inmaa.vercel.app/commercial/page?page=${page}`);
//         console.log(res.data); 
//         contracts = res.data.data; 
//         console.log(contracts)
//         document.getElementById("objectNumber").innerText = ` ${page}`;

//         let placeholder1 = document.querySelector("#data1");
//         let placeholder2 = document.querySelector("#data2");
//         let placeholder3 = document.querySelector("#data3");
//         let placeholder4 = document.querySelector("#data4");
//         let placeholder5 = document.querySelector("#data5");
//         let placeholder6 = document.querySelector("#data6");
//         let placeholder7 = document.querySelector("#data7");
//         let placeholder8 = document.querySelector("#data8");
//         let placeholder9 = document.querySelector("#data9");

//         let out1 = "";
//         let out2 = "";
//         let out3 = "";
//         let out4 = "";
//         let out5 = "";
//         let out6 = "";
//         let out7 = "";
//         let out9 = "";
//         contracts = res.data.data; 
        
//         contracts.forEach((contract) => {
//             if (contracts.length > 0) {
//                 const firstContract = contracts[0]; 
//                 let imageDiv = document.querySelector("#image");
//                 let imageDiv1 = document.querySelector("#image1");
//                 let imageDiv2 = document.querySelector("#image2");
//                 let imageDiv3 = document.querySelector("#image3");
//                 let imageDiv4 = document.querySelector("#image4");
//                 let imageDiv5 = document.querySelector("#image5");

//                 function displayFiles(files, container) {
//                     if (files && files.length > 0) {
//                         let filesHtml = files.map(file => {
//                             if (file.secure_url.endsWith('.pdf')) {
//                                 return `<button onclick="window.open('${file.secure_url}')" class="btn btn-info p-3">فتح PDF</button>`;
//                             } else {
//                                 return `<img src="${file.secure_url}" alt="Image" style="width: 100%; height: auto;">`;
//                             }
//                         }).join('');
//                         container.innerHTML = filesHtml;
//                     } else {
//                         container.innerHTML = '<p>No file available</p>';
//                     }
//                 }

//                 displayFiles(firstContract.ownerImage, imageDiv);
//                 displayFiles(firstContract.clientImage, imageDiv1);
//                 displayFiles(firstContract.sakImage, imageDiv2);
//                 displayFiles(firstContract.familyImages, imageDiv3);
//                 displayFiles(firstContract.agencyImage, imageDiv4);
//                 displayFiles(firstContract.agentImage, imageDiv5);
//             }

//             out1 += `
//                 <tr>
//                     <td>${contract.ownerID}</td>
//                     <td>${contract.ownerDateDay}</td>
//                     <td>${contract.ownerDateMonth}</td>
//                     <td>${contract.ownerDateYear}</td>
//                     <td>${contract.ownerPhone}</td>
//                     <td>${contract.email}</td>
//                     <td>${contract.bankName}</td>
//                     <td>${contract.IBAN}</td>
//                     <td>${contract.ownerBuildingNum}</td>
//                     <td>${contract.ownerPostalCode}</td>
//                     <td>${contract.ownerAddCode}</td>
//                     <td>${contract.ownerDistrict}</td>
//                     <td>${contract.ownerStreetName}</td>
//                 </tr>`;

//             out2 += `
//                 <tr>
                  
//                     <td>${contract.sakNumber}</td>
//                     <td>${contract.sakDay}</td>
//                     <td>${contract.sakMonth}</td>
//                     <td>${contract.sakYear}</td>
//                     <td>${contract.floorNum}</td>
//                     <td>${contract.aprtmentsNum}</td>
//                 </tr>`;

//             out3 += `
//                 <tr>
//                     <td>${contract.mawaqfNum}</td>
//                     <td>${contract.elevatorNum}</td>
//                     <td>${contract.buildingName}</td>
//                     <td>${contract.buildingDay}</td>
//                     <td>${contract.buildingMonth}</td>
//                     <td>${contract.buildingYear}</td>
//                 </tr>`;
//             out4 += `
//                 <tr>
//                     <td>${contract.ownerAgencyNum}</td>
//                     <td>${contract.ownerAgencyDate}</td>
//                     <td>${contract.ownerAgentName}</td>
//                     <td>${contract.ownerAgencyPhone}</td>
//                     <td>${contract.ownerAgencyDay}</td>
//                     <td>${contract.ownerAgencyMonth}</td>
//                     <td>${contract.ownerAgencyYear}</td>
//                     <td>${contract.ownerAgencyEmail}</td>
//                 </tr>`;

//             out5 += `
//                 <tr>
//                     <td>${contract.clientName}</td>
//                     <td>${contract.clientPhone}</td>
//                     <td>${contract.clientIDNumber}</td>
//                     <td>${contract.clientEmail}</td>
//                     <td>${contract.clientDayBD}</td>
//                     <td>${contract.clientMonthBD}</td>
//                     <td>${contract.clientYearBD}</td>
//                     <td>${contract.clientDayBDHJ}</td>
//                     <td>${contract.clientMonthBDHJ}</td>
//                     <td>${contract.clientYearBDHJ}</td>
//                 </tr>`;
                
//             out6 += `
//                 <tr>
//                     <td>${contract.unitNum}</td>
//                     <td>${contract.unitFloor}</td>
//                     <td>${contract.unitBedRooms}</td>
//                     <td>${contract.unitSeats}</td>
//                     <td>${contract.unitHalls}</td>
//                     <td>${contract.unitMaidRooms}</td>
//                     <td>${contract.unitStoreNum}</td>
//                     <td>${contract.unitKitchenNum}</td>
//                     <td>${contract.unitBathroomNum}</td>
//                     <td>${contract.unitYardNum}</td>
//                     <td>${contract.unitTypeQ}</td>
//                     <td>${contract.unitTypeOther}</td>
//                 </tr>`;
                
//             out7= `
//                 <tr>
//                     <td>${contract.unitFornitureQ}</td>
//                     <td>${contract.unitKitchenDrawerQ}</td>
//                     <td>${contract.unitACQ}</td>
//                     <td>${contract.unitACNormalNum}</td>
//                     <td>${contract.unitACCnetralNum}</td>
//                     <td>${contract.unitSplitNum}</td>
//                     <td>${contract.unitWindowNum}</td>
//                     <td>${contract.unitElecNum}</td>
//                     <td>${contract.unitElecRead}</td>
//                     <td>${contract.unitWaterNum}</td>
//                     <td>${contract.unitWaterRead}</td>
//                 </tr>`;
                
//             out8= `
//                 <tr>
//                     <td>${contract.unitGasNum}</td>
//                     <td>${contract.unitGasRead}</td>
//                     <td>${contract.unitPrice}</td>
//                     <td>${contract.unitInsurance}</td>
//                     <td>${contract.unitDay}</td>
//                     <td>${contract.unitMonth}</td>
//                     <td>${contract.unitYear}</td>
//                     <td>${contract.unitPayment}</td>
//                     <td>${contract.unitContract}</td>
//                     <td>${contract.unitAutoRenewal}</td>
//                     <td>${contract.unitNotes}</td>
//                 </tr>`;
//                 out9 += `
//                 <tr>
//                     <td>${contract.clientAgencyNum}</td>
//                     <td>${contract.clientAgencyDate}</td>
//                     <td>${contract.clientAgentName}</td>
//                     <td>${contract.clientAgencyPhone}</td>
//                     <td>${contract.clientAgencyDay}</td>
//                     <td>${contract.clientAgencyMonth}</td>
//                     <td>${contract.clientAgencyYear}</td>
//                     <td>${contract.clientAgencyEmail}</td>
//                 </tr>`;
//         });

//         placeholder1.innerHTML = out1;
//         placeholder2.innerHTML = out2;
//         placeholder3.innerHTML = out3;
//         placeholder4.innerHTML = out4;
//         placeholder5.innerHTML = out5;
//         placeholder6.innerHTML = out6;
//         placeholder7.innerHTML = out7;
//         placeholder8.innerHTML = out8;
//         placeholder9.innerHTML = out9;

//         let totalItems =await  getTotalNumberOfItems();
//         console.log(totalItems)
//         document.querySelector("#prevButton").disabled = page === 1;
//         document.querySelector("#nextButton1").disabled = page === totalItems;
//     } catch (error) {
//         console.error("An error occurred while fetching the data:", error);
//     }
// }


// document.getElementById("nextButton1").addEventListener("click", () => {
//     currentPage++;
//     document.getElementById("objectNumber").innerText = ` ${currentPage}`;
//     fetchPage(currentPage);
// });

// document.getElementById("prevButton").addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         document.getElementById("objectNumber").innerText = ` ${currentPage}`;
//         fetchPage(currentPage);
//     }
// });

// window.onload = function() {
//     fetchPage(currentPage);
// };











let currentPage = 1;
async function getTotalNumberOfItems() {
    try {
        let response = await axios.get('https://inmaa.vercel.app/commercial');
        let totalItems = response.data.data.length;
        return totalItems;
    } catch (error) {
        console.error("An error occurred while fetching the total number of items:", error);
        return 0;
    }
}


async function fetchPage(page) {
    try {
        let res = await axios.get(`https://inmaa.vercel.app/commercial/page?page=${page}`);
        console.log(res.data); 
        contracts = res.data.data; 
        console.log(contracts)
        document.getElementById("objectNumber").innerText = ` ${page}`;

        let placeholder1 = document.querySelector("#data1");
        let placeholder2 = document.querySelector("#data2");
        let placeholder3 = document.querySelector("#data3");
        let placeholder4 = document.querySelector("#data4");
        let placeholder5 = document.querySelector("#data5");
        let placeholder6 = document.querySelector("#data6");
        let placeholder7 = document.querySelector("#data7");
        let placeholder8 = document.querySelector("#data8");
        let placeholder9 = document.querySelector("#data9");
        let placeholder10 = document.querySelector("#data10");
        let placeholder11 = document.querySelector("#data11");
        let placeholder12 = document.querySelector("#data12");
        let out1 = "";
        let out2 = "";
        let out3 = "";
        let out4 = "";
        let out5 = "";
        let out6 = "";
        let out7 = "";
        let out8 = "";
        let out9 = "";
        let out10 = "";
        let out11 = "";
        let out12 = "";



        contracts = res.data.data; 
        contracts.forEach((contract) => {
            if (contracts.length > 0) {
                const firstContract = contracts[0]; 
                let imageDiv = document.querySelector("#image");
                let imageDiv1 = document.querySelector("#image1");
                let imageDiv2 = document.querySelector("#image2");
                let imageDiv3 = document.querySelector("#image3");
                let imageDiv4 = document.querySelector("#image4");
                let imageDiv5 = document.querySelector("#image5");

                function displayFiles(files, container) {
                    if (files && files.length > 0) {
                        let filesHtml = files.map(file => {
                            if (file.secure_url.endsWith('.pdf')) {
                                return `<button onclick="window.open('${file.secure_url}')" class="btn btn-info p-3">فتح PDF</button>`;
                            } else {
                                return `<img src="${file.secure_url}" alt="Image" style="width: 100%; height: auto;">`;
                            }
                        }).join('');
                        container.innerHTML = filesHtml;
                    } else {
                        container.innerHTML = '<p>No file available</p>';
                    }
                }

                displayFiles(firstContract.ownerImage, imageDiv);
                displayFiles(firstContract.clientImage, imageDiv1);
                displayFiles(firstContract.sakImage, imageDiv2);
                displayFiles(firstContract.commercialImage, imageDiv3);
                displayFiles(firstContract.agencyImage, imageDiv4);
                displayFiles(firstContract.agentImage, imageDiv5);
            }

            out1 += `
                <tr>
                    <td>${contract.ownerID}</td>
                    <td>${contract.ownerDateDay}</td>
                    <td>${contract.ownerDateMonth}</td>
                    <td>${contract.ownerDateYear}</td>
                    <td>${contract.ownerPhone}</td>
                    <td>${contract.email}</td>
                    <td>${contract.bankName}</td>
                    <td>${contract.IBAN}</td>
                    <td>${contract.ownerBuildingNum}</td>
                    <td>${contract.ownerPostalCode}</td>
                    <td>${contract.ownerAddCode}</td>
                    <td>${contract.ownerDistrict}</td>
                    <td>${contract.ownerStreetName}</td>
                </tr>`;
                out2 += `
                <tr>
                    <td>${contract.BuildingNum}</td>
                    <td>${contract.buildingPostalCode}</td>
                    <td>${contract.buildingAddCode}</td>
                    <td>${contract.buildingDistrict}</td>
                    <td>${contract.buildingStreetName}</td>
                    <td>${contract.buildingFloorsNum}</td>
                    <td>${contract.buildingRentalUnitNum}</td>
                    <td>${contract.buildingSakNum}</td>
                    <td>${contract.buildingSakDay}</td>
                    <td>${contract.buildingSakMonth}</td>
                    <td>${contract.buildingSakYear}</td>
                </tr>`;
                out3 += `
                <tr>
                    <td>${contract.buildingType}</td>
                    <td>${contract.buildingUsage}</td>
                    <td>${contract.buildingMwaqefNum}</td>
                    <td>${contract.buildingName}</td>
                    <td>${contract.buildingDay}</td>
                    <td>${contract.buildingMonth}</td>
                    <td>${contract.buildingYear}</td>
                </tr>`;
                out4 += `
                <tr>
                    <td>${contract.ownerAgencyNum}</td>
                    <td>${contract.ownerAgencyDate}</td>
                    <td>${contract.ownerAgentName}</td>
                    <td>${contract.ownerAgencyPhone}</td>
                    <td>${contract.ownerAgencyDay}</td>
                    <td>${contract.ownerAgencyMonth}</td>
                    <td>${contract.ownerAgencyYear}</td>
                    <td>${contract.ownerAgencyEmail}</td>
                </tr>`;
                out5 += `
                <tr>
                    <td>${contract.commercialName}</td>
                    <td>${contract.commercialNumber}</td>
                    <td>${contract.commercialExpireDateDay}</td>
                    <td>${contract.commercialExpireDateMonth}</td>
                    <td>${contract.commercialExpireDateYear}</td>
                    <td>${contract.commercialBuildingNum}</td>
                    <td>${contract.commercialbuildingAddCode}</td>
                    <td>${contract.commercialbuildingPostalCode}</td>
                    <td>${contract.commercialbuildingDistrict}</td>
                    <td>${contract.commercialbuildingStreetName}</td>
                </tr>`;
                out6 += `
                <tr>
                    <td>${contract.commercialClientID}</td>
                    <td>${contract.commercialClientDay}</td>
                    <td>${contract.commercialClientMonth}</td>
                    <td>${contract.commercialClientYear}</td>
                    <td>${contract.commercialClientDayHJ}</td>
                    <td>${contract.commercialClientMonthHJ}</td>
                    <td>${contract.commercialClientYearHJ}</td> 
                    <td>${contract.commercialClientEmail}</td>
                    <td>${contract.commercialClientPhone}</td>
                </tr>`;
                out7 += `
                <tr>
                    <td>${contract.clientAgencyNum}</td>
                    <td>${contract.clientAgencyDateDay}</td>
                    <td>${contract.clientAgencyDateMonth}</td>
                    <td>${contract.clientAgencyDateYear}</td>
                    <td>${contract.clientAgencyPhone}</td>
                    <td>${contract.clientAgentID}</td>
                    <td>${contract.clientAgencyDay}</td>
                    <td>${contract.clientAgencyMonth}</td> 
                    <td>${contract.clientAgencyYear}</td>
                    <td>${contract.clientAgencyEmail}</td>
                </tr>`;
                out8 += `
                <tr>
                    <td>${contract.facilityNum}</td>
                    <td>${contract.facilityName}</td>
                </tr>`;
                out9 += `
                <tr>
                    <td>${contract.unitNum}</td>
                    <td>${contract.unitType}</td>
                    <td>${contract.unitLocation}</td>
                    <td>${contract.unitArea}</td>
                    <td>${contract.unitFrontFace}</td>
                    <td>${contract.unitFrontFaceDirection}</td>
                    <td>${contract.unitFloorNum}</td>
                    <td>${contract.unitMezzanine}</td> 
                    <td>${contract.unitFinishing}</td>
                </tr>`;
                out10 += `
                <tr>
                    <td>${contract.unitAdvertisingLength}</td>
                    <td>${contract.unitAdvertisingWidth}</td>
                    <td>${contract.unitAdvertisingLocation}</td>
                    <td>${contract.unitACQ}</td>
                    <td>${contract.unitACNormalNum}</td>
                    <td>${contract.unitACCnetralNum}</td>
                    <td>${contract.unitSplitNum}</td>
                    <td>${contract.unitWindowNum}</td> 
                </tr>`;
                out11 += `
                <tr>
                    <td>${contract.unitKitchenDrawerQ}</td>
                    <td>${contract.unitFornitureQ}</td>
                    <td>${contract.unitElecNum}</td>
                    <td>${contract.unitElecRead}</td>
                    <td>${contract.unitWaterNum}</td>
                    <td>${contract.unitWaterRead}</td>
                    <td>${contract.unitPublicServices}</td>
                    <td>${contract.unitPublicPrice}</td>
                </tr>`;
                out12 += `
                <tr>
                    <td>${contract.unitPrice}</td>
                    <td>${contract.unitInsurance}</td>
                    <td>${contract.unitPaymentType}</td>
                    <td>${contract.unitContractPeriod}</td>
                    <td>${contract.unitDay}</td>
                    <td>${contract.unitMonth}</td>
                    <td>${contract.unitYear}</td>
                    <td>${contract.unitNotes}</td>
                </tr>`;
                let q1=document.getElementById('q1')
                let q2=document.getElementById('q2')
                let q3=document.getElementById('q3')
                let q4=document.getElementById('q4')
                let q5=document.getElementById('q5')
                let q6=document.getElementById('q6')
                let q7=document.getElementById('q7')
                let q8=document.getElementById('q8')
                let q9=document.getElementById('q9')
                let q10=document.getElementById('q10')
                let q11=document.getElementById('q11')
                let q12=document.getElementById('q12')
                let q13=document.getElementById('q13')
                let q14=document.getElementById('q14')
                let q15=document.getElementById('q15')
                let q16=document.getElementById('q16')

                let Q1=document.getElementById('Q1')
                let Q2=document.getElementById('Q2')
                let Q3=document.getElementById('Q3')
                let Q4=document.getElementById('Q4')
                let Q5=document.getElementById('Q5')
                let Q6=document.getElementById('Q6')
                let Q7=document.getElementById('Q7')
                let Q8=document.getElementById('Q8')
                let Q9=document.getElementById('Q9')
                let Q10=document.getElementById('Q10')
                let Q11=document.getElementById('Q11')
                let Q12=document.getElementById('Q12')
                let Q13=document.getElementById('Q13')
                let Q14=document.getElementById('Q14')
                let Q15=document.getElementById('Q15')
                let Q16=document.getElementById('Q16')
                let Q17=document.getElementById('Q17')
                let Q18=document.getElementById('Q18')
                let Q19=document.getElementById('Q19')
                let Q20=document.getElementById('Q20')


                q1.innerHTML=`${contract.permissionQ1Answer}`
                q2.innerHTML=`${contract.permissionQ2Answer}`
                q3.innerHTML=`${contract.permissionQ3Answer}`
                q4.innerHTML=`${contract.permissionQ4Answer}`
                q5.innerHTML=`${contract.permissionQ5Answer}`
                q6.innerHTML=`${contract.permissionQ6Answer}`
                q7.innerHTML=`${contract.permissionQ7Answer}`
                q8.innerHTML=`${contract.permissionQ8Answer}`
                q9.innerHTML=`${contract.commitmentQ1Answer1}`
                q10.innerHTML=`${contract.commitmentQ1Answer2}`
                q11.innerHTML=`${contract.commitmentQ2Answer1}`
                q12.innerHTML=`${contract.commitmentQ2Answer2}`
                q13.innerHTML=`${contract.commitmentQ3Answer1}`
                q14.innerHTML=`${contract.commitmentQ3Answer2}`
                q15.innerHTML=`${contract.commitmentQ4Answer1}`
                q16.innerHTML=`${contract.commitmentQ4Answer2}`



                Q1.innerHTML=`${contract.addcommitmentQ1}`
                Q2.innerHTML=`${contract.addcommitmentQ2}`
                Q3.innerHTML=`${contract.addcommitmentQ3}`
                Q4.innerHTML=`${contract.addcommitmentQ4}`
                Q5.innerHTML=`${contract.addcommitmentQ5}`
                Q6.innerHTML=`${contract.addcommitmentQ6}`
                Q7.innerHTML=`${contract.addcommitmentQ7}`
                Q8.innerHTML=`${contract.addcommitmentQ8}`
                Q9.innerHTML=`${contract.addcommitmentQ9}`
                Q10.innerHTML=`${contract.addcommitmentQ10}`
                Q11.innerHTML=`${contract.addcommitmentQ11}`
                Q12.innerHTML=`${contract.addcommitmentQ12}`
                Q13.innerHTML=`${contract.addcommitmentQ13}`
                Q14.innerHTML=`${contract.addcommitmentQ14}`
                Q15.innerHTML=`${contract.addcommitmentQ15}`
                Q16.innerHTML=`${contract.addcommitmentQ16}`
                Q17.innerHTML=`${contract.addcommitmentQ17}`
                Q18.innerHTML=`${contract.addcommitmentQ18}`
                Q19.innerHTML=`${contract.addcommitmentQ19}`
                Q20.innerHTML=`${contract.addcommitmentQ20}`
        });


        placeholder1.innerHTML = out1;
        placeholder2.innerHTML = out2;
        placeholder3.innerHTML = out3;
        placeholder4.innerHTML = out4;
        placeholder5.innerHTML = out5;
        placeholder6.innerHTML = out6;
        placeholder7.innerHTML = out7;
        placeholder8.innerHTML = out8;
        placeholder9.innerHTML = out9;
        placeholder10.innerHTML = out10;
        placeholder11.innerHTML = out11;
        placeholder12.innerHTML = out12;











        
     

        let totalItems =await  getTotalNumberOfItems();
        console.log(totalItems)
        document.querySelector("#prevButton").disabled = page === 1;
        document.querySelector("#nextButton1").disabled = page === totalItems;
    } catch (error) {
        console.error("An error occurred while fetching the data:", error);
    }
}


document.getElementById("nextButton1").addEventListener("click", () => {
    currentPage++;
    document.getElementById("objectNumber").innerText = ` ${currentPage}`;
    fetchPage(currentPage);
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById("objectNumber").innerText = ` ${currentPage}`;
        fetchPage(currentPage);
    }
});

window.onload = function() {
    fetchPage(currentPage);
};










