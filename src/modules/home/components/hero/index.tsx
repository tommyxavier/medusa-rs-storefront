import Image from "next/image";

const Hero = () => {
  return (
    // This div defines the overall height and width of your hero section
    // It's set to 75% of the viewport height and full width
    <div className="h-[75vh] w-full relative"> {/* Removed border, bg-subtle if you want image to fill completely */}
      {/* The Image component itself will fill this parent div due to layout="fill" */}
      <Image
        src="/store.jpg" // Confirm your path
        alt="Perfume display"
        layout="fill" // Makes the image fill its parent
        objectFit="cover" // Ensures the image covers the area, cropping if necessary
        priority // Load this image with high priority
      />
    </div>
  );
};

export default Hero;