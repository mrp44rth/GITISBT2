// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"Amita","58018238","./SBT2/Amita/1.bmp","./SBT2/Amita/2.bmp","./SBT2/Amita/3.bmp","./SBT2/Amita/4.bmp","./SBT2/Amita/5.bmp"],
[i++,"Amita 2","27673274","./SBT2/Amita 2/1.bmp","./SBT2/Amita 2/2.bmp","./SBT2/Amita 2/3.bmp","./SBT2/Amita 2/4.bmp","./SBT2/Amita 2/5.bmp"],
[i++,"AMITA 61","****","./SBT2/AMITA 61/1.bmp","./SBT2/AMITA 61/2.bmp","./SBT2/AMITA 61/3.bmp","./SBT2/AMITA 61/4.bmp","./SBT2/AMITA 61/5.bmp"],
[i++,"KAVITA GUPTA 128","33318038","./SBT2/KAVITA GUPTA 128/1.bmp","./SBT2/KAVITA GUPTA 128/2.bmp","./SBT2/KAVITA GUPTA 128/3.bmp","./SBT2/KAVITA GUPTA 128/4.bmp","./SBT2/KAVITA GUPTA 128/5.bmp"],
[i++,"Kusum 8","55368293","./SBT2/Kusum 8/1.bmp","./SBT2/Kusum 8/2.bmp","./SBT2/Kusum 8/3.bmp","./SBT2/Kusum 8/4.bmp","./SBT2/Kusum 8/5.bmp"],
[i++,"Mamta 10","41494661","./SBT2/Mamta 10/1.bmp","./SBT2/Mamta 10/2.bmp","./SBT2/Mamta 10/3.bmp","./SBT2/Mamta 10/4.bmp","./SBT2/Mamta 10/5.bmp"],
[i++,"Mamta 126","****","./SBT2/Mamta 126/1.bmp","./SBT2/Mamta 126/2.bmp","./SBT2/Mamta 126/3.bmp","./SBT2/Mamta 126/4.bmp","./SBT2/Mamta 126/5.bmp"],
[i++,"Neha Singh","04422637","./SBT2/Neha Singh/1.bmp","./SBT2/Neha Singh/2.bmp","./SBT2/Neha Singh/3.bmp","./SBT2/Neha Singh/4.bmp","./SBT2/Neha Singh/5.bmp"],
[i++,"Pratibha 1","****","./SBT2/Pratibha 1/1.bmp","./SBT2/Pratibha 1/2.bmp","./SBT2/Pratibha 1/3.bmp","./SBT2/Pratibha 1/4.bmp","./SBT2/Pratibha 1/5.bmp"],
[i++,"Pratibha Maurya 9","93798102","./SBT2/Pratibha Maurya 9/1.bmp","./SBT2/Pratibha Maurya 9/2.bmp","./SBT2/Pratibha Maurya 9/3.bmp","./SBT2/Pratibha Maurya 9/4.bmp","./SBT2/Pratibha Maurya 9/5.bmp"],
[i++,"Preeti 121","63820948","./SBT2/Preeti 121/1.bmp","./SBT2/Preeti 121/2.bmp","./SBT2/Preeti 121/3.bmp","./SBT2/Preeti 121/4.bmp","./SBT2/Preeti 121/5.bmp"],
[i++,"PRIYANKA","03027453","./SBT2/PRIYANKA/1.bmp","./SBT2/PRIYANKA/2.bmp","./SBT2/PRIYANKA/3.bmp","./SBT2/PRIYANKA/4.bmp","./SBT2/PRIYANKA/5.bmp"],
[i++,"SBT AMITA","****","./SBT2/SBT AMITA/1.bmp","./SBT2/SBT AMITA/2.bmp","./SBT2/SBT AMITA/3.bmp","./SBT2/SBT AMITA/4.bmp","./SBT2/SBT AMITA/5.bmp"],
[i++,"SBT KUSUM 25","55368293","./SBT2/SBT KUSUM 25/1.bmp","./SBT2/SBT KUSUM 25/2.bmp","./SBT2/SBT KUSUM 25/3.bmp","./SBT2/SBT KUSUM 25/4.bmp","./SBT2/SBT KUSUM 25/5.bmp"],
[i++,"SBT Mamta 10","****","./SBT2/SBT Mamta 10/1.bmp","./SBT2/SBT Mamta 10/2.bmp","./SBT2/SBT Mamta 10/3.bmp","./SBT2/SBT Mamta 10/4.bmp","./SBT2/SBT Mamta 10/5.bmp"],
[i++,"SBT PREKSHA","86329672","./SBT2/SBT PREKSHA/1.bmp","./SBT2/SBT PREKSHA/2.bmp","./SBT2/SBT PREKSHA/3.bmp","./SBT2/SBT PREKSHA/4.bmp","./SBT2/SBT PREKSHA/5.bmp"],
[i++,"SBT SHIVANI 1","10392919","./SBT2/SBT SHIVANI 1/1.bmp","./SBT2/SBT SHIVANI 1/2.bmp","./SBT2/SBT SHIVANI 1/3.bmp","./SBT2/SBT SHIVANI 1/4.bmp","./SBT2/SBT SHIVANI 1/5.bmp"],
[i++,"SBT SHIVANI 58","****","./SBT2/SBT SHIVANI 58/1.bmp","./SBT2/SBT SHIVANI 58/2.bmp","./SBT2/SBT SHIVANI 58/3.bmp","./SBT2/SBT SHIVANI 58/4.bmp","./SBT2/SBT SHIVANI 58/5.bmp"],
[i++,"SBT SHIVANI VISHWAKARMA 77","83757088","./SBT2/SBT SHIVANI VISHWAKARMA 77/1.bmp","./SBT2/SBT SHIVANI VISHWAKARMA 77/2.bmp","./SBT2/SBT SHIVANI VISHWAKARMA 77/3.bmp","./SBT2/SBT SHIVANI VISHWAKARMA 77/4.bmp","./SBT2/SBT SHIVANI VISHWAKARMA 77/5.bmp"],
[i++,"SBT VANDNA","02793900","./SBT2/SBT VANDNA/1.bmp","./SBT2/SBT VANDNA/2.bmp","./SBT2/SBT VANDNA/3.bmp","./SBT2/SBT VANDNA/4.bmp","./SBT2/SBT VANDNA/5.bmp"],
[i++,"SHIVANI","****","./SBT2/SHIVANI/1.bmp","./SBT2/SHIVANI/2.bmp","./SBT2/SHIVANI/3.bmp","./SBT2/SHIVANI/4.bmp","./SBT2/SHIVANI/5.bmp"],
[i++,"SMI SHIVANI SINGH 95","****","./SBT2/SMI SHIVANI SINGH 95/1.bmp","./SBT2/SMI SHIVANI SINGH 95/2.bmp","./SBT2/SMI SHIVANI SINGH 95/3.bmp","./SBT2/SMI SHIVANI SINGH 95/4.bmp","./SBT2/SMI SHIVANI SINGH 95/5.bmp"]
];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
