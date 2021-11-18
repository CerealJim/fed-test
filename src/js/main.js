var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template: `{{#.}}
                <li class="reports_item">
                    <h2>
                        <div class="imgContainer"><a href="{{cover}}" target="_blank"><img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/></a></div>
                    </h2>
                    <article class="reports_docs">
                        {{#documents}}
                            <h3 class="reports_title">
                                <a href="{{url}}" target="_blank">{{title}}<span>({{file_size}} {{file_type}})</span></a>
                            </h3>
                        {{/documents}}
                    </article>
                </li>
            {{/.}}`,
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    );
  },
};

reportsWidget.init();
