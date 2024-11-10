const ball = document.querySelector(".ball");
popmotion.animate({
    from: "0px",
    to: "200px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        // console.log(update);
        ball.style.left = update;
    }
});

//# sourceMappingURL=motion.e4ff47a9.js.map
