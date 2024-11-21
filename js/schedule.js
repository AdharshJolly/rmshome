fetch("/data/schedule.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    let placeholder = document.querySelector("#schedule");
    let out = ``;
    items.map((item) => {
      out += `
      <div style="margin-top: 5px">
        <button type="button" class="collapsible">${item.category}</button>
        <div class="content">
      `;
      if (item.subcategory) {
        item.subcategory.map((sc) => {
          out += `
          
          <div style="padding: 4px 2px">
            <button type="button" class="collapsible sub-collapsible" id="sub-collapsible">
              ${sc.category}
            </button>
            <div class="content" style="padding: 0;">
              <div class="table-responsive" style="padding: 4px">
                <table class="schedule-table table table-bordered align-middle abot-txt-innr">
                  <thead>
                    <tr>
                      <td>Date</td>
                      <td>Time</td>
                      <td>Speaker</td>
                      <td>Title of the talk</td>
                    </tr>
                  </thead>

                  <tbody>
                    `;

          sc.data.map((d) => {
            out += `
            <tr>
                      <td style="min-width: fit-content; text-wrap: nowrap">${d.date}</td>
                      <td style="min-width: fit-content; text-wrap: nowrap">${d.time}</td>
                      <td style="min-width: fit-content; text-wrap: nowrap">${d.name}</td>
                      <td>${d.title}</td>
                    </tr>
                  
        `;
          });

          out += `
            </tbody>
                </table>
              </div>
            </div>
          </div>
          `;
        });
      } else {
        out += `
          <div class="table-responsive table-div" style="padding: 4px 0">
            <table class="schedule-table table table-bordered align-middle abot-txt-innr">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Time</td>
                  <td>Speaker</td>
                  <td>Title of the talk</td>
                </tr>
              </thead>

              <tbody>

      `;

        item.data.map((d) => {
          out += `

                <tr>
                  <td style="min-width: fit-content; text-wrap: nowrap">${d.date}</td>
                  <td style="min-width: fit-content; text-wrap: nowrap">${d.time}</td>
                  <td style="min-width: fit-content; text-wrap: nowrap">${d.name}</td>
                  <td>${d.title}</td>
                </tr>

          `;
        });

        out += `
        </tbody>
            </table>
          </div>
        `;
      }

      out += `</div>
        </div>`;
    });

    placeholder.innerHTML = out;
  });

setTimeout(() => {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.classList.toggle("table-responsive");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}, 2000);
