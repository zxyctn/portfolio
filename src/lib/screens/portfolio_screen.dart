import 'package:flutter/material.dart';

import '../widgets/project.dart';
import '../widgets/color_scheme.dart';

class PortfolioScreen extends StatefulWidget {
  @override
  _PortfolioScreenState createState() => _PortfolioScreenState();
}

class _PortfolioScreenState extends State<PortfolioScreen> {
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

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: _width + 200,
              height: 0.05 * _height,
            ),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _projectTile(
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
                SizedBox(
                  width: 21,
                ),
                _projectTile(
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
                SizedBox(
                  width: 21,
                ),
                _projectTile(
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
                SizedBox(
                  width: 21,
                ),
                _projectTile(
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
              ],
            ),
            SizedBox(
              height: 21,
            ),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _projectTile(
                  'Object detection',
                  'The project consists of image files taken from ImageNet for training and testing and python scripts to get image features with the ResNet50 model. ',
                  Language.python,
                  ['OpenCV', 'PyTorch'],
                  'https://github.com/zxyctn/objectDetection',
                  'objectDetection',
                  _width > 700 ? 'h' : 'v',
                ),
                SizedBox(
                  width: 21,
                ),
                _projectTile(
                  'Eventually',
                  'A social platform for planning and creating events individually and by groups that allows group and event invites etc.',
                  Language.php,
                  [
                    'Bootstrap',
                    'MySQL',
                    'JDBC',
                  ],
                  'https://github.com/zxyctn/Eventually',
                  'Eventually',
                  _width > 700 ? 'h' : 'v',
                ),
                SizedBox(
                  width: 21,
                ),
                _projectTile(
                  'Walls & Warriors',
                  'A desktop implementation of the board game "Walls & Warriors" with the existing and additional features.',
                  Language.java,
                  [
                    'Swing',
                  ],
                  'https://github.com/m4hmmd/cs319-Walls-and-Warriors',
                  'Walls&Warriors',
                  _width > 700 ? 'h' : 'v',
                ),
                SizedBox(
                  width: 21,
                ),
                _projectTile(
                  'RGB guessing game',
                  'A web-based interactive game to guess the randomly generated RGB encoded color.',
                  Language.javascript,
                  [
                    'Bootstrap',
                  ],
                  'https://github.com/zxyctn/RGB',
                  'rgb',
                  _width > 700 ? 'h' : 'v',
                ),
              ],
            ),
            Container(
              height: 0.1 * _height,
            ),
          ],
        ),
      ),
    );
  }
}
