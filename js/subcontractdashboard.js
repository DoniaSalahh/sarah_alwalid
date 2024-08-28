






// let currentPage = 1;
// let totalPages = 1; 
// const itemsPerPage = 10; 
// let contracts = []; 
// async function fetchPage(page) {
//     try {
//         let res = await axios.get(`http://inmaa.vercel.app/realEsate/?page=${page}`);
//         console.log(res.data); 
//         let totalItems = res.data.totalItems; 
//         totalPages = Math.ceil(totalItems / itemsPerPage); 
//         let placeholder1 = document.querySelector("#data1");
//         let placeholder2 = document.querySelector("#data2");
//         let placeholder3 = document.querySelector("#data3");
//         let placeholder4 = document.querySelector("#data4");
//         let placeholder5 = document.querySelector("#data5");
//         let placeholder6 = document.querySelector("#data6");
//         let placeholder7 = document.querySelector("#data7");
//         let placeholder8 = document.querySelector("#data8");
//         let out1 = "";
//         let out2 = "";
//         let out3 = "";
//         let out4 = "";
//         let out5 = "";
//         let out6 = "";
//         let out7 = "";
//         let out8 = "";
//         contracts = res.data.data; 
//         contracts.forEach((contract) => {
//         if (contracts.length > 0) {
//             const firstContract = contracts[0]; 
//             let imageDiv = document.querySelector("#image");
//             let imageDiv1 = document.querySelector("#image1");
//             let imageDiv2= document.querySelector("#image2");
//             let imageDiv3 = document.querySelector("#image3");
//             let imageDiv4 = document.querySelector("#image4");
//             let imageDiv5 = document.querySelector("#image5");
//             if (firstContract.ownerImage && firstContract.ownerImage.length > 0) {
//                 let imagesHtml = firstContract.ownerImage.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" > `
//                 ).join('');
//                 imageDiv.innerHTML = imagesHtml;
//             } else {
//                 imageDiv.innerHTML = '<p>No image available</p>';
//             }
//             if (firstContract.clientImage && firstContract.clientImage.length > 0) {
//                 let imagesHtml = firstContract.clientImage.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" >`
//                 ).join('');
//                 imageDiv1.innerHTML = imagesHtml;
//             } else {
//                 imageDiv1.innerHTML = '<p>No image available</p>';
//             }
//             if (firstContract.sakImage && firstContract.sakImage.length > 0) {
//                 let imagesHtml = firstContract.sakImage.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" >`
//                 ).join('');
//                 imageDiv2.innerHTML = imagesHtml;
//             } else {
//                 imageDiv2.innerHTML = '<p>No image available</p>';
//             }
//             if (firstContract.familyImages && firstContract.familyImages.length > 0) {
//                 let imagesHtml = firstContract.familyImages.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" >`
//                 ).join('');
//                 imageDiv3.innerHTML = imagesHtml;
//             } else {
//                 imageDiv3.innerHTML = '<p>No image available</p>';
//             }
//             if (firstContract.agencyImage && firstContract.agencyImage.length > 0) {
//                 let imagesHtml = firstContract.agencyImage.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" >`
//                 ).join('');
//                 imageDiv4.innerHTML = imagesHtml;
//             } else {
//                 imageDiv4.innerHTML = '<p>No image available</p>';
//             }
//             if (firstContract.agentImage && firstContract.agentImage.length > 0) {
//                 let imagesHtml = firstContract.agentImage.map(img => 
//                     `<img src="${img.secure_url}" alt="Owner Image" >`
//                 ).join('');
//                 imageDiv5.innerHTML = imagesHtml;
//             } else {
//                 imageDiv5.innerHTML = '<p>No image available</p>';
//             }
//         }
//             out1 += `
//                 <tr>
//                     <td>${contract.ownerName}</td>
//                     <td>${contract.ownerID}</td>
//                     <td>${contract.dayBD}</td>
//                     <td>${contract.monthBD}</td>
//                     <td>${contract.yearBD}</td>
//                     <td>${contract.ownerPhone}</td>
//                     <td>${contract.email}</td>
//                     <td>${contract.bankName}</td>
//                     <td>${contract.IBAN}</td>
//                     <td>${contract.ownerBuildingNum}</td>
//                 </tr>`;

//             out2 += `
//             <tr>
//                 <td>${contract.postalCode}</td>
//                 <td>${contract.addCode}</td>
//                 <td>${contract.district}</td>
//                 <td>${contract.streetName}</td>
//                 <td>${contract.sakNumber}</td>
//                 <td>${contract.sakDay}</td>
//                 <td>${contract.sakMonth}</td>
//                 <td>${contract.sakYear}</td>
//                 <td>${contract.floorNum}</td>
//                 <td>${contract.aprtmentsNum}</td>
//             </tr>`;

