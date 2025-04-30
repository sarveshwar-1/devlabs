export default function OrbitLoader() {
  return (
    <>
      {/* scoped styles for keyframes + animation utilities */}
      <style>
        {`
          @keyframes rotate-one {
            0% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
            }
          }
          @keyframes rotate-two {
            0% {
              transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
            }
          }
          @keyframes rotate-three {
            0% {
              transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
            }
          }
          .animate-rotate-one {
            animation: rotate-one 1s linear infinite;
          }
          .animate-rotate-two {
            animation: rotate-two 1s linear infinite;
          }
          .animate-rotate-three {
            animation: rotate-three 1s linear infinite;
          }
        `}
      </style>

      {/* Blurred background circle */}
      <div
        className="
          absolute
          w-24 h-24
          rounded-full
          backdrop-blur-md
          top-[calc(50%_-_48px)]
          left-[calc(50%_-_48px)]
          z-0
        "
      />

      <div
        className="
          absolute
          w-16 h-16
          rounded-full
          box-border
          top-[calc(50%_-_32px)]
          left-[calc(50%_-_32px)]
          perspective-[800px]
          z-10
        "
      >
        <div
          className="
            inner-one
            absolute
            box-border
            w-full h-full
            rounded-full
            border-b-[3px]
            border-[#EFEFFA]
            animate-rotate-one
          "
        />
        <div
          className="
            inner-two
            absolute
            box-border
            w-full h-full
            rounded-full
            border-r-[3px]
            border-[#EFEFFA]
            animate-rotate-two
          "
        />
        <div
          className="
            inner-three
            absolute
            box-border
            w-full h-full
            rounded-full
            border-t-[3px]
            border-[#EFEFFA]
            animate-rotate-three
          "
        />
      </div>
    </>
  )
}
