function toggleNavbar() {
  const options = document.querySelector(".options");
  options.classList.toggle("options-show");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-toggled");
}

window.onload = function () {
  document.querySelector(".toggle").addEventListener("click", toggleNavbar);
};

function imageHover(element) {
  var currSrc = element.src;
  const path = currSrc.indexOf("img");
  const dotPos = currSrc.indexOf(".", path);
  var newSrc = currSrc.substring(path, dotPos) + "HOVER.png";
  element.setAttribute("src", newSrc);
}

function imageHoverOut(element) {
  var currSrc = element.src;
  const cutOut = currSrc.indexOf("HOVER");
  var newSrc = currSrc.substring(0, cutOut) + currSrc.substring(cutOut + 5);
  element.setAttribute("src", newSrc);
}

window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const alpha = window.scrollY > 100 ? 1 : window.scrollY / 100;
  navbar.style.backgroundColor = "rgba(65, 27, 163, " + alpha + ")";
};

// Alumni Page
class Alumn {
  constructor(name, team, position, graduationDate, url, employment) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.graduationDate = graduationDate;
    this.url = url;
    this.employment = employment;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const alumni = [];
  fetch("./alumni.csv")
    .then((response) => response.text())
    .then((csvText) => {
      const { data, errors } = Papa.parse(csvText, { header: true });

      if (errors.length === 0) {
        data.forEach((row) => {
          const name = row.Name || null;
          const team = row.Team ? row.Team.replace(/\s/g, "").split(",") : null;
          const position = row.Position || null;
          const graduationDate = row["Graduation Date"] || null;
          const url = row.LinkedIn || null;
          const employment = row.Employment || null;

          alumni.push(
            new Alumn(name, team, position, graduationDate, url, employment)
          );
        });

        createAlumniCards(alumni);
      } else {
        console.error("Error parsing CSV:", errors);
      }
    })
    .catch((error) => {
      console.error("Error fetching CSV:", error);
    });

  function createAlumniCards(alumni) {
    const container = document.getElementById("alumniContainer");
    container.innerHTML = "";

    alumni.forEach((alumnus) => {
      const card = document.createElement("div");
      card.classList.add("alumni-card");

      if (alumnus.name !== null) {
        const name = document.createElement("a");
        name.href = alumnus.url === null ? "#" : alumnus.url;
        name.textContent = alumnus.name;
        card.appendChild(name);
      }

      if (alumnus.team !== null) {
        const team = document.createElement("p");
        team.textContent = `Team: ${alumnus.team.join(", ")}`;
        card.appendChild(team);
      }

      if (alumnus.position !== null) {
        const position = document.createElement("p");
        position.textContent = `Position: ${alumnus.position}`;
        card.appendChild(position);
      }

      if (alumnus.graduationDate !== null) {
        const graduationDate = document.createElement("p");
        graduationDate.textContent = `Graduation Date: ${alumnus.graduationDate}`;
        card.appendChild(graduationDate);
      }

      if (alumnus.employment !== null) {
        const employment = document.createElement("p");
        employment.textContent = `Employment: ${alumnus.employment}`;
        card.appendChild(employment);
      }

      container.appendChild(card);
    });
  }

  function applyTeamFilter(selectedTeams) {
    if (selectedTeams.length === 0) {
      createAlumniCards(alumni);
    } else {
      const filteredAlumni = alumni.filter(
        (alumnus) =>
          alumnus.team &&
          alumnus.team.some((team) => selectedTeams.includes(team))
      );
      createAlumniCards(filteredAlumni);
    }
  }

  const filterbtns = document.querySelectorAll(".filter-btn[data-type='team']");
  filterbtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const selectedTeams = Array.from(
        document.querySelectorAll(".filter-btn[data-type='team'].active")
      ).map((btn) => btn.dataset.value);
      applyTeamFilter(selectedTeams);
    });
  });

  document.getElementById("resetFilters").addEventListener("click", () => {
    filterbtns.forEach((btn) => btn.classList.remove("active"));
    applyTeamFilter([]);
  });
});
