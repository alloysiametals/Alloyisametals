import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import rawProducts from "../../data/Products.json";
import { Product } from "../../types/product";
import DynamicTable from "../../components/DynamicTable";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // ✅ Safe flattening
  const allProducts: Product[] = Object.values(
    rawProducts as unknown as Record<string, Product[]>
  )
    .flatMap((group) => (Array.isArray(group) ? group : []))
    .filter(
      (item): item is Product =>
        !!item &&
        typeof item === "object" &&
        "id" in item &&
        "name" in item &&
        "category" in item &&
        "description" in item &&
        "image" in item
    );

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-primary font-lato px-4">
          <div className="text-center p-6 md:p-8 bg-white shadow-2xl max-w-md w-full border-l-4 border-primary">
            <div className="text-5xl md:text-6xl text-primary mb-4">⚠️</div>
            <h2 className="text-xl md:text-2xl font-semibold text-dark1 font-montserrat">
              Product Not Found
            </h2>
            <p className="text-dark2 text-base md:text-lg">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ✅ Separate Type Analysis table & other tables
  const typeAnalysisTable = product.tables?.find((t) =>
    t.title?.toLowerCase().includes("type analysis")
  );
  const otherTables = product.tables?.filter((t) => t !== typeAnalysisTable);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-8 lg:px-12 font-lato">
        <div className="max-w-5xl mx-auto">
          {/* Banner */}
          {product.image && (
            <div className="relative mb-10 overflow-hidden shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat drop-shadow-xl text-center">
                  {product.name}
                </h1>
              </div>
            </div>
          )}

          {/* Overview */}
          {product.description && (
            <div className="mb-8 shadow-md overflow-hidden rounded-lg">
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                Product Overview
              </div>
              <div className="bg-white text-dark2 p-6 font-lato text-base md:text-lg">
                <p className="whitespace-pre-line">{product.description}</p>
              </div>
            </div>
          )}
{/* Standards */}
          {product.standards && (
            <div className="mb-6 shadow-md overflow-hidden rounded-lg">
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                Standards
              </div>
              <div className="bg-white text-dark2 p-6 font-lato text-base md:text-lg">
                {Array.isArray(product.standards) ? (
                  <ul className="list-disc pl-6">
                    {product.standards.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="list-disc pl-6">
                    {Object.entries(product.standards).map(([_, v]) => (
                      <li key={v as string}>{v}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Sizes Available */}
          {product.sizesAvailable && (
            <div className="mb-6 shadow-md overflow-hidden rounded-lg">
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                Sizes Available
              </div>
              <div className="bg-white text-dark2 p-6 font-lato text-base md:text-lg">
                {Array.isArray(product.sizesAvailable) ? (
                  <ul className="list-disc pl-6">
                    {product.sizesAvailable.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="list-disc pl-6">
                    {Object.entries(product.sizesAvailable).map(([k, v]) => (
                      <li key={k}>
                        <strong>{k}:</strong> {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          {/* Specifications */}
         {product.specifications && (
  <div className="mb-6 shadow-md overflow-hidden rounded-lg">
    <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
      Specifications
    </div>
    <div className="bg-white text-dark2 p-6 font-lato text-base md:text-lg">
      {Array.isArray(product.specifications) ? (
        <ul className="list-disc pl-6">
          {product.specifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <ul className="list-disc pl-6">
          {Object.entries(product.specifications).map(([k, v]) => (
            <li key={k}>
              <strong>
                {k
                  .replace(/([A-Z])/g, " $1") // split camelCase
                  .replace(/^./, (str) => str.toUpperCase())}:
              </strong>{" "}
              {v}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)}

          {/* Type Analysis Table */}
          {typeAnalysisTable && (
            <div className="mb-6 shadow-md overflow-hidden rounded-lg">
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                {typeAnalysisTable.title}
              </div>
              <div className="bg-white text-dark1 p-6 font-lato overflow-x-auto">
                <DynamicTable
                  groupBy={typeAnalysisTable.groupBy}
                  columnHeaders={typeAnalysisTable.columnHeaders}
                  data={typeAnalysisTable.data}
                />
              </div>
            </div>
          )}

          

          {/* Dynamic Sections */}
          {(
            [
              "corrosionResistance",
              "workability",
              "applications",
              "heatResistance",
              "fabricationGuidelines",
              "coldWorking",
              "hotWorking",
              "machinability",
              "heatTreatment",
              "weldability",
              "characteristics",
            ] as (keyof Product)[]
          ).map((section) => {
            const value = product[section];
            if (!value) return null;

            return (
              <div
                key={section}
                className="mb-6 shadow-md overflow-hidden rounded-lg"
              >
                <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat capitalize">
                  {section.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </div>
                <div className="bg-white text-dark2 p-6 font-lato text-base md:text-lg">
                  {Array.isArray(value) ? (
                    <ul className="list-disc pl-6">
                      {value.map((v, i) => (
                        <li key={i}>{String(v)}</li>
                      ))}
                    </ul>
                  ) : typeof value === "string" ? (
                    <p>{value}</p>
                  ) : typeof value === "object" ? (
                    <ul className="list-disc pl-6">
                      {Object.entries(value).map(([k, v]) => (
                        <li key={k}>
                          <strong>{k}:</strong> {String(v)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}

          {/* Room Temperature Hardness */}
          {product.averageRoomTemperatureHardness && (
            <div className="mb-8 shadow-md overflow-hidden rounded-lg">
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                Room Temperature Hardness
              </div>
              <div className="bg-white text-dark1 p-6 font-lato overflow-x-auto">
                <table className="table-auto w-full min-w-[400px] border border-gray-300">
                  <thead>
                    <tr className="bg-dark2 text-white">
                      <th className="p-3 text-left">Form</th>
                      <th className="p-3 text-left">Hardness (Rockwell)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(
                      product.averageRoomTemperatureHardness
                    ).map(([form, hardness]) => (
                      <tr key={form} className="hover:bg-gray-100 border-t">
                        <td className="p-3 capitalize">{form}</td>
                        <td className="p-3">{String(hardness)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Other Tables */}
          {otherTables?.map((table, index) => (
            <div
              key={index}
              className="mb-6 shadow-md overflow-hidden rounded-lg"
            >
              <div className="bg-primary text-white font-bold text-lg md:text-xl px-6 py-3 font-montserrat">
                {table.title}
              </div>
              <div className="bg-white text-dark1 p-6 font-lato overflow-x-auto">
                <DynamicTable
                  groupBy={table.groupBy}
                  columnHeaders={table.columnHeaders}
                  data={table.data}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
