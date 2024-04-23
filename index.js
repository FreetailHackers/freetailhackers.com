function toggleNavbar() {
    const options = document.querySelector('.options')
    options.classList.toggle('options-show')
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-toggled')
}

window.onload = function() {
    document.querySelector('.toggle').addEventListener('click', toggleNavbar)
}

function imageHover(element) {
    var currSrc = element.src; 
    const path = currSrc.indexOf('img')
    const dotPos = currSrc.indexOf('.', path)
    var newSrc = currSrc.substring(path, dotPos) + "HOVER.png" 
    element.setAttribute('src', newSrc)
}

function imageHoverOut(element) {
    var currSrc = element.src; 
    const cutOut = currSrc.indexOf('HOVER')
    var newSrc = currSrc.substring(0, cutOut) + currSrc.substring(cutOut + 5);
    element.setAttribute('src', newSrc)
}

window.onscroll = function() {
    const navbar = document.querySelector('.navbar')
    const alpha = (window.scrollY > 100 ? 1 : window.scrollY / 100);
    navbar.style.backgroundColor =  'rgba(65, 27, 163, ' + alpha + ')'
}

function createAlumniCards(alumni) {
    const container = document.getElementById('alumniContainer');
    container.innerHTML = ''; // Clear existing cards
  
    alumni.forEach(alumnus => {
      const card = document.createElement('div');
      card.classList.add('alumni-card');
  
      const name = document.createElement('h3');
      name.textContent = alumnus.name;
  
      const email = document.createElement('p');
      email.textContent = `Email: ${alumnus.email}`;
  
      const major = document.createElement('p');
      major.textContent = `Major: ${alumnus.major}`;
  
      const graduationDate = document.createElement('p');
      graduationDate.textContent = `Graduation: ${alumnus.graduationDate}`;

      const team = document.createElement('p');
      team.textContent = `Team: ${alumnus.team}`;

      const role = document.createElement('p');
      role.textContent = `Role: ${alumnus.role}`;
  
      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(major);
      card.appendChild(graduationDate);
      card.appendChild(team);
      card.appendChild(role);
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle navbar
    function toggleNavbar() {
        const options = document.querySelector('.options');
        options.classList.toggle('options-show');
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('navbar-toggled');
    }

    document.querySelector('.toggle').addEventListener('click', toggleNavbar);

    // Define alumni data
    const alumni = [
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2024', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' },
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2022', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' },
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2024', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' },
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2021', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' },
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2020', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' },
        { name: 'Jane Doe', email: 'jane.doe@example.com', major: 'Computer Science', graduationDate: '2022', team: 'Tech', role: 'Organizer' },
        { name: 'John Smith', email: 'john.smith@example.com', major: 'Mechanical Engineering', graduationDate: '2021', team: 'Logistics', role: 'Director' }
        
        // Add more alumni objects here
    ];

    // Function to create and display alumni cards
    function createAlumniCards(alumni) {
        const container = document.getElementById('alumniContainer');
        container.innerHTML = ''; // Clear existing cards
      
        alumni.forEach(alumnus => {
          const card = document.createElement('div');
          card.classList.add('alumni-card');
      
          // Create elements for each piece of information
          const name = document.createElement('h3');
          name.textContent = alumnus.name;
          const email = document.createElement('p');
          email.textContent = `Email: ${alumnus.email}`;
          const major = document.createElement('p');
          major.textContent = `Major: ${alumnus.major}`;
          const graduationDate = document.createElement('p');
          graduationDate.textContent = `Graduation: ${alumnus.graduationDate}`;
          const team = document.createElement('p');
          team.textContent = `Team: ${alumnus.team}`;
          const role = document.createElement('p');
          role.textContent = `Role: ${alumnus.role}`;
    
          // Append each element to the card
          card.appendChild(name);
          card.appendChild(email);
          card.appendChild(major);
          card.appendChild(graduationDate);
          card.appendChild(team);
          card.appendChild(role);
    
          // Append the card to the container
          container.appendChild(card);
        });
    }
    

    // Initial call to display all alumni
    createAlumniCards(alumni);

    // Filter buttons click event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            applyFilters(); // Call the filter application
        });
    });

    // Reset filters button
    document.getElementById('resetFilters').addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.backgroundColor('rgb(128, 128, 128)'));
        document.getElementById('gradYear').value = document.getElementById('gradYear').max;
        applyFilters(); // Reset view
    });

    // Function to apply filters
    function applyFilters() {
        const selectedTeams = Array.from(document.querySelectorAll('.filter-btn[data-type="team"].active')).map(btn => btn.dataset.value);
        const selectedRoles = Array.from(document.querySelectorAll('.filter-btn[data-type="role"].active')).map(btn => btn.dataset.value);
        const selectedYear = document.getElementById('gradYear').value;

        const filteredAlumni = alumni.filter(alumnus => 
            (selectedTeams.length === 0 || selectedTeams.includes(alumnus.team)) &&
            (selectedRoles.length === 0 || selectedRoles.includes(alumnus.role)) &&
            parseInt(alumnus.graduationDate) <= parseInt(selectedYear)
        );

        createAlumniCards(filteredAlumni);
    }

    
    const filterbtns = document.querySelectorAll('.filter-btn');

    // Optional: Explicitly set the initial color if not set in CSS
    filterbtns.forEach(btn => {
        if (!btn.style.backgroundColor) {
            btn.style.backgroundColor = 'rgb(128, 128, 128)'; // Equivalent to #808080
        }
    });

    filterbtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentColor = window.getComputedStyle(btn).backgroundColor;
            if (currentColor === 'rgb(128, 128, 128)') { // Checking in rgb format
                btn.style.backgroundColor = 'rgb(217, 217, 217)'; // Equivalent to #D9D9D9
            } else {
                btn.style.backgroundColor = 'rgb(128, 128, 128)'; // Equivalent to #808080
            }
        });
    });





    
});


  ;