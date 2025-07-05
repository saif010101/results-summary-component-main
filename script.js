
const summaryList = document.querySelector('.summaryList');
const TOTAL_SCORE = 100;


// fetch data from local json file and send to populate function
fetch('./data.json')
    .then(res => res.json())
        .then(jsonData => {
            jsonData.forEach( data => {
                const summarySection = document.createElement('section');
                summarySection.classList.add('summaryItem');
                summarySection.style.backgroundColor = `var(${data.bgColor})`;


                // attr = attribute
                const attrImage = document.createElement('img');
                attrImage.src = data.icon;
                const attrType = document.createElement('h1');
                attrType.textContent = data.category;
                attrType.style.color = `var(${data.textColor})`;
                
                const actualScore = document.createElement('p');
                actualScore.classList.add('scoreValue');
                actualScore.textContent = data.score;
                
                const totalScore = document.createElement('p');
                totalScore.textContent = `/ ${TOTAL_SCORE}`;
                
                summarySection.appendChild(attrImage);
                summarySection.appendChild(attrType);
                summarySection.appendChild(actualScore);
                summarySection.appendChild(totalScore);

                summaryList.appendChild(summarySection);
            });
});