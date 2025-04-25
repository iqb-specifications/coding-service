from typing import Optional

from pydantic import BaseModel, StrictStr


class Coder(BaseModel):
    id: StrictStr
    label: Optional[StrictStr] = None
