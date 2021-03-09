import 'package:flutter/material.dart';

List<Positioned> circles(BuildContext ctx) {
  double w = MediaQuery.of(ctx).size.width;
  double h = MediaQuery.of(ctx).size.height;

  return [
    Positioned(
      left: w > 700 ? -319/1920 * w : -400,
      top: w > 700 ? -437/1080 * h : -380,
      child: CircleAvatar(
        radius: w > 700 ? 875/3840 * w : 350,
        backgroundColor: Color.fromRGBO(188, 88, 135, 1),
      ),
    ),
    Positioned(
      right: w > 700 ? -272/1920 * w : -2220,
      top: w > 700 ? -184/1080 * h : -608,
      child: CircleAvatar(
        radius: w > 700 ? 1417/3840 * w : 1184,
        backgroundColor: Color.fromRGBO(98, 153, 226, 1),
      ),
    ),
    Positioned(
      bottom: -748/1080 * h,
      left: -319/1920 * w,
      child: CircleAvatar(
        radius: 875/3840 * w,
        backgroundColor: Color.fromRGBO(126, 86, 171, 1),
      ),
    ),
  ];
}
