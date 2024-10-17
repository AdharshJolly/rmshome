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

// https://drive.google.com/file/d/1cVX_B367BSuVt31ocav1VeXM6O_440Gt/view?usp=sharing

fetch("../data/abstract.json")
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
          let link = item.link.split("/");
          let id = link[5];

          out += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.title}</td>
                    <td>
                      <a class="download-link" href=${
                        id
                          ? `https://drive.google.com/uc?export=download&id=${id}`
                          : ``
                      }>
                        ${id ? `<i class="fa-solid fa-download"></i>` : ``}
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
