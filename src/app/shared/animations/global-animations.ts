import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";

export const fadeExpand = trigger("fadeExpand", [
  state(
    "closed",
    style({
      opacity: 0,
      height: "0px",
      padding: "0px",
      overflow: "hidden",
    })
  ),
  state(
    "open",
    style({
      opacity: 1,
      height: "*",
      padding: "*",
      overflow: "hidden",
    })
  ),
  transition("closed <=> open", animate("0.4s ease")),
]);

export const fadeInOut = trigger("fadeInOut", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("500ms ease-in-out", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("400ms ease-out", style({ opacity: 0 }))]),
]);

export const staggerFadeDown = trigger("staggerFadeDown", [
  transition("out => in", [
    query(
      ".advantages__content-block",
      [
        style({ opacity: 0, transform: "translateY(-30px)" }),
        stagger(600, [
          animate(
            "700ms ease-in-out",
            style({ opacity: 1, transform: "translateY(0)" })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const slideInOutRightToLeft = trigger("slideInOutRightToLeft", [
  transition(":enter", [
    style({ transform: "translateX(100%)", opacity: 0 }),
    animate("400ms ease-in", style({ transform: "translateX(0)", opacity: 1 })),
  ]),
  transition(":leave", [
    animate(
      "400ms ease-in",
      style({ transform: "translateX(-100%)", opacity: 0 })
    ),
  ]),
]);