//             out3 += `
//             <tr>
//                 <td>${contract.mawaqfNum}</td>
//                 <td>${contract.elevatorNum}</td>
//                 <td>${contract.buildingName}</td>
//                 <td>${contract.buildingDay}</td>
//                 <td>${contract.buildingMonth}</td>
//                 <td>${contract.buildingYear}</td>
//             </tr>`;
//               out4 += `
//               <tr>
//                 <td>${contract.ownerAgencyNum}</td>
//                 <td>${contract.ownerAgencyDate}</td>
//                 <td>${contract.ownerAgentName}</td>
//                 <td>${contract.ownerAgencyPhone}</td>
//                 <td>${contract.ownerAgencyDay}</td>
//                 <td>${contract.ownerAgencyMonth}</td>
//                 <td>${contract.ownerAgencyYear}</td>
//                 <td>${contract.ownerAgencyEmail}</td>
//               </tr>`;
//               out5 += `
//               <tr>
//                 <td>${contract.clientName}</td>
//                 <td>${contract.clientPhone}</td>
//                 <td>${contract.clientIDNumber}</td>
//                 <td>${contract.clientEmail}</td>
//                 <td>${contract.clientDayBD}</td>
//                 <td>${contract.clientMonthBD}</td>
//                 <td>${contract.clientYearBD}</td>
//                 <td>${contract.clientDayBDHJ}</td>
//                 <td>${contract.clientMonthBDHJ}</td>
//                 <td>${contract.clientYearBDHJ}</td>
//               </tr>`;
//               out6 += `
//               <tr>
//                 <td>${contract.unitNum}</td>
//                 <td>${contract.unitFloor}</td>
//                 <td>${contract.unitBedRooms}</td>
//                 <td>${contract.unitSeats}</td>
//                 <td>${contract.unitHalls}</td>
//                 <td>${contract.unitMaidRooms}</td>
//                 <td>${contract.unitStoreNum}</td>
//                 <td>${contract.unitKitchenNum}</td>
//                 <td>${contract.unitBathroomNum}</td>
//                 <td>${contract.unitYardNum}</td>
//                 <td>${contract.unitTypeQ}</td>
//                 <td>${contract.unitTypeOther}</td>
//               </tr>`;
//               out7= `
//               <tr>
//                 <td>${contract.unitFornitureQ}</td>
//                 <td>${contract.unitKitchenDrawerQ}</td>
//                 <td>${contract.unitACQ}</td>
//                 <td>${contract.unitACNormalNum}</td>
//                 <td>${contract.unitACCnetralNum}</td>
//                 <td>${contract.unitSplitNum}</td>
//                 <td>${contract.unitWindowNum}</td>
//                 <td>${contract.unitElecNum}</td>
//                 <td>${contract.unitElecRead}</td>
//                 <td>${contract.unitWaterNum}</td>
//                 <td>${contract.unitWaterRead}</td>
//               </tr>`;
//               out8= `
//               <tr>
//                 <td>${contract.unitGasNum}</td>
//                 <td>${contract.unitGasRead}</td>
//                 <td>${contract.unitPrice}</td>
//                 <td>${contract.unitInsurance}</td>
//                 <td>${contract.unitDay}</td>
//                 <td>${contract.unitMonth}</td>
//                 <td>${contract.unitYear}</td>
//                 <td>${contract.unitPayment}</td>
//                 <td>${contract.unitContract}</td>
//                 <td>${contract.unitAutoRenewal}</td>
//                 <td>${contract.unitNotes}</td>
//               </tr>`;
//         });
//         placeholder1.innerHTML = out1;
//         placeholder2.innerHTML = out2;
//         placeholder3.innerHTML = out3;
//         placeholder4.innerHTML = out4;
//         placeholder5.innerHTML = out5;
//         placeholder6.innerHTML = out6;
//         placeholder7.innerHTML = out7;
//         placeholder8.innerHTML = out8;
//         // createPagination();
//     } catch (error) {
//         console.error("Error fetching data:", error.response ? error.response.data : error.message);
//     }
// }
// window.onload = function() {
//     fetchPage(currentPage);
// };
// let totalPages = 1; 
// const itemsPerPage = 10; 
// let contracts = [];

let currentPage = 1;


async function getTotalNumberOfItems() {
    try {
        let response = await axios.get('https://inmaa.vercel.app/elbaten');
        let totalItems = response.data.data.length; 
        return totalItems;
    } catch (error) {
        console.error("An error occurred while fetching the total number of items:", error);
        return 0;
    }
}


