import { Point} from "./Point";

export class Day3 {
    findMinPath = (matchingPoints: Array<Point>, path1: Array<string>, path2: Array<string>): number => {
        const points1 = this.buildPoints(path1);
        const points2 = this.buildPoints(path2);

        let minPath = null;
        matchingPoints.forEach((point: Point) => {
            const currentDistance = this.getDistanceInPath(point, points1) + this.getDistanceInPath(point, points2);
            if (minPath === null || currentDistance < minPath) {
                minPath = currentDistance;
            }
        });

        return minPath;
    };

    getDistanceInPath = (currentPoint: Point, points: Array<Point>): number => {
        let count = 0;
        for (let i = 0; i < points.length; i++) {
            count++;
            if (points[i].equal(currentPoint) === 0) {
                return count;
            }
        }

        return count;
    }

    findMinDistance = (matchingPoints: Array<Point>): number => {
        return this.manhattanDistance(this.findMinDistancePoint(matchingPoints), new Point(0, 0))
    };

    findMinDistancePoint = (matchingPoints: Array<Point>): Point => {
        const basePoint = new Point(0, 0);
        return matchingPoints.reduce((previousValue, currentValue) => {
            if (previousValue === null ||
                this.manhattanDistance(previousValue, basePoint) > this.manhattanDistance(currentValue, basePoint)) {
                return currentValue;
            }

            return previousValue
        });
    };

    manhattanDistance = (p1: Point, p2: Point): number => {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    }

    findMatchingPoints = (path1: Array<string>, path2: Array<string>): Array<Point> => {
        const points1 = this.buildPoints(path1);
        const points2 = this.buildPoints(path2)

        return points1.filter((item1: Point) => {
            return points2.filter((item2: Point) => {
                return item2.equal(item1) === 0
            }).length > 0;
        })
    };

    buildPoints = (paths:Array<string>): Array<Point> => {
        let currentPoint = new Point(0, 0);
        let points = new Array<Point>();

        paths.forEach((path: string): void => {
            const newPoint = this.getNewPoint(currentPoint, path);
            let iterationPoints: Array<Point> = null

            const difference = newPoint.equal(currentPoint);
            if (difference === 1) {
                iterationPoints = this.getPointsBetween(currentPoint, newPoint)
            } else if (difference === -1) {
                iterationPoints = this.getPointsBetween(newPoint, currentPoint).reverse()
            }

            iterationPoints.slice(1).forEach((point: Point) => {
                points.push(point)
            })
            currentPoint = newPoint
        });

        return points;
    };

    getPointsBetween = function(min: Point, max: Point): Array<Point>
    {
        let points = new Array<Point>();
        for (let x = min.x; x <= max.x; x++) {
            for (let y = min.y; y <= max.y; y++) {
                points.push(new Point(x, y))
            }
        }

        return points;
    }

    getNewPoint = function (current: Point, path: string): Point {
        const direction = path.substr(0,1);
        const length = parseInt(path.substr(1));
        let x = current.x;
        let y = current.y;
        switch (direction) {
        case 'U':
            y += length;
            break;
        case 'D':
            y -= length;
            break;
        case 'R':
            x += length;
            break;
        case 'L':
            x -= length;
            break;
        }

        return new Point(x, y);
    }
}
