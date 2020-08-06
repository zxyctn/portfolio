import 'package:flutter/material.dart';

import 'screens/main_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        textTheme: ThemeData.light().textTheme.copyWith(
          button: TextStyle(
            fontFamily: 'Didot',
            fontSize: 50,
            fontWeight: FontWeight.w700,
          ),
          headline1: TextStyle(
            fontFamily: 'Didot',
            fontSize: 50,
            fontWeight: FontWeight.w700,
          ),
          bodyText1: TextStyle(
            fontFamily: 'Didot',
            fontSize: 35,
          )
        ),
      ),
      debugShowCheckedModeBanner: false,
      home: MainScreen(),
    );
  }
}
