import farmingData from "@/lib/farmingData"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export function FarmingApp () {
  const [filters, setFilters] = useState({
    keys: '',
    min: '',
    max: ''
  })

  const [data, setData] = useState(farmingData)

  useEffect(() => {
    if (filters.keys || filters.min || filters.max) {
      const term = filters.keys.toLowerCase();
      setData(farmingData.filter((f) => {
        if (term && !f.seed.toLowerCase().includes(term) && !f.buy_from.toLowerCase().includes(term) && !f.grows.toLowerCase().includes(term) && !f.sell_to.toLowerCase().includes(term)) {
          return false

        }
        if (filters.min && f.level < parseInt(filters.min)) {
          return false
        }
        if (filters.max && f.level > parseInt(filters.max)) {
          return false
        }
        return true
      }))
    } else {
      setData(farmingData)
    }
  }, [filters])
  return (
    <div className="dark:bg-neutral-900 p-4 rounded-lg">

      <div className="flex gap-4 items-center">
        <div className="max-w-64">
          <Label htmlFor="keys">Search</Label>
          <Input type="text" id="keys"
            value={filters.keys}
            onChange={(e) => setFilters({ ...filters, keys: e.target.value })}
          />
        </div>

        <div className="max-w-32">
          <Label htmlFor="min">Min Level</Label>
          <Input type="text" id="min"
            value={filters.min}
            onChange={(e) => setFilters({ ...filters, min: e.target.value })}
          />
        </div>
        <div className="max-w-32">
          <Label htmlFor="max">Max Level</Label>
          <Input type="text" id="max"
            value={filters.max}
            onChange={(e) => setFilters({ ...filters, max: e.target.value })}
          />
        </div>


      </div>

      <div className="">
        {data.map((f, i) => {
          return (
            <Card className="md:hidden mb-4" key={i}>
              <CardContent className="flex flex-col gap-2 p-4">

                <div className="grid grid-cols-2 border-b">
                  <div>Level</div>
                  <div>{f.level}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Cost</div>
                  <div>{f.cost}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>XP</div>
                  <div>{f.xp}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Time (min)</div>
                  <div>{f.time}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Seed Name</div>
                  <div>{f.seed}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Buy From</div>
                  <div>{f.buy_from}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Grows</div>
                  <div>{f.grows}</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div>Sell To</div>
                  <div>{f.sell_to}</div>
                </div>
              </CardContent>
            </Card>
          )
        })}
        <Table className="hidden md:table w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Level</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>XP</TableHead>
              <TableHead>Time (min)</TableHead>
              <TableHead>Seed Name</TableHead>
              <TableHead>Buy From</TableHead>
              <TableHead>Grows</TableHead>
              <TableHead>Sell To</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((f, i) => {

              return (
                <TableRow key={i}>
                  <TableCell>{f.level}</TableCell>
                  <TableCell>{f.cost}</TableCell>
                  <TableCell>{f.xp}</TableCell>
                  <TableCell>{f.time}</TableCell>
                  <TableCell className=""><a href={'https://modb.rpgmobob.com/#/items/' + f.seed_id} target="_blank">{f.seed}</a></TableCell>
                  <TableCell className=""><a href={'https://modb.rpgmobob.com/#/vendors/' + f.buy_from_id} target="_blank">{f.buy_from}</a></TableCell>
                  <TableCell className=""><a href={'https://modb.rpgmobob.com/#/items/' + f.grows_id} target="_blank">{f.grows}</a></TableCell>
                  <TableCell className=""><a href={'https://modb.rpgmobob.com/#/vendors/' + f.sell_to_id} target="_blank">{f.sell_to}</a></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}