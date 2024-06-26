import "css-doodle";

const CssDoodle = () => {
  return (
    <div>
      <css-doodle click-to-update>
        <style>
          @grid: 18 / 100vmax / #0a0c27; --hue: calc(180 + 1.5 * @x * @y);
          background: hsl(var(--hue), 50%, 70%); margin: -.5px; transition:
          @r(.5s) ease; clip-path: polygon(@p( '0 0, 100% 0, 100% 100%', '0 0,
          100% 0, 0 100%', '0 0, 100% 100%, 0 100%', '100% 0, 100% 100%, 0 100%'
          ));
        </style>
      </css-doodle>
    </div>
  );
};

export default CssDoodle;
