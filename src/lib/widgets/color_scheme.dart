import 'package:flutter/material.dart';

enum Language {
  javascript,
  python,
  java,
  dart,
  php,
}

String strLang(Language lng) {
  if (lng == Language.dart) {
    return 'dart';
  } else if (lng == Language.javascript) {
    return 'javascript';
  } else if (lng == Language.java) {
    return 'java';
  } else if (lng == Language.python) {
    return 'python';
  }
  return 'php';
}

Map<Language, Map<String, Object>> colorScheme = {
  Language.javascript: {
    'bg': Color.fromRGBO(255, 255, 216, 1),
    'lang-bg': Color.fromRGBO(255, 255, 0, 1),
    'lang': Colors.black,
    'title': Colors.black,
    'desc': Color.fromRGBO(149, 149, 88, 1),
  },
  Language.python: {
    'bg': Color.fromRGBO(215, 243, 251, 1),
    'lang-bg': Color.fromRGBO(34, 128, 152, 1),
    'lang': Colors.white,
    'title': Colors.black,
    'desc': Color.fromRGBO(103, 187, 211, 1),
  },
  Language.java: {
    'bg': Color.fromRGBO(255, 229, 220, 1),
    'lang-bg': Color.fromRGBO(255, 107, 61, 1),
    'lang': Colors.white,
    'title': Colors.black,
    'desc': Color.fromRGBO(146, 112, 101, 1),
  },
  Language.dart: {
    'bg': Color.fromRGBO(168, 220, 255, 1),
    'lang-bg': Color.fromRGBO(9, 75, 119, 1),
    'lang': Colors.white,
    'title': Colors.black,
    'desc': Color.fromRGBO(90, 146, 184, 1),
  },
  Language.php: {
    'bg': Color.fromRGBO(216, 216, 255, 1),
    'lang-bg': Color.fromRGBO(75, 75, 196, 1),
    'lang': Colors.white,
    'title': Colors.black,
    'desc': Color.fromRGBO(107, 107, 172, 1),
  },
};