async function fetchPage(page) {
    try {
        let res = await axios.get(`https://inmaa.vercel.app/elbaten/page?page=${page}`);
        console.log(res.data); 
        contracts = res.data.data; 
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
        contracts = res.data.data; 
        
        contracts.forEach((contract) => {
            if (contracts.length > 0) {
                const firstContract = contracts[0]; 
                let imageDiv = document.querySelector("#image1");
                let imageDiv1 = document.querySelector("#image2");
                let imageDiv2 = document.querySelector("#image3");

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
                displayFiles(firstContract.agentImage, imageDiv2);
            }

            out1 += `
                <tr>
                    <td>${contract.contractMainNum}</td>
                    <td>${contract.contractNum}</td>
                    <td>${contract.contractType}</td>
                    <td>${contract.contractDateDay}</td>
                    <td>${contract.contractDateMonth}</td>
                    <td>${contract.contractDateYear}</td>
                    <td>${contract.contractPlace}</td>
                    <td>${contract.contractStartDateDay}</td>
                    <td>${contract.contractStartDateMonth}</td>
                    <td>${contract.contractStartDateYear}</td>
                    <td>${contract.contractEndDateDay}</td>
                    <td>${contract.contractEndDateMonth}</td>
                    <td>${contract.contractEndDateYear}</td>
                </tr>`;

            out2 += `
                <tr>
                    <td>${contract.ownerName}</td>
                    <td>${contract.ownerNationality}</td>
                    <td>${contract.ownerID}</td>
                    <td>${contract.ownerIdType}</td>
                    <td>${contract.ownerPhone}</td>
                    <td>${contract.ownerEmail}</td>
                </tr>`;

            out3 += `
                <tr>
                    <td>${contract.clientName}</td>
                    <td>${contract.clientNationality}</td>
                    <td>${contract.clientID}</td>
                    <td>${contract.clientIdType}</td>
                    <td>${contract.clientPhone}</td>
                    <td>${contract.clientEmail}</td>
                </tr>`;
            out4 += `
                <tr>
                    <td>${contract.facilityName}</td>
                    <td>${contract.facilityAddress}</td>
                    <td>${contract.facilityRecordNum}</td>
                    <td>${contract.facilityPhone}</td>
                    <td>${contract.agentName}</td>
                    <td>${contract.agentNationality}</td>
                    <td>${contract.agentID}</td>
                    <td>${contract.agentIdType}</td>
                    <td>${contract.agentPhone}</td>
                    <td>${contract.agentEmail}</td>


                </tr>`;

            out5 += `
                <tr>
                    <td>${contract.sakNumber}</td>
                    <td>${contract.sakIssuer}</td>
                    <td>${contract.sakDateDay}</td>
                    <td>${contract.sakDateMonth}</td>
                    <td>${contract.sakDateYear}</td>
                    <td>${contract.sakAddress}</td>


                </tr>`;
                
            out6 += `
                <tr>
                    <td>${contract.buildingAdress}</td>
                    <td>${contract.buildingType}</td>
                    <td>${contract.buildingUsage}</td>
                    <td>${contract.buildingFloorNum}</td>
                    <td>${contract.buildingUnitsNum}</td>
                    <td>${contract.buildingElevatorNum}</td>
                    <td>${contract.buildingMawaqefNum}</td>
                </tr>`;
                
            out7= `
                <tr>
                    <td>${contract.unitNum}</td>
                    <td>${contract.unitType}</td>
                    <td>${contract.unitOwner}</td>
                    <td>${contract.unitFloorNum}</td>
                    <td>${contract.unitFurnishingcon}</td>
                    <td>${contract.unitKitchenCabinets}</td>
                    <td>${contract.unitRoomType}</td>
                    <td>${contract.unitRoomNum}</td>
                </tr>`;
                
            out8= `
                <tr>
                    <td>${contract.unitACType}</td>
                    <td>${contract.unitACNum}</td>
                    <td>${contract.unitElecNum}</td>
                    <td>${contract.unitElecRead}</td>
                    <td>${contract.unitWaterNum}</td>
                    <td>${contract.unitWaterRead}</td>
                    <td>${contract.unitGasNum}</td>
                    <td>${contract.unitGasRead}</td>
                </tr>`;
                out9 += `
                <tr>
                    <td>${contract.effortPrice}</td>
                    <td>${contract.guaranteePrice}</td>
                    <td>${contract.elecMonthlyPrice}</td>
                    <td>${contract.gasMonthlyPrice}</td>
                    <td>${contract.waterMonthlyPrice}</td>
                    <td>${contract.mowafqMonthlyPrice}</td>
                    <td>${contract.MonthlyPrice}</td>
                </tr>`;
                out10 += `
                <tr>
                    <td>${contract.mawaqefRentNum}</td>
                    <td>${contract.periodicRentPayment}</td>
                    <td>${contract.rentPaymentCycle}</td>
                    <td>${contract.lastRentPayment}</td>
                    <td>${contract.rentCycleNum}</td>
                    <td>${contract.totalContract}</td>
                </tr>`;
                out11 += `
                <tr>
                    <td>${contract.serialNumber}</td>
                    <td>${contract.serialDateDay}</td>
                    <td>${contract.serialDateMonth}</td>
                    <td>${contract.serialDateYear}</td>
                    <td>${contract.serialDateEndDay}</td>
                    <td>${contract.serialDateEndMonth}</td>
                    <td>${contract.serialDateEndYear}</td>
                    <td>${contract.serialDateHJDay}</td>
                    <td>${contract.serialDateHJMonth}</td>
                    <td>${contract.serialDateHJYear}</td>
                    <td>${contract.serialDateEndHJDay}</td>
                    <td>${contract.serialDateEndHJMonth}</td>
                    <td>${contract.serialDateEndHJYear}</td>
                    <td>${contract.serialValue}</td>

                </tr>`;
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






