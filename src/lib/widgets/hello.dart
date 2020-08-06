import 'package:flutter/material.dart';

class Hello extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;

    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Container(
        width: double.infinity,
        height: double.infinity,
        color: Color.fromRGBO(84, 233, 164, 1),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Flexible(
              flex: _width > 1000 ? 1 : 2,
              child: Container(
                height: double.infinity,
                color: Color.fromRGBO(213, 125, 195, 1),
                child: Transform.rotate(
                  angle: 270 * 3.14 / 180,
                  child: Center(
                    child: Text(
                      'Hello!',
                      style: Theme.of(context).textTheme.headline1.copyWith(
                            color: Colors.white,
                            fontSize: 0.04 * _height,
                          ),
                    ),
                  ),
                ),
              ),
            ),
            Flexible(
              flex: 5,
                child: Text(
                  'This is a personal website and a portfolio for the projects that I developed myself or contributed directly.',
                  style: Theme.of(context).textTheme.bodyText1.copyWith(
                        color: Color.fromRGBO(0, 46, 22, 1),
                        fontSize: 35/1080 * _height,
                      ),
                      textAlign: TextAlign.center,
                ),
              ),
            
          ],
        ),
      ),
    );
  }
}
