import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'color_scheme.dart';

class Project extends StatefulWidget {
  final Language lang;
  final String title;
  final String description;
  final String url;
  final String expandDir;
  final List<String> tech;
  final bool expandable;

  Project({
    @required this.lang,
    @required this.title,
    @required this.description,
    @required this.tech,
    @required this.url,
    @required this.expandable,
    @required this.expandDir,
  });

  @override
  _ProjectState createState() => _ProjectState();
}

class _ProjectState extends State<Project> {
  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    var _expanded = widget.expandable;
    final Map _colorScheme = colorScheme[widget.lang];

    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Container(
        height: double.infinity,
        color: _colorScheme['bg'],
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Flexible(
              flex: 2,
              child: Padding(
                padding: EdgeInsets.only(
                  left: 0.035 * _height,
                  right: 0.035 * _height,
                  top: 0.035 * _height,
                ),
                child: Row(
                  children: [
                    Flexible(
                      fit: FlexFit.tight,
                      child: Text(
                        widget.title,
                        style: Theme.of(context).textTheme.button.copyWith(
                              color: _colorScheme['title'],
                              fontSize: 0.03 * _height,
                            ),
                      ),
                    ),
                    if (_expanded && widget.expandDir == 'h')
                      Flexible(
                        child: Text(
                          'Tools',
                          style: Theme.of(context).textTheme.button.copyWith(
                                color: _colorScheme['title'],
                                fontSize: 0.03 * _height,
                              ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
            Flexible(
              flex: 3,
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 0.035 * _height),
                child: Row(
                  children: [
                    Flexible(
                      child: Text(
                        widget.description,
                        style: Theme.of(context).textTheme.bodyText1.copyWith(
                              fontSize: _width < 700
                                  ? 0.025 * _height
                                  : 0.018 * _height,
                              color: _colorScheme['desc'],
                            ),
                      ),
                    ),
                    //   ],
                    // ),
                    if (_expanded && widget.expandDir == 'h')
                      SizedBox(
                        width: 21 / 1920 * _width,
                      ),
                    if (_expanded && widget.expandDir == 'h')
                      Flexible(
                          child: ListView.builder(
                        itemCount: widget.tech.length,
                        itemBuilder: (ctx, i) => Text(
                          '* ${widget.tech[i]}',
                          style: Theme.of(context).textTheme.bodyText1.copyWith(
                                fontSize: _width < 700
                                    ? 0.025 * _height
                                    : 0.018 * _height,
                                color: _colorScheme['desc'],
                              ),
                        ),
                      )),
                  ],
                ),
              ),
            ),
            if (_expanded && widget.expandDir == 'v')
              Flexible(
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: 0.035 * _height),
                  child: Text(
                    'Tools',
                    style: Theme.of(context).textTheme.button.copyWith(
                          color: _colorScheme['title'],
                          fontSize: 0.03 * _height,
                        ),
                  ),
                ),
              ),
            if (_expanded && widget.expandDir == 'v')
              SizedBox(
                height: 0.01 * _height,
              ),
            if (_expanded && widget.expandDir == 'v')
              Flexible(
                flex: 2,
                  child: ListView.builder(
                itemCount: widget.tech.length,
                itemBuilder: (ctx, i) => Padding(
                  padding: EdgeInsets.symmetric(horizontal: 0.035 * _height),
                  child: Text(
                    '* ${widget.tech[i]}',
                    style: Theme.of(context).textTheme.bodyText1.copyWith(
                          fontSize:
                              _width < 700 ? 0.025 * _height : 0.018 * _height,
                          color: _colorScheme['desc'],
                        ),
                  ),
                ),
              )),
            Flexible(
              flex: 2,
              fit: FlexFit.tight,
              child: Container(
                color: _expanded ? _colorScheme['lang-bg'] : null,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Flexible(
                      flex: 1,
                      child: Container(
                        alignment: Alignment.center,
                        color: _colorScheme['lang-bg'],
                        child: Text(
                          strLang(widget.lang),
                          style: Theme.of(context).textTheme.bodyText1.copyWith(
                                fontWeight: FontWeight.w700,
                                color: _colorScheme['lang'],
                                fontSize: 35 / 1080 * _height,
                              ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ),
                    if (!_expanded)
                      Flexible(
                        flex: 1,
                        child: Container(),
                      ),
                    if (_expanded)
                      Flexible(
                        flex: 1,
                        child: Container(
                          alignment: Alignment.center,
                          color: _colorScheme['lang-bg'],
                          child: GestureDetector(
                            onTap: () async {
                              await launch(widget.url);
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Text(
                                  'repo',
                                  style: Theme.of(context)
                                      .textTheme
                                      .bodyText1
                                      .copyWith(
                                        fontWeight: FontWeight.w700,
                                        color: _colorScheme['lang'],
                                        fontSize: 35 / 1080 * _height,
                                      ),
                                  textAlign: TextAlign.center,
                                ),
                                SizedBox(
                                  width: 10 / 1920 * _width,
                                ),
                                Image.asset(
                                  'assets/images/github.png',
                                  width: 0.03 * _height,
                                  color: _colorScheme['lang'],
                                ),
                              ],
                            ),
                          ),
                        ),
                      )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
