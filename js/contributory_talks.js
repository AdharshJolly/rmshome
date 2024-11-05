const categories = [
  "algebra",
  "algebraic-geometry",
  "complex-analysis",
  "functional-analysis",
  "geometry-and-topology",
  "groups-and-their-representation",
  "harmonic-analysis",
  "partial-differential-equations",
  "probability-theory",
  "number-theory",
];

fetch("/data/abstract.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    for (category of categories) {
      let placeholder = document
        .querySelector(`#${category}`)
        .querySelector("#data-output");
      let out = "";

      for (let item of items) {
        if (item.category == category) {
          out += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.title}</td>
                    <td>
                      <a class="download-link" href=${item.link}>
                        ${
                          item.link
                            ? `<i class="fa-solid fa-download"></i>`
                            : ``
                        }
                      </a>
                    </td>
                </tr>
            `;
        }
      }

      placeholder.innerHTML = out;
    }
  });

// <a class="download-link" href=${id? `https://drive.google.com/uc?export=download&id=${id}`: ``}><i class="fa-solid fa-download"></i> </a>
