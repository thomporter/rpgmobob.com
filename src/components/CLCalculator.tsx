import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "./icons"
export function CLCalculator () {
  const [loading, setLoading] = useState(false)
  const [uname, setUname] = useState("")
  const [stats, setStats] = useState({
    acc: 120,
    str: 120,
    def: 120,
    hp: 120,
    mag: 120,
    arc: 120,
  })
  const [combatLevel, setCombatLevel] = useState(120)
  const [err, setErr] = useState('')
  useEffect(() => {
    const opt1 = stats.acc + stats.str + stats.def + stats.mag + stats.hp;
    const opt2 = stats.acc + stats.str + stats.def + stats.arc + stats.hp;
    const mmod = stats.mag > opt2 / 4 ? 4 : 6;
    const amod = stats.arc > opt1 / 4 ? 4 : 6;
    const cl = (stats.acc + stats.str + stats.def + stats.hp) / 4 + stats.mag / mmod + stats.arc / amod;
    setCombatLevel(Math.floor(cl));
  }, [stats]);

  async function loadCharacterStats (e: any) {
    e?.preventDefault();
    if (!uname) {
      setErr('Please enter a character name');
      return;
    }
    setLoading(true);
    const res = await fetch('https://rpg-de2.mo.ee/playerskills?n=' + uname);
    setLoading(false);
    if (!res.ok) {
      alert('Error: ' + res.statusText);
      // console.error(res);
      return;
    }

    type PlayerStat = {
      board: string
      score: number
    }

    const json: PlayerStat[] = await res.json();
    if (!json.length) {
      setErr('No data found for ' + uname);
      return;
    }
    setErr('')
    // console.log({ json });
    const jsonStats: { [key: string]: number } = {};
    json.map(stat => {
      jsonStats[stat.board] = stat.score;
    })
    // console.log({ jsonStats })
    const ns = {
      acc: jsonStats.accuracy || 1,
      str: jsonStats.strength || 1,
      def: jsonStats.defense || 1,
      hp: jsonStats.health || 1,
      mag: jsonStats.magic || 1,
      arc: jsonStats.archery || 1,
    };
    // console.table(ns)
    setStats(ns)
    // console.table(jsonStats)
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Load Stats Card */}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center text-xl border-b pb-4">Load User Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Character Name" value={uname} onChange={(e) => setUname(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && loadCharacterStats(e)} />
          {err && <p className="text-red-500">{err}</p>}
        </CardContent>
        <CardFooter className="justify-end">
          <Button color="primary" className="text-white" onClick={loadCharacterStats} >
            {loading ? <><Icons.spinner />
              Loading...
            </> : 'Load Stats'}</Button>
        </CardFooter>
      </Card>
      {/* Stats Card */}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center text-xl border-b pb-4">Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div><Label htmlFor="stat-acc">Accuracy</Label>
              <Input type="number" min="1" id="stat-acc"
                value={stats.acc}
                onChange={(e) => setStats({ ...stats, acc: parseInt(e.target.value) })}
              /></div>

            <div><Label htmlFor="stat-str">Strength</Label>
              <Input type="number" min="1" id="stat-str"
                value={stats.str}
                onChange={(e) => setStats({ ...stats, str: parseInt(e.target.value) })}
              /></div>

            <div><Label htmlFor="stat-def">Defense</Label>
              <Input type="number" min="1" id="stat-def"
                value={stats.def}
                onChange={(e) => setStats({ ...stats, def: parseInt(e.target.value) })}
              /></div>

            <div><Label htmlFor="stat-mag">Magic</Label>
              <Input type="number" min="1" id="stat-mag"
                value={stats.mag}
                onChange={(e) => setStats({ ...stats, mag: parseInt(e.target.value) })}
              /></div>

            <div><Label htmlFor="stat-hp">Health</Label>
              <Input type="number" min="1" id="stat-hp"
                value={stats.hp}
                onChange={(e) => setStats({ ...stats, hp: parseInt(e.target.value) })}
              /></div>

            <div><Label htmlFor="stat-arc">Archery</Label>
              <Input type="number" min="1" id="stat-arc"
                value={stats.arc}
                onChange={(e) => setStats({ ...stats, arc: parseInt(e.target.value) })}
              /></div>

          </div>
        </CardContent>
      </Card>
      {/* Results Card */}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center text-xl border-b pb-4">Combat Level</CardTitle>
        </CardHeader>
        <CardContent className="text-center flex flex-column items-center justify-center">
          <div className="text-3xl font-bold">{combatLevel}</div>
        </CardContent>
      </Card>
    </div>
  )
}