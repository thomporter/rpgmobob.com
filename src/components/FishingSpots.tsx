import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "./ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import fishingSpots, { type FishingSpots } from "@/lib/fishingSpots";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

type ActiveDropdowns = {
  [key: string]: boolean
}

export function FishingSpots () {

  // filters we can set
  const [filters, setFilters] = useState({
    type: "",
    level: "",
    optimal: false
  });
  const [haveFilters, setHaveFilters] = useState(false);

  // type definition for use state, must be a better way...
  const ad: ActiveDropdowns = {}
  const [activeDropDowns, setActiveDropDowns] = useState(ad)

  // our filtered list of spots.
  const [spots, setSpots] = useState(fishingSpots)
  const [showing, setShowing] = useState('All Fishing Spots')



  /**
 * Updates the filters based on the given update type and value.  Also takes care of maintaining state in the URL params.
 *
 */
  function updateFilters (updateType: string, updateValue: string | boolean) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());


    if (updateType === 'optimal') {
      setFilters({ ...filters, optimal: !filters.optimal })
      if (filters.optimal) { delete params.optimal; }
      else params.optimal = 'true';
      // params.optimal = !filters.optimal ? 'true' : ''
      history.pushState({ page: 'Fishing Spots' }, 'Fishing Spots', '/fishing?' + new URLSearchParams(params).toString());
      // location.replace()
    } else if (updateType == 't&l') {
      const [type, level] = updateValue.toString().split(':')
      history.pushState({ page: 'Fishing Spots' }, 'Fishing Spots', '/fishing?' + new URLSearchParams({ ...params, type, level }).toString());
      setFilters({ ...filters, type, level })
    } else {
      //ts-ignore
      setFilters({ ...filters, type: updateValue.toString(), level: '' })
    }

  }

  // update the spots based on the filters
  useEffect(() => {
    const newSpots: FishingSpots = {};

    Object.keys(fishingSpots).map((k) => {
      newSpots[k] = {}
      Object.keys(fishingSpots[k]).map(j => {
        newSpots[k][j] = [];
        Object.keys(fishingSpots[k][j]).map((i) => {
          // @ts-expect-error
          if (filters.optimal && !fishingSpots[k][j][i].optimal) return;
          if (filters.type && filters.type !== k) return;
          if (filters.level && filters.level !== j) return;
          // @ts-expect-error
          newSpots[k][j].push(fishingSpots[k][j][i]);
        })

      })
    })
    setSpots(newSpots)
  }, [filters])

  // string of text saying what we are showing
  useEffect(() => {
    let text = '';
    if (filters.optimal) { text += 'Optimal ' }
    if (filters.type) { text += filters.type }
    if (filters.level) { text += ' (' + (filters.level.match(/-/) ? filters.level : '1-' + filters.level) + ')' }
    if (text === '') {
      text = 'All Fishing Spots';
      setHaveFilters(false)
    }
    else {
      text += ' Spots'
      setHaveFilters(true)
    }
    setShowing(text)
  }, [filters])

  // set the filters based on the URL params (passing empty array to only run once.)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    const urlFilters: { [key: string]: string | boolean } = {}

    if (params.optimal === 'true') urlFilters.optimal = true;
    if (params.type) urlFilters.type = params.type;
    if (params.level) urlFilters.level = params.level;
    setFilters({ ...filters, ...urlFilters })
  }, [])

  function resetFilters () {
    setFilters({ optimal: false, type: '', level: '' })
    history.pushState({ page: 'Fishing Spots' }, 'Fishing Spots', '/fishing');
  }


  return (<>
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription className="flex gap-2 items-center">
          Showing {showing}
          <Button size="sm" disabled={!haveFilters} className="select-none uppercase" variant="secondary" onClick={resetFilters}>Show All</Button>
        </CardDescription>
      </CardHeader>
      <hr className="mx-4 mb-4" />
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2 items-center mb-2">
          <Switch checked={filters.optimal} onCheckedChange={() => updateFilters('optimal', !filters.optimal)} id="optimal-only" />
          <label className="cursor-pointer" htmlFor="optimal-only">Optimal Spots Only</label>
        </div>

        <div className="flex gap-2 items-center mb-2 flex-wrap">
          {Object.keys(fishingSpots).map((rodType, i) => {
            return (<DropdownMenu modal={false} onOpenChange={(open) => {
              setActiveDropDowns(prevItems => { return { ...prevItems, [rodType]: open } });
            }} key={i}>
              <DropdownMenuTrigger className="bg-secondary text-secondary-foreground p-2 rounded-md flex gap-2 items-center" >
                {rodType}
                <ChevronDownIcon
                  className="transition-transform duration-200"
                  style={{ transform: activeDropDowns[rodType] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.keys(fishingSpots[rodType]).map((level, j) => {

                  return (
                    <DropdownMenuItem
                      key={j}
                      onClick={() => updateFilters('t&l', rodType + ':' + level)}
                    >
                      {level.match(/-/) ? level : '1-' + level}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>)
          })}

        </div>
      </CardContent>
    </Card>{/* END OF FILTERS */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-2 mx-auto mt-4">
      {
        Object.keys(spots).map((rodType, i) => {
          let count = 0;
          Object.keys(spots[rodType]).map(level => {
            count += spots[rodType][level].length
          })
          if (count === 0) return;

          return (
            <Card key={i} >
              <CardHeader>
                <CardTitle>{rodType}
                  <Badge variant="secondary" className="ml-2">{count}</Badge>
                </CardTitle>
              </CardHeader>
              <hr className="mx-4 mb-4" />
              <CardContent className="flex flex-col gap-2">
                {Object.keys(spots[rodType]).map((level, j) => {
                  if (!spots[rodType][level].length) return;
                  return <div key={j} className="flex flex-col gap-2">
                    <h3>{level.match(/-/) ? level : '1-' + level}</h3>
                    <div className="flex flex-col gap-2">
                      {spots[rodType][level].map((spot, i) => {

                        return (<li className={spot.optimal ? 'text-green-600 dark:text-green-500' : ''} key={i}>
                          {spot.optimal ? '* ' : ''}
                          {spot.location} - {spot.coords}
                          {spot.notes && <span>&nbsp;({spot.notes})</span>}
                        </li>)

                      })}
                    </div>
                  </div>
                })}
              </CardContent>
            </Card>
          )
        })
      }

    </div>
  </>
  )

}
