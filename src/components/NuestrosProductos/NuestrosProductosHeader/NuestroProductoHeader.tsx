import pd from "@/components/NuestrosProductos/NuestrosProductosHeader/img/pd_cover (convert.io).webp";

const NuestroProductoHeader = () => {
  return (
    <section className="w-full mt-[4rem] mb-[8rem]">
      <img src={pd} className="w-full object-cover min-h-[20vh]"  alt="nuestrosproductos" />
    </section>
  );
};

export default NuestroProductoHeader;
