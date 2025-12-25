import { getAdventureById } from "@/lib/data";
import AdventureDetailClient from "@/components/adventures/adventure-detail-client";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const adventure = await getAdventureById(id);

  if (!adventure) {
    return {
      title: "Adventure not Found",
    };
  }

  return {
    title: `${adventure.title} | Explore India and Beyond`,
    description: adventure.shortDescription,
    openGraph: {
      title: adventure.title,
      description: adventure.shortDescription,
      images: [
        {
          url: adventure.imageSrc,
          width: 1200,
          height: 630,
          alt: adventure.altText,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const adventure = await getAdventureById(id);

  if (!adventure) {
    notFound();
  }

  return <AdventureDetailClient adventure={adventure} />;
}
