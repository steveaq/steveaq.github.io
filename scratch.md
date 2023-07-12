                <aside class="see-also">
                    <h2>{{ site.translations.text.see_also | default: "See also" }}</h2>
                    <ul>
                        {% assign next_posts = site.posts | where_exp:"post","post.is_generated != true" | where_exp:"post","post.path != page.path" %}
                        {% assign shuffled_array = next_posts | shuffle %}
                        {% for post in shuffled_array limit:3 %}
                            <li>
                                <a href="{{ post.url | prepend: site.baseurl }}">
                                    <h3>{{ post.title }}</h3>
                                    {% if post.optimized_image %}
                                        <img src="{{ post.optimized_image }}">
                                    {% elsif post.image %}
                                        <img src="{{ post.image }}">
                                    {% else %}
                                        <img src="/assets/img/off.jpg">
                                    {% endif %}
                                </a>
                            </li>
                         {% endfor %}