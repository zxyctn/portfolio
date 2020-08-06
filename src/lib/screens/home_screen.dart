import 'dart:math';

import 'package:flutter/material.dart';
import 'package:portfolio/widgets/color_scheme.dart';

import '../widgets/info_card.dart';
import '../widgets/hello.dart';
import '../widgets/project.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Map<String, bool> _expand = {
    'p_expenses': false,
    'Rendt': false,
    'shortener': false,
    'objectDetection': false,
    'Eventually': false,
    'Walls&Warriors': false,
    'rgb': false,
    'portfolio': false,
  };

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;

    double dynamicSize(String type, String side) {
      if (_width < 750 || _height < 500) {
        return 0.84 * _width;
      } else {
        if (side == 'h') {
          return 0.285 * _height;
        } else if (type == 'l') {
          return 0.7935 * _height;
        } else {
          return 0.387 * _height;
        }
      }
    }

    AnimatedContainer _projectTile(
      String title,
      String desc,
      Language lang,
      List<String> tech,
      String url,
      String key,
      String dir,
    ) {
      return AnimatedContainer(
        duration: Duration(
          milliseconds: 150,
        ),
        width: (dir == 'h')
            ? (!_expand[key]
                ? dynamicSize('s', 'w')
                : dynamicSize('s', 'w') * 2)
            : dynamicSize('s', 'w'),
        height: (dir == 'v')
            ? (!_expand[key]
                ? dynamicSize('s', 'h')
                : dynamicSize('s', 'h') * 2)
            : dynamicSize('s', 'h'),
        child: GestureDetector(
          onTap: () {
            setState(() {
              _expand[key] = !_expand[key];
            });
          },
          child: Project(
            title: title,
            description: desc,
            lang: lang,
            tech: tech,
            url: url,
            expandable: _expand[key],
            expandDir: dir,
          ),
        ),
      );
    }

    double maxWidth() {
      double w1, w2, w3, w4;

      w1 = _expand['portfolio'] ? dynamicSize('s', 'w') : 0;
      w2 = _expand['p_expenses'] ? dynamicSize('s', 'w') : 0;
      w3 = _expand['Rendt'] ? dynamicSize('s', 'w') : 0;
      w4 = _expand['shortener'] ? dynamicSize('s', 'w') : 0;

      return max(w1 + w2, w3 + w4);
    }

    double maxHeight() {
      double h1, h2, h3, h4;

      h1 = _expand['portfolio'] ? dynamicSize('s', 'h') : 0;
      h2 = _expand['p_expenses'] ? dynamicSize('s', 'h') : 0;
      h3 = _expand['Rendt'] ? dynamicSize('s', 'h') : 0;
      h4 = _expand['shortener'] ? dynamicSize('s', 'h') : 0;

      return max(h1 + h2, h3 + h4);
    }

    return Container(
      width: _width,
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Container(
                width: dynamicSize('l', 'w'),
                child: Column(
                  children: [
                    Container(
                      height: 0.05 * _height,
                    ),
                    Container(
                      height: dynamicSize('l', 'h'),
                      width: dynamicSize('l', 'w'),
                      child: Hello(),
                    ),
                    SizedBox(
                      height: 21,
                    ),
                    Container(
                      height: dynamicSize('l', 'h'),
                      width: dynamicSize('l', 'w'),
                      child: InfoCard(),
                    ),
                    Container(
                      height: 0.1 * _height,
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              width: 21,
            ),
            SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Container(
                width: (maxWidth() + dynamicSize('l', 'w') * 2 + 50),
                height: maxHeight() + dynamicSize('s', 'h') * 2 + 465,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      height: 0.05 * _height,
                    ),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          child: _projectTile(
                            'Portfolio',
                            'A responsive and modern showcase website for personal and group projects.',
                            Language.dart,
                            [
                              'Flutter',
                            ],
                            'https://github.com/zxyctn/portfolio',
                            'portfolio',
                            _width > 700 ? 'h' : 'v',
                          ),
                        ),
                        SizedBox(
                          width: 21,
                        ),
                        Container(
                          child: _projectTile(
                            'Personal Expenses',
                            'A cross-platfrom mobile application that calculates total spendings of the user in a week with the entered values.',
                            Language.dart,
                            [
                              'Flutter',
                            ],
                            'https://github.com/zxyctn/p_expenses',
                            'p_expenses',
                            _width > 700 ? 'h' : 'v',
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 21,
                    ),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          child: _projectTile(
                            'Rendt',
                            'A cross-platform desktop application developed for utilization of idle computer power to be used in return of a fee for the usage in P2P fashion.',
                            Language.python,
                            [
                              'PyQt5',
                              'Docker',
                              'Stripe',
                            ],
                            'https://github.com/rendtTeam/rendt',
                            'Rendt',
                            _width > 700 ? 'h' : 'v',
                          ),
                        ),
                        SizedBox(
                          width: 21,
                        ),
                        Container(
                          child: _projectTile(
                            'URL shortener',
                            'A cloud-native application with a REST API for URL shortening and viewing link analytics, both in-app and for 3rd party usage.',
                            Language.java,
                            [
                              'Quarkus',
                              'Bootstrap',
                              'Docker',
                            ],
                            'https://github.com/CS443-Group-12/URL_Shortener',
                            'shortener',
                            _width > 700 ? 'h' : 'v',
                          ),
                        ),
                      ],
                    ),
                    Container(
                      height: 0.1 * _height,
                    ),
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
