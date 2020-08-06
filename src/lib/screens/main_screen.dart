import 'package:flutter/material.dart';

import '../widgets/background.dart' as bg;
import 'portfolio_screen.dart';
import 'home_screen.dart';

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  var isHome = true;

  List<Widget> appBarButton(String text, bool isActive, double height) {
    return [
      Container(
        child: Text(
          text,
          style: Theme.of(context).textTheme.button.copyWith(
                color: isActive
                    ? Color.fromRGBO(255, 155, 202, 1)
                    : Color.fromRGBO(141, 36, 85, 1),
                fontSize: 50 / 1080 * height,
              ),
        ),
      ),
      Positioned(
        top: 60 / 1080 * height,
        child: Container(
          height: 5 / 1080 * height,
          width: 97 / 1080 * height,
          color: isActive
              ? Color.fromRGBO(222, 108, 162, 1)
              : Color.fromRGBO(129, 0, 60, 1),
        ),
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;

    return Container(
      color: Color.fromRGBO(168, 189, 230, 1),
      child: Stack(
        children: [
          ...bg.circles(context),
          Padding(
            padding: EdgeInsets.only(left: 0.05 * _width),
            child: Column(
              children: [
                Flexible(
                  flex: 3,
                  fit: FlexFit.tight,
                  child: Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 0,
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Flexible(
                          flex: 1,
                          child: Row(
                            children: [
                              FlatButton(
                                onPressed: () {
                                  setState(() {
                                    isHome = true;
                                  });
                                },
                                child: Stack(
                                  alignment: Alignment.topRight,
                                  children: [
                                    ...appBarButton('Home', isHome, _height),
                                  ],
                                ),
                              ),
                              FlatButton(
                                visualDensity: VisualDensity.compact,
                                onPressed: () {
                                  setState(() {
                                    isHome = false;
                                  });
                                },
                                child: Stack(
                                  alignment: Alignment.topRight,
                                  children: [
                                    ...appBarButton(
                                        'Portfolio', !isHome, _height),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        if (isHome)
                          SizedBox(
                            width: 21 / 1080 * _height,
                          ),
                      ],
                    ),
                  ),
                ),
                if (isHome) Flexible(flex: 11, child: HomeScreen()),
                if (!isHome) Flexible(flex: 11, child: PortfolioScreen()),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
