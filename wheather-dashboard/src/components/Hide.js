function Hide() {
    return (
      <>
      <div className="hidden md:block bg-blue-500 text-white p-4">
          Visible only on Desktop
      </div>
      <div className="block md:hidden bg-green-500 text-white p-4">
          Visible only on Mobile
      </div>
      </>
    );
  }
  export default Hide;