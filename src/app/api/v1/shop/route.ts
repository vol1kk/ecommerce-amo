import prisma from "@/lib/prisma";
// import { Clothing } from "@/constants/clothing";
//
export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  const res = await prisma.item.findMany({
    include: { details: { include: { comments: true } } },
    ...(category && { where: { category } }),
  });

  return Response.json(res);
}

//   Clothing.map(async item => {
//     await prisma.item.create({
//       data: {
//         category: item.category,
//         brand: item.brand,
//         image: item.image,
//         name: item.name,
//         price: item.price,
//         isFavorite: item.isFavorite,
//         details: {
//           create: {
//             fabric: item.details.fabric,
//             fit: item.details.fit,
//             neck: item.details.neck,
//             sleeve: item.details.sleeve,
//             pattern: item.details.pattern,
//             style: item.details.style,
//             colors: item.details.colors,
//             sizes: item.details.sizes,
//             comments: {
//               create: { author: "Test", text: "Test", rating: 1 },
//             },
//           },
//         },
//       },
//     });
//   });
//
