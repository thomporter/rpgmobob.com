// /src/components/HomeLinks.tsx
// Home Page Links

import { useEffect, useState } from "react";

// import links from '../db/linksNew3.json'
import homeLinks, { type HomeLink } from '@/lib/homeLinks'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function HomeLinks () {
  const [filter, setFilter] = useState("");
  const [filteredLinks, setFilteredLinks] = useState(homeLinks);
  const [category, setCategory] = useState("");
  const [filteredCats, setFilteredCats] = useState(Array.from(
    new Set(homeLinks.map(link => link.cat))
  ));
  const clearFilters = () => {
    setFilter("")
    setCategory("")
  }


  useEffect(() => {
    setFilteredLinks(
      homeLinks.filter(link => {
        return (
          (!filter
            || link.title.toLowerCase().includes(filter.toLowerCase())
            || link.link.toLowerCase().includes(filter.toLowerCase())
            || link.notes?.toLowerCase().includes(filter.toLowerCase())
          ) && (
            !category ||
            (category === link.cat)
          )
        )
      }))
  }, [filter, category]);

  useEffect(() => {
    setFilteredCats(
      Array.from(new Set(filteredLinks.map(link => link.cat)))
    );


  }, [filteredLinks])


  return (
    <div>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">

          <Input type="text" className="max-w-[14rem]" placeholder="Search..." value={filter}
            onChange={(event) => {
              setFilter(event.target.value);
            }} />
          {filter && <Button onClick={clearFilters}>Clear</Button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {
            !filteredCats.length ? <p>No links found.</p> : filteredCats.map((cat, i) => (
              <Card key={`cat-${i}`} className="min-w-80 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl flex justify-between">
                    {cat}
                    <Badge>{filteredLinks.filter((link) => link.cat === cat).length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="list-disc">
                    {filteredLinks.filter((link) => link.cat === cat).map((link, j) =>
                      <HomeLink key={`link-${i}-${j}`} link={link} />
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>

    </div>
  )
}

function HomeLink ({ link }: { link: HomeLink }) {
  return (
    <li className="ml-8">
      <a href={link.link} className="" target="_blank">{link.title}</a>
      {link.badge && (<Badge variant="secondary">{link.badge}</Badge>)}
      {link.notes && link.notes_link && (
        <span className="">&nbsp;(
          <a href={link.notes_link} target="_blank" rel="noopener">{link.notes}</a>
          )
        </span>
      )}
      {link.notes && !link.notes_link && (
        <span className="">&nbsp;({link.notes})</span>
      )}
    </li>
  )
}