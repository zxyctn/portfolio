import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class InfoCard extends StatelessWidget {
  _launchURL(url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;

    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Container(
        height: double.infinity,
        padding: const EdgeInsets.all(15),
        color: Color.fromRGBO(110, 220, 255, 1),
        child: _width > 700
            ? Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  CircleAvatar(
                    backgroundImage: AssetImage('assets/images/profile.jpg'),
                    backgroundColor: Color.fromRGBO(110, 220, 255, 1),
                    radius: 0.1 * _height,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Ibrahim Mammadov',
                        style: Theme.of(context).textTheme.button.copyWith(
                              fontSize: 0.04 * _height,
                            ),
                      ),
                      Text(
                        'Master\'s student at',
                        style: Theme.of(context).textTheme.button.copyWith(
                              fontWeight: FontWeight.w400,
                              fontSize: 30 / 1080 * _height,
                            ),
                      ),
                      Row(
                        children: [
                          Text(
                            'University of ',
                            style: Theme.of(context).textTheme.button.copyWith(
                                  fontWeight: FontWeight.w400,
                                  fontSize: 30 / 1080 * _height,
                                ),
                          ),
                          Text(
                            'Weimar',
                            style: Theme.of(context).textTheme.button.copyWith(
                                  fontWeight: FontWeight.w400,
                                  fontSize: 30 / 1080 * _height,
                                  color: Color.fromRGBO(119, 0, 255, 1),
                                ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 20 / 1080 * _height,
                      ),
                      Container(
                        child: Row(
                          children: [
                            Container(
                              width: 0.04 * _height,
                              child: FlatButton(
                                child: Image.asset(
                                  'assets/images/linkedin.png',
                                  height: 0.04 * _height,
                                  width: 0.04 * _height,
                                  fit: BoxFit.cover,
                                ),
                                padding: EdgeInsets.all(0),
                                visualDensity: VisualDensity.compact,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                onPressed: () {
                                  _launchURL(
                                      'https://www.linkedin.com/in/zxyctn');
                                },
                              ),
                            ),
                            SizedBox(
                              width: 20 / 1920 * _width,
                            ),
                            Container(
                              width: 0.04 * _height,
                              child: FlatButton(
                                child: Image.asset(
                                  'assets/images/github.png',
                                  width: 0.04 * _height,
                                  height: 0.04 * _height,
                                  fit: BoxFit.cover,
                                ),
                                padding: EdgeInsets.all(0),
                                visualDensity: VisualDensity.compact,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                onPressed: () {
                                  _launchURL('http://github.com/zxyctn');
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              )
            : Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  CircleAvatar(
                    backgroundImage: AssetImage('assets/images/profile.jpg'),
                    backgroundColor: Color.fromRGBO(110, 220, 255, 1),
                    radius: 0.08 * _height,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Ibrahim Mammadov',
                        style: Theme.of(context).textTheme.button.copyWith(
                              fontSize: 0.04 * _height,
                            ),
                      ),
                      Text(
                        'Master\'s student at',
                        style: Theme.of(context).textTheme.button.copyWith(
                              fontWeight: FontWeight.w400,
                              fontSize: 30 / 1080 * _height,
                            ),
                      ),
                      Row(
                        children: [
                          Text(
                            'University of ',
                            style: Theme.of(context).textTheme.button.copyWith(
                                  fontWeight: FontWeight.w400,
                                  fontSize: 30 / 1080 * _height,
                                ),
                          ),
                          Text(
                            'Weimar',
                            style: Theme.of(context).textTheme.button.copyWith(
                                  fontWeight: FontWeight.w400,
                                  fontSize: 30 / 1080 * _height,
                                  color: Color.fromRGBO(119, 0, 255, 1),
                                ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 20 / 1080 * _height,
                      ),
                      Container(
                        child: Row(
                          children: [
                            Container(
                              width: 0.04 * _height,
                              child: FlatButton(
                                child: Image.asset(
                                  'assets/images/linkedin.png',
                                  height: 0.04 * _height,
                                  width: 0.04 * _height,
                                  fit: BoxFit.cover,
                                ),
                                padding: EdgeInsets.all(0),
                                visualDensity: VisualDensity.compact,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                onPressed: () {
                                  _launchURL(
                                      'https://www.linkedin.com/in/zxyctn');
                                },
                              ),
                            ),
                            SizedBox(
                              width: 20 / 1920 * _width,
                            ),
                            Container(
                              width: 0.04 * _height,
                              child: FlatButton(
                                child: Image.asset(
                                  'assets/images/github.png',
                                  width: 0.04 * _height,
                                  height: 0.04 * _height,
                                  fit: BoxFit.cover,
                                ),
                                padding: EdgeInsets.all(0),
                                visualDensity: VisualDensity.compact,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                onPressed: () {
                                  _launchURL('http://github.com/zxyctn');
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
      ),
    );
  }
}
